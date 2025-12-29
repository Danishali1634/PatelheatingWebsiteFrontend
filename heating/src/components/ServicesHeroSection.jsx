import React from "react";
import { Sparkles, ArrowRight, Phone } from "lucide-react";

export const ServicesHeroSection = ({
    title,
    heading,
    description,
    backgroundColor = "#0d0d0d"
}) => {
    const orange = "#ff7216";

    return (
        <div
            style={{
                position: "relative",
                background: `linear-gradient(135deg, ${backgroundColor} 0%, ${adjustColor(backgroundColor, -20)} 100%)`,
                padding: "120px 20px 140px",
                overflow: "hidden"
            }}
        >
            {/* Animated background elements */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(255,255,255,0.12), transparent 35%),
            radial-gradient(circle at 85% 75%, rgba(255,255,255,0.1), transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 50%)
          `,
                    pointerEvents: "none",
                    animation: "pulse 8s ease-in-out infinite"
                }}
            />

            {/* Floating shapes */}
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    right: "5%",
                    width: 400,
                    height: 400,
                    background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(60px)",
                    animation: "float 20s ease-in-out infinite"
                }}
            />
            <div
                style={{
                    position: "absolute",
                    bottom: "5%",
                    left: "8%",
                    width: 300,
                    height: 300,
                    background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(50px)",
                    animation: "float 15s ease-in-out infinite reverse"
                }}
            />

            <div
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    textAlign: "center",
                    position: "relative",
                    zIndex: 1
                }}
            >
                {/* Badge with icon */}
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "10px 24px",
                        borderRadius: 50,
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "#fff",
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: 1.2,
                        marginBottom: 28,
                        boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                        animation: "fadeInDown 0.8s ease-out"
                    }}
                >
                    <Sparkles size={16} />
                    {title}
                </div>

                {/* Heading with gradient text */}
                <h1
                    style={{
                        fontSize: "clamp(36px, 6vw, 72px)",
                        fontWeight: 900,
                        background: "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.85) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        lineHeight: 1.1,
                        marginBottom: 24,
                        textShadow: "0 4px 20px rgba(0,0,0,0.2)",
                        animation: "fadeInUp 1s ease-out",
                        letterSpacing: "-0.02em"
                    }}
                >
                    {heading}
                </h1>

                {/* Description */}
                <p
                    style={{
                        fontSize: "clamp(16px, 2vw, 22px)",
                        color: "rgba(255,255,255,0.9)",
                        maxWidth: 750,
                        margin: "0 auto 40px",
                        lineHeight: 1.7,
                        animation: "fadeInUp 1.2s ease-out",
                        fontWeight: 400
                    }}
                >
                    {description}
                </p>

                {/* Action buttons */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 16,
                        flexWrap: "wrap",
                        animation: "fadeInUp 1.4s ease-out"
                    }}
                >
                    <button
                        style={{
                            background: "#fff",
                            color: backgroundColor,
                            border: "none",
                            padding: "16px 36px",
                            borderRadius: 12,
                            fontSize: 16,
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                            e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.4)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0) scale(1)";
                            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
                        }}
                    >
                        Get a Free Quote
                        <ArrowRight size={18} />
                    </button>

                    <button
                        style={{
                            background: "rgba(255,255,255,0.1)",
                            color: "#fff",
                            border: "2px solid rgba(255,255,255,0.3)",
                            padding: "14px 34px",
                            borderRadius: 12,
                            fontSize: 16,
                            fontWeight: 700,
                            cursor: "pointer",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            backdropFilter: "blur(10px)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                            e.currentTarget.style.transform = "translateY(-3px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        <Phone size={18} />
                        Call Now
                    </button>
                </div>

                {/* Trust indicator */}
                <div
                    style={{
                        marginTop: 50,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 30,
                        flexWrap: "wrap",
                        animation: "fadeIn 1.6s ease-out"
                    }}
                >
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "rgba(255,255,255,0.8)",
                        fontSize: 14,
                        fontWeight: 600
                    }}>
                        <div style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: "#4ade80"
                        }} />
                        24/7 Available
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "rgba(255,255,255,0.8)",
                        fontSize: 14,
                        fontWeight: 600
                    }}>
                        <div style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: "#4ade80"
                        }} />
                        Licensed & Insured
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        color: "rgba(255,255,255,0.8)",
                        fontSize: 14,
                        fontWeight: 600
                    }}>
                        <div style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: "#4ade80"
                        }} />
                        5000+ Happy Customers
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
        </div>
    );
};

// Helper function to darken color
function adjustColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255))
        .toString(16).slice(1);
}