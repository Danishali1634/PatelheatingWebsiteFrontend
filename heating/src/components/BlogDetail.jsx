import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, User, ArrowLeft, Loader2, Facebook, Instagram } from "lucide-react";

export default function BlogDetail() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    const orange = "#ff7216";
    const dark = "#0d0d0d";
    const lightGray = "#f9fafb";

    useEffect(() => {
        const fetchBlogDetail = async () => {
            setLoading(true);
            try {
                // Fetching by slug instead of ID for cleaner links and compatibility with the Blogs component
                const response = await fetch(
                    `https://blog.patelheating.ca/wp-json/wp/v2/posts?slug=${id}&_embed`
                );

                if (!response.ok) throw new Error("Failed to fetch blog");

                const data = await response.json();

                // WP API returns an array when filtering by slug
                if (data && data.length > 0) {
                    setBlog(data[0]);
                } else {
                    setBlog(null);
                }

                window.scrollTo(0, 0);
            } catch (err) {
                console.error("Error fetching blog:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogDetail();
    }, [id]);

    if (loading) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "80vh", flexDirection: "column", gap: 20 }}>
                <Loader2 size={48} color={orange} className="animate-spin" />
                <p style={{ color: "#6b7280", fontWeight: 500 }}>Loading post...</p>
            </div>
        );
    }

    if (!blog) {
        return <p style={{ textAlign: "center", marginTop: 100 }}>Blog post not found.</p>;
    }

    return (
        <>
            <title>{blog.title.rendered} - Patel Heating & Air Conditioning</title>

            <div
                style={{
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                    backgroundColor: "#fff",
                    color: dark,
                    paddingTop: "60px"
                }}
            >
                {/* Header */}
                <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
                    <button
                        onClick={() => navigate("/blog")}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            background: "none",
                            border: "none",
                            color: orange,
                            fontWeight: 700,
                            cursor: "pointer",
                            padding: "20px 0",
                            fontSize: 16
                        }}
                    >
                        <ArrowLeft size={20} /> Back to Blog
                    </button>

                    <h1
                        style={{
                            fontSize: "clamp(32px, 5vw, 48px)",
                            fontWeight: 900,
                            lineHeight: 1.2,
                            marginBottom: 24
                        }}
                        dangerouslySetInnerHTML={{ __html: blog.title.rendered }}
                    />

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 24,
                            marginBottom: 40,
                            paddingBottom: 24,
                            borderBottom: "1px solid #f0f0f0",
                            fontSize: 15,
                            color: "#6b7280"
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <Calendar size={18} color={orange} />
                            {new Date(blog.date).toLocaleDateString(undefined, {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <User size={18} color={orange} />
                            By {blog._embedded?.author?.[0]?.name || "Patel Heating"}
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", marginBottom: 60 }}>
                    <div style={{
                        borderRadius: 24,
                        overflow: "hidden",
                        background: "#f1f5f9",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                        maxHeight: 600,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img
                            src={
                                blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                                "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1200"
                            }
                            alt={blog.title.rendered}
                            style={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "100%",
                                objectFit: "cover",
                                display: "block",
                                padding: "20px"
                            }}
                        />
                    </div>
                </div>

                {/* Content */}
                <div style={{ maxWidth: 840, margin: "0 auto", padding: "0 20px 100px" }}>
                    <div
                        className="blog-content"
                        style={{
                            fontSize: 18,
                            lineHeight: 1.8,
                            color: "#374151"
                        }}
                        dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
                    />

                    <style>{`
                        .blog-content h2,
                        .blog-content h3 {
                            font-size: 24px;
                            font-weight: 800;
                            margin: 40px 0 20px;
                            color: #0d0d0d;
                        }
                        .blog-content p {
                            margin-bottom: 24px;
                        }
                    `}</style>

                    {/* Social Media */}
                    <div
                        style={{
                            marginTop: 60,
                            padding: 30,
                            background: lightGray,
                            borderRadius: 20,
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: 20,
                            alignItems: "center"
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <div style={{ fontWeight: 700, fontSize: 18 }}>Follow our latest updates:</div>
                            <button
                                onClick={() => navigate("/blog")}
                                style={{
                                    display: "flex",
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
                                    transition: "all 0.3s ease"
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
                                <ArrowLeft size={16} /> Back to Blog
                            </button>
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
                                        width: 48,
                                        height: 48,
                                        borderRadius: "50%",
                                        background: orange,
                                        color: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer",
                                        boxShadow: "0 4px 12px rgba(255, 114, 22, 0.2)",
                                        textDecoration: "none"
                                    }}
                                >
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Floating Go Back Button */}
            <button
                onClick={() => navigate("/blog")}
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
                title="Go Back to Blog"
            >
                <ArrowLeft size={30} />
            </button>
        </>
    );
}
