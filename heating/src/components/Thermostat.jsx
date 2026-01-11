import React from "react";
import { Smartphone, PieChart, Wifi, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import thermostast from '../assets/thermostast.png'


export default function Thermostat() {
    return (
        <>
            <title>Thermostats & Controls - Patel Heating & Air Conditioning</title>
            <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

                {/* Custom Hero: Smart Control */}
                <div style={{
                    position: "relative", paddingTop: 40, paddingBottom: 60, overflow: "hidden",
                    background: "linear-gradient(to bottom, #f0f9ff, #fff)"
                }}>
                    <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #bae6fd 0%, transparent 70%)", opacity: 0.5 }}></div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 100, background: "linear-gradient(to top, #fff, transparent)", zIndex: 2 }}></div>

                    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 1 }} className="thermostat-hero-grid">
                        <style>{`
                            @media (max-width: 968px) {
                                .thermostat-hero-grid { grid-template-columns: 1fr !important; text-align: center; }
                                .thermostat-hero-img { order: -1; margin-bottom: 20px; }
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
                                <Wifi size={16} fill="#ff7216" color="#ff7216" /> SMART HOME READY
                            </div>
                            <h1 style={{
                                fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24,
                                letterSpacing: "-0.03em", color: "#0c4a6e"
                            }}>
                                Control <span style={{ color: "#ff7216" }}> Your </span>Comfort<br />
                                <span style={{ color: "#ff7216" }}>From Anywhere.</span>
                            </h1>
                            <p style={{ fontSize: 20, color: "#64748b", marginBottom: 40, lineHeight: 1.6, maxWidth: 550 }}>
                                Adjust your home's temperature from your phone, tablet, or voice assistant. Save energy without sacrificing comfort.
                            </p>
                            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                                <Link to="/contact" style={{
                                    textDecoration: "none", background: "#ff7216", color: "#fff",
                                    padding: "18px 40px", borderRadius: 50, fontWeight: 700,
                                    boxShadow: "0 10px 25px rgba(14, 165, 233, 0.3)",
                                    display: "inline-flex", alignItems: "center", gap: 10,
                                    transition: "all 0.2s",
                                }}>
                                    Install Smart Device <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>

                        <div className="thermostat-hero-img" style={{ position: "relative" }}>
                            <img
                                src={thermostast}
                                alt="Smart Thermostat Interface"
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
                                    <div style={{ color: "#ff7216" }}><PieChart size={20} /></div>
                                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>Energy Savings</div>
                                </div>
                                <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.4 }}>
                                    Reduce bills by up to 15% with smart scheduling.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Immersive Layout */}
                <div style={{ padding: "60px 20px", background: "#f0f9ff" }}>
                    <div style={{
                        maxWidth: 1200, margin: "0 auto",
                        background: "#fff",
                        borderRadius: 32, overflow: "hidden",
                        boxShadow: "0 20px 60px rgba(14, 165, 233, 0.1)",
                        border: '1px solid #ff7216',
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                    }}>

                        {/* Content Side */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {/* Text Content Header */}
                            <div style={{ padding: "60px 40px 40px", textAlign: "left" }}>
                                <div style={{ color: "black", fontWeight: 700, letterSpacing: 1.2, marginBottom: 16, fontSize: 13, textTransform: "uppercase" }}>
                                    Thermostat Installation & Upgrade
                                </div>
                                <h2 style={{ fontSize: "clamp(30px, 4vw, 36px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.2, color: "#ff7216" }}>
                                    Smart Control • Perfect Comfort • Maximum Efficiency
                                </h2>
                                <p style={{ fontSize: 18, color: "#64748b", lineHeight: 1.7, maxWidth: 800 }}>
                                    Your thermostat is the control center of your HVAC system. Upgrading or replacing it can improve comfort, reduce energy bills, and give you complete control over your home’s temperature.
                                </p>
                            </div>

                            {/* Content Grid */}
                            <div style={{
                                display: "grid",
                                gap: "40px",
                                padding: "0 40px 60px"
                            }}>
                                {/* Types */}
                                <div>
                                    <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#ff7216", display: "flex", alignItems: "center", gap: 10 }}>
                                        <span style={{ width: 8, height: 8, background: "#ff7216", borderRadius: "50%" }}></span>
                                        Thermostats We Install
                                    </h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
                                        {[
                                            "Programmable Thermostats",
                                            "Wi-Fi & Smart Thermostats",
                                            "Multi-Zone Controls",
                                            "Voice-Controlled Systems"
                                        ].map((item, i) => (
                                            <li key={i} style={{ color: "#64748b", fontSize: 16, display: "flex", alignItems: "flex-start", gap: 10 }}>
                                                <span style={{ color: "#ff7216", fontWeight: "bold" }}>•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Benefits */}
                                <div>
                                    <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#ff7216", display: "flex", alignItems: "center", gap: 10 }}>
                                        <span style={{ width: 8, height: 8, background: "#0ea5e9", borderRadius: "50%" }}></span>
                                        Benefits of Upgrading
                                    </h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
                                        {[
                                            "Lower monthly energy bills",
                                            "Consistent home temperatures",
                                            "Remote monitoring & control",
                                            "Seamless smart home integration"
                                        ].map((item, i) => (
                                            <li key={i} style={{ color: "#64748b", fontSize: 16, display: "flex", alignItems: "flex-start", gap: 10 }}>
                                                <span style={{ color: "#ff7216", fontWeight: "bold" }}>•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Why Choose Us */}
                                <div>
                                    <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#ff7216", display: "flex", alignItems: "center", gap: 10 }}>
                                        <span style={{ width: 8, height: 8, background: "#6366f1", borderRadius: "50%" }}></span>
                                        Why Choose Us?
                                    </h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
                                        {[
                                            "Certified installation experts",
                                            "Free setup and app configuration",
                                            "Compatibility checks for all HVAC systems",
                                            "Upfront pricing & 24/7 support"
                                        ].map((item, i) => (
                                            <li key={i} style={{ color: "#64748b", fontSize: 16, display: "flex", alignItems: "flex-start", gap: 10 }}>
                                                <span style={{ color: "#ff7216", fontWeight: "bold" }}>•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid rgba(255, 114, 22, 0.1)" }}>
                            <div style={{ flex: 1, position: "relative", minHeight: 400 }}>
                                <img
                                    src={thermostast}
                                    alt="Smart Control Device"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block"
                                    }}
                                />
                                <div style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: "40px",
                                    background: "linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)",
                                    color: "#fff"
                                }}>
                                    <h4 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>Precision Control</h4>
                                    <p style={{ opacity: 0.9 }}>Modern technology for total climate management at your fingertips.</p>
                                </div>
                            </div>

                            {/* Product Detail Footer */}
                            <div style={{
                                background: "#f8fafc",
                                padding: "30px 40px",
                                borderTop: "1px solid #e2e8f0",
                                display: "flex",
                                flexDirection: "column",
                                gap: 15
                            }}>
                                <div>
                                    <span style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 1, fontWeight: 700, color: "#ff7216" }}>Product Featured</span>
                                    <h3 style={{ fontSize: 22, fontWeight: 800, color: "#ff7216", margin: "5px 0 0" }}>Nest Learning Thermostat</h3>
                                </div>
                                <div style={{
                                    padding: "8px 20px",
                                    background: "#fff",
                                    border: "1px solid #e2e8f0",
                                    borderRadius: 100,
                                    fontWeight: 600,
                                    color: "#ff7216",
                                    width: "fit-content"
                                }}>
                                    Smart Integration
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* CTA */}
                <div style={{ padding: "60px 20px", background: "#fff", textAlign: "center" }}>
                    <div style={{ maxWidth: 800, margin: "0 auto" }}>
                        <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: 24, color: '#ff7216' }}>Ready to optimize your comfort?</h2>
                        <p style={{ fontSize: 18, color: "#64748b", marginBottom: 40 }}>Our team can help you select and install the perfect smart thermostat for your home.</p>
                        <Link to="/contact" style={{
                            display: "inline-flex", alignItems: "center", gap: 12,
                            textDecoration: "none", background: "#ff7216", color: "#fff",
                            padding: "18px 40px", borderRadius: 100, fontWeight: 700, fontSize: 18,
                            boxShadow: "0 10px 30px rgba(14, 165, 233, 0.4)"
                        }}>
                            <Calendar size={20} /> Schedule Installation
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
