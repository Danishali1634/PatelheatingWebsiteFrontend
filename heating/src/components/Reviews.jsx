import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import review images
import rone from '../assets/reviews/rone.png';
import rtwo from '../assets/reviews/rtwo.png';
import rthree from '../assets/reviews/rthree.png';
import rfour from '../assets/reviews/rfour.png';
import rfive from '../assets/reviews/rfive.png';
import rseven from '../assets/reviews/rseven.png';
import reight from '../assets/reviews/reight.png';
import rnine from '../assets/reviews/rnine.png';
import rten from '../assets/reviews/rten.png';
import releven from '../assets/reviews/releven.png';

const reviewImages = [
    rone, rtwo, rthree, rfour, rfive, rseven, reight, rnine, rten, releven
];

export default function Reviews() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <style>{`
                @media (max-width: 768px) {
                    .review-grid {
                        grid-template-columns: 1fr !important;
                        gap: 24px !important;
                    }
                    .review-section {
                        padding: 40px 16px !important;
                    }
                    .review-header {
                        margin-bottom: 40px !important;
                    }
                    .cta-footer {
                        margin-top: 50px !important;
                        padding: 30px 20px !important;
                    }
                    .review-card {
                        border-radius: 16px !important;
                    }
                    .review-badge {
                        top: 12px !important;
                        left: 12px !important;
                        padding: 8px 14px !important;
                        font-size: 13px !important;
                    }
                    .enlarge-hint {
                        bottom: 12px !important;
                        right: 12px !important;
                        padding: 6px 12px !important;
                        font-size: 11px !important;
                    }
                    .background-decoration {
                        display: none !important;
                    }
                }
                
                @media (min-width: 769px) and (max-width: 1024px) {
                    .review-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 24px !important;
                    }
                }

                .review-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .review-card:hover {
                    transform: translateY(-12px);
                    box-shadow: 0 25px 50px rgba(255, 114, 22, 0.15) !important;
                }

                .review-card img {
                    transition: transform 0.5s ease;
                }

                .review-card:hover img {
                    transform: scale(1.05);
                }

                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    padding: 20px;
                    animation: fadeIn 0.3s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .modal-content {
                    max-width: 95%;
                    max-height: 95vh;
                    animation: zoomIn 0.3s ease;
                }

                @keyframes zoomIn {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }

                .close-modal {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: rgba(255, 255, 255, 0.9);
                    border: none;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    font-size: 24px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    z-index: 10000;
                }

                .close-modal:hover {
                    background: #fff;
                    transform: rotate(90deg);
                }

                .gradient-bg {
                    background: linear-gradient(135deg, #fff7ed 0%, #ffffff 50%, #fef3f2 100%);
                }

                .shimmer {
                    position: relative;
                    overflow: hidden;
                }

                .shimmer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    animation: shimmer 3s infinite;
                }

                @keyframes shimmer {
                    0% { left: -100%; }
                    100% { left: 100%; }
                }
            `}</style>

            <section className="review-section gradient-bg" style={{
                padding: "100px 24px",
                position: "relative",
                overflow: "hidden",
                minHeight: "100vh"
            }}>
                <title>Customer Reviews - Patel Heating & Air Conditioning</title>

                {/* Enhanced background decoration */}
                <div className="background-decoration" style={{
                    position: "absolute",
                    top: "-150px",
                    right: "-150px",
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,114,22,0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                    filter: "blur(60px)"
                }}></div>

                <div className="background-decoration" style={{
                    position: "absolute",
                    bottom: "-100px",
                    left: "-100px",
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(255,154,86,0.06) 0%, transparent 70%)",
                    pointerEvents: "none",
                    filter: "blur(50px)"
                }}></div>

                <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>
                    {/* Header Section */}
                    <div className="review-header" style={{ textAlign: "center", marginBottom: "80px" }}>
                        <div style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "10px 24px",
                            background: "linear-gradient(135deg, rgba(255,114,22,0.1) 0%, rgba(255,154,86,0.1) 100%)",
                            borderRadius: "40px",
                            marginBottom: "24px",
                            border: "1px solid rgba(255,114,22,0.2)"
                        }}>
                            <span style={{ fontSize: "20px" }}>⭐</span>
                            <span style={{
                                fontSize: "14px",
                                fontWeight: "700",
                                color: "#ff7216",
                                letterSpacing: "1px",
                                textTransform: "uppercase"
                            }}>
                                Customer Testimonials
                            </span>
                        </div>

                        <h1 style={{
                            fontSize: "clamp(40px, 6vw, 68px)",
                            fontWeight: "900",
                            color: "#1a1a1a",
                            marginBottom: "24px",
                            lineHeight: "1.1",
                            letterSpacing: "-0.03em"
                        }}>
                            What Our <span style={{
                                background: "linear-gradient(135deg, #ff7216 0%, #ff9a56 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text"
                            }}>Customers</span> Say
                        </h1>

                        <p style={{
                            fontSize: "clamp(17px, 2.5vw, 21px)",
                            color: '#666',
                            maxWidth: "700px",
                            margin: '0 auto',
                            lineHeight: "1.8",
                            fontWeight: "400"
                        }}>
                            Real feedback from our satisfied clients in Brampton and the GTA. Your comfort is our commitment.
                        </p>

                        <div style={{
                            width: "80px",
                            height: "6px",
                            background: "linear-gradient(90deg, #ff7216 0%, #ff9a56 100%)",
                            margin: "40px auto 0",
                            borderRadius: "4px",
                            boxShadow: "0 2px 10px rgba(255,114,22,0.3)"
                        }}></div>
                    </div>

                    {/* Enhanced Image Gallery - Larger Images */}
                    <div className="review-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                        gap: "40px",
                        paddingBottom: "40px"
                    }}>
                        {reviewImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="review-card shimmer"
                                onClick={() => setSelectedImage(img)}
                                style={{
                                    borderRadius: "24px",
                                    overflow: "hidden",
                                    boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
                                    border: "2px solid rgba(255,114,22,0.1)",
                                    backgroundColor: "#ffffff",
                                    cursor: "zoom-in",
                                    position: "relative"
                                }}
                            >
                                {/* Premium gradient overlay on top */}
                                <div style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    right: "0",
                                    height: "100px",
                                    background: "linear-gradient(180deg, rgba(255,114,22,0.08) 0%, transparent 100%)",
                                    pointerEvents: "none",
                                    zIndex: 1
                                }}></div>

                                <div style={{
                                    padding: "0",
                                    position: "relative",
                                    backgroundColor: "#fafafa",
                                    minHeight: "400px"
                                }}>
                                    <img
                                        src={img}
                                        alt={`Customer Review ${idx + 1} - Patel Heating & Air Conditioning`}
                                        loading="lazy"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            minHeight: "400px",
                                            maxHeight: "800px",
                                            display: "block",
                                            objectFit: "contain",
                                            objectPosition: "center"
                                        }}
                                    />
                                </div>

                                {/* Enhanced badge with star */}
                                <div style={{
                                    position: "absolute",
                                    top: "20px",
                                    left: "20px",
                                    background: "linear-gradient(135deg, #ff7216 0%, #ff9a56 100%)",
                                    color: "#ffffff",
                                    padding: "10px 18px",
                                    borderRadius: "30px",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    fontWeight: "700",
                                    fontSize: "15px",
                                    boxShadow: "0 4px 20px rgba(255,114,22,0.4)",
                                    zIndex: 2,
                                    border: "2px solid rgba(255,255,255,0.3)"
                                }}>
                                    <span>⭐</span>
                                    <span>Review {idx + 1}</span>
                                </div>

                                {/* Click to enlarge hint */}
                                <div style={{
                                    position: "absolute",
                                    bottom: "20px",
                                    right: "20px",
                                    backgroundColor: "rgba(0,0,0,0.7)",
                                    color: "#ffffff",
                                    padding: "8px 16px",
                                    borderRadius: "20px",
                                    fontSize: "13px",
                                    fontWeight: "600",
                                    zIndex: 2,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px"
                                }}>
                                    <span>🔍</span>
                                    <span>Click to enlarge</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Enhanced Call to Action Footer */}
                    <div className="cta-footer" style={{
                        marginTop: "100px",
                        padding: "60px 40px",
                        background: "linear-gradient(135deg, rgba(255,114,22,0.08) 0%, rgba(255,154,86,0.08) 100%)",
                        borderRadius: "32px",
                        textAlign: "center",
                        border: "2px solid rgba(255,114,22,0.15)",
                        boxShadow: "0 10px 40px rgba(255,114,22,0.1)",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <div style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "200px",
                            height: "200px",
                            background: "radial-gradient(circle, rgba(255,114,22,0.1) 0%, transparent 70%)",
                            pointerEvents: "none",
                            filter: "blur(40px)"
                        }}></div>

                        <div style={{ position: "relative", zIndex: 1 }}>
                            <h3 style={{
                                fontSize: "clamp(28px, 4vw, 40px)",
                                fontWeight: "800",
                                color: "#1a1a1a",
                                marginBottom: "20px",
                                letterSpacing: "-0.02em"
                            }}>
                                Ready to Experience Premium Service?
                            </h3>
                            <p style={{
                                fontSize: "18px",
                                color: "#666",
                                marginBottom: "35px",
                                maxWidth: "650px",
                                margin: "0 auto 35px",
                                lineHeight: "1.7"
                            }}>
                                Join hundreds of satisfied customers in Brampton and the GTA who trust us with their HVAC needs
                            </p>
                            <Link to="/contact">
                                <button style={{
                                    padding: "18px 48px",
                                    background: "linear-gradient(135deg, #ff7216 0%, #ff9a56 100%)",
                                    color: "#ffffff",
                                    border: "none",
                                    borderRadius: "50px",
                                    fontSize: "17px",
                                    fontWeight: "700",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    boxShadow: "0 6px 25px rgba(255,114,22,0.4)",
                                    letterSpacing: "0.3px",
                                    width: '100%'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                                        e.currentTarget.style.boxShadow = "0 10px 35px rgba(255,114,22,0.5)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                                        e.currentTarget.style.boxShadow = "0 6px 25px rgba(255,114,22,0.4)";
                                    }}>

                                    📞 Get Your Free Quote Today
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Screen Image Modal */}
            {selectedImage && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="close-modal"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close"
                    >
                        ✕
                    </button>
                    <img
                        src={selectedImage}
                        alt="Enlarged review"
                        className="modal-content"
                        style={{
                            maxWidth: "95%",
                            maxHeight: "95vh",
                            objectFit: "contain",
                            borderRadius: "12px",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.5)"
                        }}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
}