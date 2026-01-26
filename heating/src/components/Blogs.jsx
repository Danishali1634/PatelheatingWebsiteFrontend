import React, { useState, useEffect, useCallback, useRef } from "react";
import {
    Calendar,
    User,
    ArrowRight,
    ArrowLeft,
    Home,
    ChevronLeft,
    ChevronRight,
    Loader2,
    Clock,
    Facebook,
    Instagram
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Blogs({ limit = 6, isHome }) {
    const [blogs, setBlogs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [categoriesLoading, setCategoriesLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [allPosts, setAllPosts] = useState([]);
    const observer = useRef();
    const isFetching = useRef(false);
    const navigate = useNavigate();

    const orange = "#ff7216";
    const dark = "#0d0d0d";

    const fetchAllPostTitles = useCallback(async () => {
        if (isHome) return;
        try {
            const response = await fetch("https://blog.patelheating.ca/wp-json/wp/v2/posts?per_page=100&_fields=id,title,slug");
            if (!response.ok) throw new Error("Failed to fetch post titles");
            const data = await response.json();
            setAllPosts(data);
        } catch (error) {
            console.error("Error fetching post titles:", error);
        }
    }, [isHome]);

    const fetchCategories = useCallback(async () => {
        if (isHome) return;
        setCategoriesLoading(true);
        try {
            const response = await fetch("https://blog.patelheating.ca/wp-json/wp/v2/categories?hide_empty=true");
            if (!response.ok) throw new Error("Failed to fetch categories");
            const data = await response.json();
            // Filter out 'Uncategorized' (usually ID 1 or slug 'uncategorized') and sort alphabetically
            const filteredData = data
                .filter(cat => cat.slug !== "uncategorized" && cat.id !== 1)
                .sort((a, b) => a.name.localeCompare(b.name));
            setCategories(filteredData);
        } catch (error) {
            console.error("Error fetching categories:", error);
        } finally {
            setCategoriesLoading(false);
        }
    }, [isHome]);

    const fetchBlogs = useCallback(async (pageNum, isInitial = false, catId = selectedCategory) => {
        if (isFetching.current) return;
        isFetching.current = true;
        setLoading(true);

        try {
            const perPage = isHome ? (limit || 6) : 10;
            let url = `https://blog.patelheating.ca/wp-json/wp/v2/posts?_embed&page=${pageNum}&per_page=${perPage}`;
            if (catId) {
                url += `&categories=${catId}`;
            }

            const response = await fetch(url);

            if (!response.ok) throw new Error("Failed to fetch blogs");

            const data = await response.json();
            const total = response.headers.get("X-WP-TotalPages");
            setTotalPages(Number(total) || 1);

            if (pageNum === 1) {
                setBlogs(data);
            } else {
                setBlogs(prev => [...prev, ...data]);
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
            isFetching.current = false;
        }
    }, [isHome, limit, selectedCategory]);

    useEffect(() => {
        fetchBlogs(1, true);
        fetchCategories();
        fetchAllPostTitles();
    }, [fetchBlogs, fetchCategories, fetchAllPostTitles]);

    const handleCategoryChange = (catId) => {
        setSelectedCategory(catId);
        setPage(1);
        setBlogs([]);
        fetchBlogs(1, true, catId);
    };

    // Load More functionality
    const handleLoadMore = () => {
        if (page < totalPages && !loading) {
            const next = page + 1;
            setPage(next);
            fetchBlogs(next);
        }
    };

    return (
        <>
            <Helmet>
                <title>Blog - Patel Heating & Air Conditioning</title>
                <meta name="description" content="Stay updated with the latest HVAC tips, energy-saving advice, and professional maintenance guides from Patel Heating & Air Conditioning." />
                <meta name="keywords" content="HVAC blog, heating tips, air conditioning advice, Brampton HVAC, Patel Heating blogs" />
            </Helmet>

            <div
                style={{
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    backgroundColor: isHome ? "transparent" : "#fff",
                    color: dark,
                    padding: isHome ? 0 : "80px 20px"
                }}
            >
                <div style={{
                    maxWidth: 1200,
                    margin: "0 auto"
                }}>
                    {/* Topic Explorer & Article Quick Link */}
                    {!isHome && (
                        <div style={{
                            marginBottom: 60,
                            padding: "40px",
                            background: "#f8fafc",
                            borderRadius: 32,
                            border: "1px solid #f1f5f9",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 24,
                            textAlign: "center"
                        }}>
                            <div>
                                <h2 style={{ fontSize: 28, fontWeight: 900, color: orange, marginBottom: 8 }}>Explore Articles</h2>
                                <p style={{ color: "#64748b", fontSize: 16 }}>Search for a specific blog post or filter by your favorite topic.</p>
                            </div>

                            <div style={{
                                width: "100%",
                                maxWidth: 600,
                                display: "flex",
                                flexDirection: "column",
                                gap: 16
                            }}>
                                {/* Article Direct Selection */}
                                <div style={{ position: "relative" }}>
                                    <select
                                        onChange={(e) => {
                                            const slug = e.target.value;
                                            if (slug) navigate(`/blog/${slug}`);
                                        }}
                                        style={{
                                            width: "100%",
                                            padding: "18px 24px",
                                            borderRadius: 20,
                                            border: `2px solid #e2e8f0`,
                                            background: "#fff",
                                            color: dark,
                                            fontSize: 16,
                                            fontWeight: 700,
                                            appearance: "none",
                                            cursor: "pointer",
                                            outline: "none",
                                            transition: "all 0.3s ease",
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                                        }}
                                    >
                                        <option value="">Search all stories / titles...</option>
                                        {allPosts.map((post) => (
                                            <option key={post.id} value={post.slug}>
                                                {post.title.rendered.replace(/&nbsp;/g, " ")}
                                            </option>
                                        ))}
                                    </select>
                                    <div style={{
                                        position: "absolute",
                                        right: 24,
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        pointerEvents: "none",
                                        color: orange
                                    }}>
                                        <ChevronRight size={20} style={{ transform: "rotate(90deg)" }} />
                                    </div>
                                </div>

                                {/* Category Filter */}
                                <div style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    gap: 12
                                }}>
                                    <button
                                        onClick={() => handleCategoryChange(null)}
                                        style={{
                                            padding: "10px 20px",
                                            borderRadius: 14,
                                            border: "none",
                                            background: selectedCategory === null ? orange : "#fff",
                                            color: selectedCategory === null ? "#fff" : "#64748b",
                                            fontSize: 14,
                                            fontWeight: 700,
                                            cursor: "pointer",
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                            transition: "all 0.2s ease"
                                        }}
                                    >
                                        All Topics
                                    </button>
                                    {categories.map(cat => (
                                        <button
                                            key={cat.id}
                                            onClick={() => handleCategoryChange(cat.id)}
                                            style={{
                                                padding: "10px 20px",
                                                borderRadius: 14,
                                                border: "none",
                                                background: selectedCategory === cat.id ? orange : "#fff",
                                                color: selectedCategory === cat.id ? "#fff" : "#64748b",
                                                fontSize: 14,
                                                fontWeight: 700,
                                                cursor: "pointer",
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                                transition: "all 0.2s ease"
                                            }}
                                        >
                                            {cat.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Loader */}
                    {loading && blogs.length === 0 ? (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                minHeight: 500,
                                flexDirection: "column",
                                gap: 20
                            }}
                        >
                            <Loader2 size={52} color={orange} className="animate-spin" />
                            <p style={{ color: "#6b7280", fontWeight: 600 }}>
                                Loading blogs...
                            </p>
                        </div>
                    ) : (
                        <>
                            {blogs.length > 0 ? (
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                                        gap: 32
                                    }}
                                >
                                    {blogs.map((blog) => (
                                        <article
                                            key={blog.id}
                                            style={{
                                                background: "#fff",
                                                borderRadius: 32,
                                                overflow: "hidden",
                                                border: "1px solid rgba(0,0,0,0.04)",
                                                boxShadow: "0 10px 40px -10px rgba(0,0,0,0.08)",
                                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                                display: "flex",
                                                flexDirection: "column",
                                                height: "100%"
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = "translateY(-12px)";
                                                e.currentTarget.style.boxShadow = "0 30px 60px -12px rgba(255, 114, 22, 0.15)";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "0 10px 40px -10px rgba(0,0,0,0.08)";
                                            }}
                                        >
                                            {/* Image Container */}
                                            <div style={{
                                                width: "100%",
                                                aspectRatio: "16 / 10",
                                                overflow: "hidden",
                                                position: "relative",
                                                backgroundColor: "#f1f5f9"
                                            }}>
                                                {/* Date Badge */}
                                                <div style={{
                                                    position: "absolute",
                                                    top: 20,
                                                    left: 20,
                                                    background: "rgba(255, 255, 255, 0.95)",
                                                    backdropFilter: "blur(8px)",
                                                    padding: "8px 16px",
                                                    borderRadius: 14,
                                                    fontSize: 12,
                                                    fontWeight: 800,
                                                    color: orange,
                                                    zIndex: 2,
                                                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.5px"
                                                }}>
                                                    {new Date(blog.date).toLocaleDateString("en-US", {
                                                        month: "short",
                                                        day: "numeric"
                                                    })}
                                                </div>

                                                <img
                                                    src={
                                                        blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                                                        "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800"
                                                    }
                                                    alt={blog.title.rendered}
                                                    loading="lazy"
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "contain",
                                                        padding: "10px",
                                                        transition: "transform 0.8s ease"
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                                                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                                />
                                            </div>

                                            {/* Content Area */}
                                            <div style={{
                                                padding: "32px",
                                                flex: 1,
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 16
                                            }}>
                                                <div style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 8,
                                                    fontSize: 13,
                                                    fontWeight: 600,
                                                    color: "#94a3b8"
                                                }}>
                                                    <User size={14} color={orange} />
                                                    {blog._embedded?.author?.[0]?.name || "Patel Heating"}
                                                </div>

                                                <h2
                                                    style={{
                                                        fontSize: 22,
                                                        lineHeight: 1.4,
                                                        fontWeight: 800,
                                                        color: dark,
                                                        // Limit to 2 lines
                                                        display: "-webkit-box",
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: "vertical",
                                                        overflow: "hidden",
                                                        margin: 0
                                                    }}
                                                    dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                                                />

                                                <p style={{
                                                    color: "#64748b",
                                                    lineHeight: 1.7,
                                                    fontSize: 15,
                                                    margin: 0,
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden"
                                                }}>
                                                    {blog.excerpt.rendered.replace(/<[^>]*>?/gm, "")}
                                                </p>

                                                <Link
                                                    to={`/blog/${blog.slug}`}
                                                    style={{
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                        gap: 8,
                                                        color: orange,
                                                        fontWeight: 700,
                                                        fontSize: 15,
                                                        textDecoration: "none",
                                                        marginTop: "auto",
                                                        width: "fit-content",
                                                        transition: "all 0.3s ease"
                                                    }}
                                                    onMouseEnter={(e) => e.currentTarget.style.gap = "12px"}
                                                    onMouseLeave={(e) => e.currentTarget.style.gap = "8px"}
                                                >
                                                    Read More <ArrowRight size={18} />
                                                </Link>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ textAlign: "center", padding: "60px 20px" }}>
                                    <h3 style={{ fontSize: 24, fontWeight: 700, color: dark }}>No more blogs found.</h3>
                                    <p style={{ color: "#6b7280", marginTop: 10 }}>Try going back to previous pages.</p>
                                </div>
                            )}

                            {/* Load More Button */}
                            {!isHome && page < totalPages && (
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 60,
                                        gap: 20
                                    }}
                                >
                                    <button
                                        onClick={handleLoadMore}
                                        disabled={loading}
                                        style={{
                                            padding: "16px 40px",
                                            borderRadius: 50,
                                            border: "none",
                                            background: loading ? "#e2e8f0" : orange,
                                            color: "#fff",
                                            fontSize: 16,
                                            fontWeight: 800,
                                            cursor: loading ? "not-allowed" : "pointer",
                                            boxShadow: "0 10px 25px rgba(255, 114, 22, 0.2)",
                                            transition: "all 0.3s ease",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 12
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!loading) {
                                                e.currentTarget.style.transform = "translateY(-4px)";
                                                e.currentTarget.style.boxShadow = "0 15px 35px rgba(255, 114, 22, 0.3)";
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!loading) {
                                                e.currentTarget.style.transform = "translateY(0)";
                                                e.currentTarget.style.boxShadow = "0 10px 25px rgba(255, 114, 22, 0.2)";
                                            }
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" />
                                                Loading...
                                            </>
                                        ) : (
                                            <>
                                                Show More Stories <ArrowRight size={20} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            )}

                            {/* End of list message */}
                            {!isHome && page >= totalPages && blogs.length > 0 && (
                                <div style={{ textAlign: "center", marginTop: 40, color: "#94a3b8", fontWeight: 600 }}>
                                    You've reached the end of our stories.
                                </div>
                            )}

                            {/* Social Media Section */}
                            {!isHome && (
                                <div
                                    style={{
                                        margin: "80px auto 0",
                                        padding: "40px",
                                        background: "#f8fafc",
                                        borderRadius: 32,
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                        gap: 24,
                                        border: "1px solid #f1f5f9"
                                    }}
                                >
                                    <div>
                                        <h3 style={{ fontSize: 24, fontWeight: 900, color: dark, marginBottom: 8 }}>Stay Connected</h3>
                                        <p style={{ color: "#64748b", fontSize: 16, marginBottom: 16 }}>Follow us for maintenance tips, energy saving advice, and exclusive updates.</p>
                                        <Link
                                            to="/"
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 8,
                                                background: "rgba(255, 114, 22, 0.1)",
                                                border: `1px solid ${orange}30`,
                                                color: orange,
                                                fontWeight: 700,
                                                cursor: "pointer",
                                                padding: "10px 20px",
                                                fontSize: 14,
                                                borderRadius: 12,
                                                width: "fit-content",
                                                transition: "all 0.3s ease",
                                                textDecoration: "none"
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.background = orange;
                                                e.currentTarget.style.color = "#fff";
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.background = "rgba(255, 114, 22, 0.1)";
                                                e.currentTarget.style.color = orange;
                                            }}
                                        >
                                            <ArrowLeft size={16} /> Back to Home
                                        </Link>
                                    </div>

                                    <div style={{ display: "flex", gap: 16 }}>
                                        {[
                                            { Icon: Facebook, url: "https://www.facebook.com/PatelHVAC/?ref=1" },
                                            { Icon: Instagram, url: "https://www.instagram.com/patel_heating_air_conditioning/" }
                                        ].map(({ Icon, url }, i) => (
                                            <a
                                                key={i}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    width: 56,
                                                    height: 56,
                                                    borderRadius: "50%",
                                                    background: orange,
                                                    color: "#fff",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    cursor: "pointer",
                                                    boxShadow: "0 10px 20px rgba(255, 114, 22, 0.2)",
                                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                    textDecoration: "none"
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = "scale(1.1)";
                                                    e.currentTarget.style.boxShadow = "0 15px 30px rgba(255, 114, 22, 0.3)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = "scale(1)";
                                                    e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 114, 22, 0.2)";
                                                }}
                                            >
                                                <Icon size={28} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
            {/* Floating Go Back Button */}
            {!isHome && (
                <button
                    onClick={() => navigate(-1)}
                    style={{
                        position: "fixed",
                        bottom: 40,
                        left: 40,
                        zIndex: 1000,
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        background: orange,
                        color: "#fff",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 10px 25px rgba(255, 114, 22, 0.3)",
                        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.1) rotate(-10deg)";
                        e.currentTarget.style.boxShadow = "0 15px 35px rgba(255, 114, 22, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                        e.currentTarget.style.boxShadow = "0 10px 25px rgba(255, 114, 22, 0.3)";
                    }}
                    title="Go Back"
                >
                    <ArrowLeft size={30} />
                </button>
            )}
        </>
    );
}
