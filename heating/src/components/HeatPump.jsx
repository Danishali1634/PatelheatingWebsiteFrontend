import React from "react";
import { Zap, Sun, Snowflake, CheckCircle, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import heatpump from '../assets/heatpump.png'


export default function HeatPump() {
    return (
        <>
            <title>Heat Pump Services - Patel Heating & Air Conditioning</title>
            <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

                {/* Custom Hero: Split/Gradient */}
                <div style={{
                    position: "relative", paddingTop: 40, paddingBottom: 60, overflow: "hidden",
                    background: "linear-gradient(to bottom, #fff7ed, #fff)"
                }}>
                    <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #fed7aa 0%, transparent 70%)", opacity: 0.5, pointerEvents: "none" }}></div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 100, background: "linear-gradient(to top, #fff, transparent)", zIndex: 2, pointerEvents: "none" }}></div>

                    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 5 }} className="heatpump-hero-grid">
                        <style>{`
                            @media (max-width: 968px) {
                                .heatpump-hero-grid { grid-template-columns: 1fr !important; text-align: center; }
                                .heatpump-hero-img { order: -1; margin-bottom: 20px; }
                                .floating-card { display: none !important; }
                            }
                        `}</style>
                        <div>
                            <div style={{
                                display: "inline-flex", alignItems: "center", gap: 8,
                                color: "black",
                                border: '1px solid #ff7216',
                                padding: "8px 20px", borderRadius: 50, fontSize: 13, fontWeight: 700,
                                marginBottom: 24,
                            }}>
                                <Zap size={16} fill="#ff7216" color="#ff7216" /> ALL-SEASON COMFORT
                            </div>
                            <h1 style={{
                                fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24,
                                letterSpacing: "-0.03em", color: "#451a03"
                            }}>
                                One <span style={{ color: "#ff7216" }}> System </span> For<br />
                                <span style={{ color: "#ff7216" }}>Every Season.</span>
                            </h1>
                            <p style={{ fontSize: 20, color: "#78716c", marginBottom: 40, lineHeight: 1.6, maxWidth: 550 }}>
                                Heating in winter, cooling in summer. Heat pumps are the most efficient way to control your home's climate year-round.
                            </p>
                            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                                <Link
                                    to="/contact"
                                    className="rebate-btn"
                                    style={{
                                        textDecoration: "none",
                                        background: "#ff7216",
                                        color: "#fff",
                                        padding: "18px 40px",
                                        borderRadius: 50,
                                        fontWeight: 700,
                                        boxShadow: "0 10px 25px rgba(251, 146, 60, 0.3)",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 10,
                                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                        position: "relative",
                                        zIndex: 10
                                    }}
                                >
                                    <span style={{ pointerEvents: "none" }}>Learn About Rebates</span>
                                    <ArrowRight size={20} style={{ pointerEvents: "none" }} />
                                </Link>
                                <style>{`
                                    .rebate-btn:hover {
                                        transform: translateY(-3px);
                                        box-shadow: 0 15px 30px rgba(251, 146, 60, 0.4);
                                        background: #ff8c42 !important;
                                    }
                                    .rebate-btn:active {
                                        transform: translateY(-1px);
                                    }
                                `}</style>
                            </div>
                        </div>

                        <div className="heatpump-hero-img" style={{ position: "relative" }}>
                            <img
                                src={heatpump}
                                alt="Modern Heat Pump System"
                                style={{
                                    width: "100%", maxHeight: "400px", objectFit: "contain", borderRadius: "30px 30px 0 30px",
                                    boxShadow: "0 30px 60px -20px rgba(251, 146, 60, 0.25)",
                                    zIndex: 1, position: "relative"
                                }}
                            />
                            {/* Floating Glass Card */}
                            <div className="floating-card" style={{
                                position: "absolute", bottom: -30, right: -20,
                                background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(20px)",
                                padding: 24, borderRadius: 24,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                                zIndex: 2, maxWidth: 220
                            }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                                    <div style={{ color: "#ff7216" }}><Snowflake size={20} /></div>
                                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>Dual Purpose</div>
                                </div>
                                <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.4 }}>
                                    Efficient heating & cooling in a single outdoor unit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Section */}
                <div style={{ padding: "100px 20px", background: "#f8fafc" }}>
                    <div style={{
                        maxWidth: 1200, margin: "0 auto",
                        background: "#fff",
                        borderRadius: 32, overflow: "hidden",
                        boxShadow: "0 30px 70px rgba(69, 26, 3, 0.08)",
                        border: '1px solid #ff7216',
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                        minHeight: "70vh"
                    }}>
                        {/* Content Side */}
                        <div style={{ padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div style={{ color: "#ff7216", fontWeight: 700, letterSpacing: 2, marginBottom: 16, fontSize: 14, textTransform: "uppercase" }}>
                                All-Season Efficiency
                            </div>
                            <h2 style={{ fontSize: "clamp(32px, 5vw, 42px)", fontWeight: 900, marginBottom: 32, lineHeight: 1.1, color: "#451a03" }}>
                                Hybrid Heating & <br /> Smart Cooling
                            </h2>
                            <p style={{ fontSize: 18, color: "#44403c", lineHeight: 1.7, marginBottom: 40, maxWidth: 500 }}>
                                Heat pumps provide an all-in-one solution for year-round comfort. They are the most eco-friendly way to heat and cool your home.
                            </p>

                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 24 }}>
                                {[
                                    { title: "Dual Purpose", desc: "Efficient heating in winter and cooling in summer." },
                                    { title: "Eco-Friendly", desc: "Significantly lower carbon footprint than gas furnaces." },
                                    { title: "Whisper Quiet", desc: "Extremely low noise levels for peaceful indoor living." }
                                ].map((item, i) => (
                                    <li key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                                        <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255, 114, 22, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                            <Zap size={22} color="#ff7216" />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: 18, fontWeight: 700, color: "#451a03", marginBottom: 6 }}>{item.title}</h4>
                                            <p style={{ color: "#64748b", margin: 0, fontSize: 15 }}>{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Side */}
                        <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #f1f5f9" }}>
                            <div style={{ flex: 1, position: "relative", minHeight: "50vh", maxHeight: "50vh", overflow: "hidden", background: "#f8fafc" }}>
                                <img
                                    src={heatpump}
                                    alt="Modern Heat Pump"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                        display: "block"
                                    }}
                                />
                                <div style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: "40px",
                                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                                    color: "#ff7216"
                                }}>
                                    <h4 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12, color: "#ff7216" }}>Ultimate Control</h4>
                                    <p style={{ opacity: 0.9, color: "#ff7216", fontWeight: 600, fontSize: 16 }}>Transforming energy into year-round comfort.</p>
                                </div>
                            </div>

                            {/* Info Footer */}
                            <div style={{ padding: "40px 60px", background: "#fff", borderTop: "1px solid #f1f5f9", display: "flex", flexDirection: "column", gap: 20 }}>
                                <div>
                                    <span style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700, color: "#94a3b8" }}>Featured Model</span>
                                    <h3 style={{ fontSize: 24, fontWeight: 800, color: "#ff7216", margin: "8px 0 0" }}>Mitsubishi Zuba</h3>
                                </div>
                                <div style={{
                                    display: "inline-flex", alignItems: "center", gap: 12, padding: "12px 24px",
                                    background: "#f8fafc", borderRadius: 100, border: "1px solid #e2e8f0"
                                }}>
                                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }}></div>
                                    <span style={{ fontSize: 15, fontWeight: 700, color: "#475569" }}>Efficient down to -30°C</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div style={{ padding: "60px 20px", background: "#fff", textAlign: "center" }}>
                    <div style={{ maxWidth: 800, margin: "0 auto" }}>
                        <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: 24, color: '#ff7216' }}>Eco-friendly heating starts here.</h2>
                        <p style={{ fontSize: 18, color: "#64748b", marginBottom: 40 }}>Upgrade your home with a modern heat pump and enjoy year-round comfort.</p>
                        <Link to="/contact" style={{
                            display: "inline-flex", alignItems: "center", gap: 12,
                            textDecoration: "none", background: "#ff7216", color: "#fff",
                            padding: "18px 40px", borderRadius: 100, fontWeight: 700, fontSize: 18,
                            boxShadow: "0 10px 30px rgba(251, 146, 60, 0.4)"
                        }}>
                            <Calendar size={20} /> Request Free Quote
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
