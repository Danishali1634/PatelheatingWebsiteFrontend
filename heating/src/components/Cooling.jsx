import React from "react";
import { Snowflake, Wind, Droplets, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import cooling from '../assets/cooling.jpg'

export default function Cooling() {
    return (
        <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

            {/* Custom Hero: Fresh & Pure Air */}
            <div style={{
                position: "relative", paddingTop: 40, paddingBottom: 60, overflow: "hidden",
                background: "linear-gradient(to bottom, #f0f9ff, #fff)"
            }}>
                <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #bae6fd 0%, transparent 70%)", opacity: 0.5 }}></div>
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 100, background: "linear-gradient(to top, #fff, transparent)", zIndex: 2 }}></div>

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 1 }} className="cooling-hero-grid">
                    <style>{`
                        @media (max-width: 968px) {
                            .cooling-hero-grid { grid-template-columns: 1fr !important; text-align: center; }
                            .cooling-hero-img { display: none; }
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
                            <Snowflake size={16} fill="#ff7216" color="#ff7216" /> COOL COMFORTS
                        </div>
                        <h1 style={{
                            fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24,
                            letterSpacing: "-0.03em", color: "#0c4a6e"
                        }}>
                            Beating <span style={{ color: "#ff7216" }}> the </span>Heat<br />
                            <span style={{ color: "#ff7216" }}>Made Simple.</span>
                        </h1>
                        <p style={{ fontSize: 20, color: "#64748b", marginBottom: 40, lineHeight: 1.6, maxWidth: 550 }}>
                            Escape the summer humidity with our premium air conditioning systems. Quiet, efficient, and installed by certified pros.
                        </p>
                        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                            <Link to="/contact" style={{
                                textDecoration: "none", background: "#ff7216", color: "#fff",
                                padding: "18px 40px", borderRadius: 50, fontWeight: 700,
                                boxShadow: "0 10px 25px rgba(14, 165, 233, 0.3)",
                                display: "inline-flex", alignItems: "center", gap: 10,
                                transition: "all 0.2s",
                            }}>
                                Book AC Service <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" style={{
                                textDecoration: "none", background: "white", color: "black", border: '1px solid #ff7216',
                                padding: "18px 40px", borderRadius: 50, fontWeight: 700,
                                display: "inline-flex", alignItems: "center", gap: 10,
                                transition: "all 0.2s"
                            }}>
                                Annual Tune-Up
                            </Link>
                        </div>
                    </div>

                    <div className="cooling-hero-img" style={{ position: "relative" }}>
                        <img
                            src={cooling}
                            alt="Refreshing Cool Interior"
                            style={{
                                width: "100%", maxHeight: "400px", objectFit: "contain", borderRadius: "30px 30px 0 30px",
                                boxShadow: "0 30px 60px -20px rgba(14, 165, 233, 0.25)",
                                zIndex: 1, position: "relative"
                            }}
                        />
                        {/* Floating Glass Card */}
                        <div style={{
                            position: "absolute", bottom: -30, right: -20,
                            background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(20px)",
                            padding: 24, borderRadius: 24,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                            zIndex: 2, maxWidth: 220
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                                <div style={{ color: "#ff7216" }}><Wind size={20} /></div>
                                <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>Eco-Friendly</div>
                            </div>
                            <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.4 }}>
                                Uses latest refrigerants to protect the ozone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Immersive Layout */}
            <div style={{ padding: "60px 20px", background: "#f0f9ff", }}>
                <div style={{
                    maxWidth: 1000, margin: "0 auto",
                    background: "#fff",
                    borderRadius: 32, overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(14, 165, 233, 0.1)",
                    display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    border: '1px solid #ff7216'
                }}>

                    {/* Content Side */}
                    <div style={{ padding: "60px 40px" }}>
                        <div style={{ color: "#ff7216", fontWeight: 700, letterSpacing: 1.2, marginBottom: 16, fontSize: 13 }}>HIGH PERFORMANCE</div>
                        <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: 24, lineHeight: 1.2, color: "#0f172a" }}>
                            Efficient Cooling Solutions
                        </h2>
                        <p style={{ fontSize: 18, color: "#64748b", lineHeight: 1.7, marginBottom: 40 }}>
                            We install high-SEER air conditioning units that cool your home faster while using less energy. Enjoy whisper-quiet operation and perfect humidity control.
                        </p>

                        <div style={{ display: "grid", gap: 30 }}>
                            {[
                                { icon: <Snowflake />, title: "Precision Cooling", text: "Maintain the perfect temperature." },
                                { icon: <Wind />, title: "Better Airflow", text: "Advanced blowers for consistent air distribution." }
                            ].map((f, i) => (
                                <div key={i} style={{ display: "flex", gap: 16 }}>
                                    <div style={{
                                        background: "#e0f2fe", padding: 12, borderRadius: 12, color: "#ff7216"
                                    }}>
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{f.title}</h4>
                                        <p style={{ color: "#64748b", fontSize: 15, margin: 0 }}>{f.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side - Abstract */}
                    <div style={{
                        background: "linear-gradient(135deg, #0ea5e9, #6366f1)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        position: "relative",
                        minHeight: 300
                    }}>
                        <Snowflake size={150} color="rgba(255,255,255,0.2)" />
                        <div style={{ position: "absolute", bottom: 40, left: 40, right: 40, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", padding: 20, borderRadius: 16, color: "#fff" }}>
                            <div style={{ fontWeight: 700, fontSize: 14 }}>AVERAGE SAVINGS</div>
                            <div style={{ fontSize: 32, fontWeight: 800, color: '#ff7216' }}>30-40%</div>
                            <div style={{ fontSize: 12, opacity: 0.8 }}>on cooling bills with new units</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CTA: Soft Blue */}
            <div style={{ padding: "60px 20px", background: "#fff", textAlign: "center" }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: 24, color: '#ff7216' }}>Don't sweat the heat.</h2>
                    <p style={{ fontSize: 18, color: "#64748b", marginBottom: 40 }}>From annual tune-ups to emergency repairs, our team is ready to help.</p>
                    <Link to="/contact" style={{
                        display: "inline-flex", alignItems: "center", gap: 12,
                        textDecoration: "none", background: "#ff7216", color: "#fff",
                        padding: "18px 40px", borderRadius: 100, fontWeight: 700, fontSize: 18,
                        boxShadow: "0 10px 30px rgba(14, 165, 233, 0.4)"
                    }}>
                        <Calendar size={20} /> Schedule Service
                    </Link>
                </div>
            </div>
        </div>
    );
}