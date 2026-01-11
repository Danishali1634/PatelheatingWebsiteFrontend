import React, { useState, useEffect } from "react";
import {
    Calendar,
    User,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Loader2,
    Clock
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Blogs({ limit = 6, isHome }) {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const orange = "#ff7216";
    const dark = "#0d0d0d";

    const fetchBlogs = async (pageNum) => {
        setLoading(true);
        try {
            const perPage = limit || 6;

            const response = await fetch(
                `https://blog.patelheating.ca/wp-json/wp/v2/posts?_embed&page=${pageNum}&per_page=${perPage}`
            );

            if (!response.ok) throw new Error("Failed to fetch blogs");

            const data = await response.json();

            const total = response.headers.get("X-WP-TotalPages");

            setBlogs(data);
            setTotalPages(Number(total) || 1);

            if (!isHome) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        } catch (error) {
            console.error("Error fetching blogs:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs(page);
    }, [page, limit]);

    const handleNext = () => {
        if (page < totalPages) setPage((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    return (
        <>
            {!isHome && <title>Blog - Patel Heating & Air Conditioning</title>}

            <div
                style={{
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    backgroundColor: isHome ? "transparent" : "#fff",
                    color: dark
                }}
            >
                {/* Loader */}
                {loading ? (
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
                        {/* Blog Grid */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
                                gap: 32
                            }}
                        >
                            {blogs.map((blog) => (
                                <article
                                    key={blog.id}
                                    style={{
                                        background: "#fff",
                                        borderRadius: 20,
                                        overflow: "hidden",
                                        border: "1px solid #f5f5f5",
                                        boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    {/* Image */}
                                    <div style={{ height: 240, overflow: "hidden" }}>
                                        <img
                                            src={
                                                blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                                                "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=800"
                                            }
                                            alt={blog.title.rendered}
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                objectFit: "cover"
                                            }}
                                        />
                                    </div>

                                    {/* Content */}
                                    <div style={{ padding: 28 }}>
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: 16,
                                                fontSize: 13,
                                                color: "#9ca3af",
                                                marginBottom: 10
                                            }}
                                        >
                                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                                <Clock size={14} />
                                                {new Date(blog.date).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric"
                                                })}
                                            </div>

                                            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                                <User size={14} />
                                                {blog._embedded?.author?.[0]?.name || "Patel Heating"}
                                            </div>
                                        </div>

                                        <h2
                                            style={{
                                                fontSize: 22,
                                                fontWeight: 800,
                                                marginBottom: 14
                                            }}
                                            dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                                        />

                                        <p style={{ color: "#6b7280", lineHeight: 1.6, marginBottom: 20 }}>
                                            {blog.excerpt.rendered
                                                .replace(/<[^>]*>?/gm, "")
                                                .substring(0, 130)}
                                            ...
                                        </p>

                                        <Link
                                            to={`/blog/${blog.slug}`}
                                            style={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                gap: 10,
                                                color: orange,
                                                fontWeight: 800,
                                                textDecoration: "none"
                                            }}
                                        >
                                            Read More <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Pagination */}
                        {!isHome && (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: 14,
                                    marginTop: 50
                                }}
                            >
                                <button
                                    onClick={handlePrev}
                                    disabled={page === 1}
                                    style={{
                                        padding: "12px 22px",
                                        borderRadius: 10,
                                        border: `2px solid ${orange}`,
                                        background: page === 1 ? "#f3f4f6" : orange,
                                        color: page === 1 ? "#9ca3af" : "#fff",
                                        cursor: page === 1 ? "not-allowed" : "pointer"
                                    }}
                                >
                                    <ChevronLeft size={18} /> Prev
                                </button>

                                <div
                                    style={{
                                        padding: "12px 20px",
                                        fontWeight: 700
                                    }}
                                >
                                    Page <span style={{ color: orange }}>{page}</span> of {totalPages}
                                </div>

                                <button
                                    onClick={handleNext}
                                    disabled={page === totalPages}
                                    style={{
                                        padding: "12px 22px",
                                        borderRadius: 10,
                                        border: `2px solid ${orange}`,
                                        background: page === totalPages ? "#f3f4f6" : orange,
                                        color: page === totalPages ? "#9ca3af" : "#fff",
                                        cursor:
                                            page === totalPages ? "not-allowed" : "pointer"
                                    }}
                                >
                                    Next <ChevronRight size={18} />
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    );
}
