import React from "react";
import { Droplets, Sun, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import ervimage from "../assets/ervimage.jpg";

export default function Erv() {
    return (
        <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

            {/* Custom Hero: Split Tone */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    minHeight: "350px",
                    position: "relative"
                }}
                className="split-hero"
            >
                <style>{`
                    @media (max-width: 768px) {
                        .split-hero {
                            grid-template-columns: 1fr !important;
                            min-height: auto !important;
                        }
                    }
                `}</style>

                <div style={{
                    background: "#fef3c7",
                    padding: "40px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <h1 style={{
                        fontSize: "clamp(48px, 5vw, 60px)",
                        fontWeight: 900,
                        color: "#d97706",
                        lineHeight: 1
                    }}>
                        ENERGY.
                    </h1>
                </div>

                <div style={{
                    background: "#bae6fd",
                    padding: "40px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <h1 style={{
                        fontSize: "clamp(48px, 5vw, 60px)",
                        fontWeight: 900,
                        color: "#0284c7",
                        lineHeight: 1
                    }}>
                        RECOVERY.
                    </h1>
                </div>

                {/* Floating Card */}
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 130,
                        display: "flex",
                        justifyContent: "center",
                        pointerEvents: "none"
                    }}
                    className="hero-floater"
                >
                    <style>{`
                        @media (max-width: 768px) {
                            .hero-floater {
                                position: static !important;
                                padding: 40px 20px;
                                background: #fff;
                            }
                        }
                    `}</style>

                    <div style={{
                        background: "#fff",
                        padding: "32px 40px",
                        borderRadius: 32,
                        boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                        textAlign: "center",
                        pointerEvents: "auto",
                        maxWidth: 420
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 20
                        }}>
                            <Scale size={48} color="#ff7216" />
                        </div>

                        <h2 style={{
                            fontSize: 24,
                            fontWeight: 800,
                            marginBottom: 14,
                            color: "#ff7216"
                        }}>
                            The ERV Advantage
                        </h2>

                        <p style={{
                            color: "#64748b",
                            marginBottom: 28,
                            lineHeight: 1.6
                        }}>
                            Total comfort control. Balances both heat and humidity for the perfect indoor climate.
                        </p>

                        <Link
                            to="/contact"
                            style={{
                                textDecoration: "none",
                                color: "#ff7216",
                                padding: "12px 30px",
                                borderRadius: 8,
                                fontWeight: 700,
                                border: "2px solid #ff7216",
                                display: "inline-block"
                            }}
                        >
                            Get a Quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div style={{ padding: "40px 20px 20px", background: "#fff" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                    <div
                        style={{
                            textAlign: "center",
                            marginBottom: 60,
                            marginTop: 100
                        }}
                        className="desktop-margin"
                    >
                        <style>{`
                            @media (max-width: 768px) {
                                .desktop-margin {
                                    margin-top: 20px !important;
                                }
                            }
                        `}</style>

                        <h2 style={{
                            fontSize: 36,
                            fontWeight: 800,
                            marginBottom: 20,
                            color: "#ff7216"
                        }}>
                            The All-Season Solution
                        </h2>

                        <p style={{
                            fontSize: 18,
                            color: "#4b5563",
                            maxWidth: 700,
                            margin: "0 auto",
                            lineHeight: 1.6
                        }}>
                            Unlike an HRV which only transfers heat, an ERV also transfers moisture. This keeps your home from getting too dry in winter and helps block humid air in summer.
                        </p>
                    </div>

                    {/* Image Section (FIXED) */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            borderRadius: 32,
                            overflow: "hidden"
                        }}
                    >
                        <div style={{
                            position: "relative",
                            height: 520
                        }}>
                            <img
                                src={ervimage}
                                alt="Summer Comfort"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contains",
                                    position: "absolute",
                                    inset: 0
                                }}
                            />

                            {/* Overlay */}
                            <div style={{
                                position: "absolute",
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.15))',
                                display: "flex",
                                alignItems: "flex-end"
                            }}>
                                <div style={{
                                    padding: "40px",
                                    maxWidth: 520
                                }}>
                                    <div style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 12,
                                        marginBottom: 12
                                    }}>
                                        <Sun size={32} color="#ff7216" />
                                        <h3 style={{
                                            fontSize: 26,
                                            fontWeight: 800,
                                            color: "#fff"
                                        }}>
                                            Summer
                                        </h3>
                                    </div>

                                    <p style={{
                                        fontSize: 16,
                                        color: "rgba(255,255,255,0.9)",
                                        lineHeight: 1.6
                                    }}>
                                        Rejects heat and humidity from entering your home, keeping your AC load low.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* CTA */}
            <div style={{
                padding: "60px 20px",
                background: "#fff",
                textAlign: "center"
            }}>
                <Link
                    to="/contact"
                    style={{
                        textDecoration: "none",
                        color: "#000",
                        fontSize: 17,
                        fontWeight: 900,
                        letterSpacing: -0.5,
                        border: "2px solid #ff7216",
                        padding: "12px 30px",
                        borderRadius: 8
                    }}
                >
                    FIND YOUR BALANCE_
                </Link>
            </div>
        </div >
    );
}
