import React from "react";
import { Droplets, Sun, Scale, ShieldCheck, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import ervimage from "../assets/ervimage.jpg";
import OptimizedImage from "./OptimizedImage";


export default function Erv() {
    return (
        <>
            <Helmet>
                <title>ERV System Installation Brampton | Balanced Moisture Control</title>
                <meta name="description" content="Discover the benefits of Energy Recovery Ventilation (ERV). Balance indoor humidity and fresh air for ultimate comfort. Professional ERV installation in Brampton." />
                <meta name="keywords" content="ERV system Brampton, energy recovery ventilation, humidity control HVAC, fresh air ventilation, Patel Heating ERV" />
            </Helmet>
            <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

                {/* Custom Hero: Split Tone */}
                <div style={{
                    position: "relative", paddingTop: 40, paddingBottom: 60, overflow: "hidden",
                    background: "linear-gradient(to bottom, #f0f9ff, #fff)"
                }}>
                    <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #bae6fd 0%, transparent 70%)", opacity: 0.5 }}></div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 100, background: "linear-gradient(to top, #fff, transparent)", zIndex: 2 }}></div>

                    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 1 }} className="erv-hero-grid">
                        <style>{`
                            @media (max-width: 968px) {
                                .erv-hero-grid { grid-template-columns: 1fr !important; text-align: center; }
                                .erv-hero-img { order: -1; margin-bottom: 20px; }
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
                                <Droplets size={16} fill="#ff7216" color="#ff7216" /> ENERGY RECOVERY
                            </div>
                            <h1 style={{
                                fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24,
                                letterSpacing: "-0.03em", color: "#0c4a6e"
                            }}>
                                Breathe. <span style={{ color: "#ff7216" }}> Recover. </span><br />
                                <span style={{ color: "#ff7216" }}>Optimized Air.</span>
                            </h1>
                            <p style={{ fontSize: 20, color: "#64748b", marginBottom: 40, lineHeight: 1.6, maxWidth: 550 }}>
                                An ERV system goes one step further. It transfers both heat and humidity, balancing moisture levels for ultimate comfort.
                            </p>
                            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                                <Link to="/contact" style={{
                                    textDecoration: "none", background: "#ff7216", color: "#fff",
                                    padding: "18px 40px", borderRadius: 50, fontWeight: 700,
                                    boxShadow: "0 10px 25px rgba(2, 132, 199, 0.2)",
                                    display: "inline-flex", alignItems: "center", gap: 10,
                                    transition: "all 0.2s",
                                }}>
                                    Find Your Balance <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>

                        <div className="erv-hero-img" style={{ position: "relative" }}>
                            <OptimizedImage
                                src={ervimage}
                                alt="Modern ERV System"
                                style={{
                                    width: "100%", maxHeight: "400px", borderRadius: "30px 30px 0 30px",
                                    boxShadow: "0 30px 60px -20px rgba(2, 132, 199, 0.25)",
                                    zIndex: 1, position: "relative",
                                    objectFit: "contain"
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
                                    <div style={{ color: "#ff7216" }}><Scale size={20} /></div>
                                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>Humidity Control</div>
                                </div>
                                <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.4 }}>
                                    Keeps your home's moisture levels perfectly balanced all year.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Secondary Section */}
                <div style={{ padding: "100px 20px", background: "#f0f9ff" }}>
                    <div style={{
                        maxWidth: 1200, margin: "0 auto",
                        background: "#fff",
                        borderRadius: 32, overflow: "hidden",
                        boxShadow: "0 30px 70px rgba(12, 74, 110, 0.08)",
                        border: '1px solid #ff7216',
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                        minHeight: "70vh"
                    }}>
                        {/* Content Side */}
                        <div style={{ padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div style={{ color: "#ff7216", fontWeight: 700, letterSpacing: 2, marginBottom: 16, fontSize: 14, textTransform: "uppercase" }}>
                                Energy Recovery ventilation
                            </div>
                            <h2 style={{ fontSize: "clamp(32px, 5vw, 42px)", fontWeight: 900, marginBottom: 32, lineHeight: 1.1, color: "#0c4a6e" }}>
                                Balanced Moisture <br /> & Fresh Air
                            </h2>
                            <p style={{ fontSize: 18, color: "#44403c", lineHeight: 1.7, marginBottom: 40, maxWidth: 500 }}>
                                While HRVs recover heat, ERVs recover both heat and moisture. This makes them ideal for maintaining a balanced, comfortable indoor environment.
                            </p>

                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 24 }}>
                                {[
                                    { title: "Humidity Control", desc: "Recovers moisture in winter and dehumidifies in summer." },
                                    { title: "Energy Savings", desc: "Reduces the load on your AC and furnace significantly." },
                                    { title: "Filtered Air", desc: "Provides a constant supply of fresh, filtered outdoor air." }
                                ].map((item, i) => (
                                    <li key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                                        <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255, 114, 22, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                            <Droplets size={22} color="#ff7216" />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: 18, fontWeight: 700, color: "#0c4a6e", marginBottom: 6 }}>{item.title}</h4>
                                            <p style={{ color: "#64748b", margin: 0, fontSize: 15 }}>{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Side */}
                        <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #f1f5f9" }}>
                            <div style={{ flex: 1, position: "relative", minHeight: "50vh", maxHeight: "50vh", overflow: "hidden", background: "#f8fafc" }}>
                                <OptimizedImage
                                    src={ervimage}
                                    alt="Professional ERV System"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "block",
                                        objectFit: "contain"
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
                                    <h4 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12, color: "#ff7216" }}>Optimal Recovery</h4>
                                    <p style={{ opacity: 0.9, color: "#ff7216", fontWeight: 600, fontSize: 16 }}>Efficiency and comfort in every single breath.</p>
                                </div>
                            </div>

                            {/* Info Footer */}
                            <div style={{ padding: "40px 60px", background: "#fff", borderTop: "1px solid #f1f5f9", display: "flex", flexDirection: "column", gap: 20 }}>
                                <div>
                                    <span style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700, color: "#94a3b8" }}>Featured Model</span>
                                    <h3 style={{ fontSize: 24, fontWeight: 800, color: "#ff7216", margin: "8px 0 0" }}>VanEE Advanced Series</h3>
                                </div>
                                <div style={{
                                    display: "inline-flex", alignItems: "center", gap: 12, padding: "12px 24px",
                                    background: "#f8fafc", borderRadius: 100, border: "1px solid #e2e8f0"
                                }}>
                                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }}></div>
                                    <span style={{ fontSize: 15, fontWeight: 700, color: "#475569" }}>Total Energy Recovery Built-in</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div style={{ padding: "60px 20px", background: "#fff", textAlign: "center" }}>
                    <div style={{ maxWidth: 800, margin: "0 auto" }}>
                        <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: 24, color: '#ff7216' }}>Fresh air is just a call away.</h2>
                        <p style={{ fontSize: 18, color: "#64748b", marginBottom: 40 }}>Our team is ready to help you find the perfect balance for your home.</p>
                        <Link to="/contact" style={{
                            display: "inline-flex", alignItems: "center", gap: 12,
                            textDecoration: "none", background: "#ff7216", color: "#fff",
                            padding: "18px 40px", borderRadius: 100, fontWeight: 700, fontSize: 18,
                            boxShadow: "0 10px 30px rgba(2, 132, 199, 0.4)"
                        }}>
                            <Calendar size={20} /> Schedule Audit
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
