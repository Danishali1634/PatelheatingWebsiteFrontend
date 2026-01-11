import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, User, ArrowLeft, Loader2, Facebook, Twitter, Link as LinkIcon } from "lucide-react";

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
                const response = await fetch(
                    `https://blog.patelheating.ca/wp-json/wp/v2/posts/${id}?_embed`
                );

                if (!response.ok) throw new Error("Failed to fetch blog");

                const data = await response.json();
                setBlog(data);

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
                    <img
                        src={
                            blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                            "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1200"
                        }
                        alt={blog.title.rendered}
                        style={{
                            width: "100%",
                            maxHeight: 500,
                            objectFit: "cover",
                            borderRadius: 24,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                        }}
                    />
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

                    {/* Share */}
                    <div
                        style={{
                            marginTop: 60,
                            padding: 30,
                            background: lightGray,
                            borderRadius: 20,
                            display: "flex",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: 20
                        }}
                    >
                        <div style={{ fontWeight: 700, fontSize: 18 }}>Share this post:</div>

                        <div style={{ display: "flex", gap: 12 }}>
                            {[Facebook, Twitter, LinkIcon].map((Icon, i) => (
                                <button
                                    key={i}
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: "50%",
                                        background: "#fff",
                                        border: "1px solid #e5e7eb",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        cursor: "pointer"
                                    }}
                                >
                                    <Icon size={20} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
