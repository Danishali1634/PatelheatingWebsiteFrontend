import React from "react";
import { Droplets, TrendingDown, Clock, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import tankless from '../assets/tankless.png'


export default function TanklessWaterHeater() {
    return (
        <>
            <title>Tankless Water Heaters - Patel Heating & Air Conditioning</title>
            <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

                {/* Custom Hero: Clean Water Theme */}
                <div style={{
                    position: "relative", paddingTop: 40, paddingBottom: 60, overflow: "hidden",
                    background: "linear-gradient(to bottom, #f0f9ff, #fff)"
                }}>
                    <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #bae6fd 0%, transparent 70%)", opacity: 0.5 }}></div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 100, background: "linear-gradient(to top, #fff, transparent)", zIndex: 2 }}></div>

                    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 1 }} className="tankless-hero-grid">
                        <style>{`
                            @media (max-width: 968px) {
                                .tankless-hero-grid { grid-template-columns: 1fr !important; text-align: center; }
                                .tankless-hero-img { order: -1; margin-bottom: 20px; }
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
                                <Droplets size={16} fill="#ff7216" color="#ff7216" /> ENDLESS HOT WATER
                            </div>
                            <h1 style={{
                                fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24,
                                letterSpacing: "-0.03em", color: "#0c4a6e"
                            }}>
                                <span style={{ color: "#ff7216" }}>Never Run Out</span><br />
                                <span>of Hot Water Again.</span>
                            </h1>
                            <p style={{ fontSize: 20, color: "#64748b", marginBottom: 40, lineHeight: 1.6, maxWidth: 550 }}>
                                Switch to an energy-efficient tankless system and enjoy on-demand comfort while saving space and money.
                            </p>
                            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                                <Link to="/contact" style={{
                                    textDecoration: "none", background: "#ff7216", color: "#fff",
                                    padding: "18px 40px", borderRadius: 50, fontWeight: 700,
                                    boxShadow: "0 10px 25px rgba(14, 165, 233, 0.3)",
                                    display: "inline-flex", alignItems: "center", gap: 10,
                                    transition: "all 0.2s",
                                }}>
                                    Book Free Quote <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>

                        <div className="tankless-hero-img" style={{ position: "relative" }}>
                            <img
                                src={tankless}
                                alt="Modern Tankless Water Heater"
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
                                    <div style={{ color: "#ff7216" }}><TrendingDown size={20} /></div>
                                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>Energy Efficient</div>
                                </div>
                                <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.4 }}>
                                    Heats only what you use. No wasted standby heating.
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
                                    Water Heater Services & Installation
                                </div>
                                <h2 style={{ fontSize: "clamp(30px, 4vw, 36px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.2, color: "#ff7216" }}>
                                    Unlimited Hot Water • Save Space • Reduce Bills
                                </h2>
                                <p style={{ fontSize: 18, color: "#64748b", lineHeight: 1.7, maxWidth: 800 }}>
                                    Switching to a tankless hot water system is one of the best upgrades for modern homes. Enjoy endless hot water while reducing your energy footprint.
                                </p>
                            </div>

                            {/* Content Grid */}
                            <div style={{
                                display: "grid",
                                gap: "40px",
                                padding: "0 40px 60px"
                            }}>
                                {/* Why Tankless */}
                                <div>
                                    <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#ff7216", display: "flex", alignItems: "center", gap: 10 }}>
                                        <span style={{ width: 8, height: 8, background: "#ff7216", borderRadius: "50%" }}></span>
                                        Why Choose Tankless?
                                    </h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
                                        {[
                                            "Endless hot water flow (never runs out)",
                                            "Up to 40% more energy efficient than tanks",
                                            "Compact wall-mounted design saves space",
                                            "Longer lifespan (up to 20 years with care)"
                                        ].map((item, i) => (
                                            <li key={i} style={{ color: "#64748b", fontSize: 16, display: "flex", alignItems: "flex-start", gap: 10 }}>
                                                <span style={{ color: "#ff7216", fontWeight: "bold" }}>•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* When to Upgrade */}
                                <div>
                                    <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#ff7216", display: "flex", alignItems: "center", gap: 10 }}>
                                        <span style={{ width: 8, height: 8, background: "#0ea5e9", borderRadius: "50%" }}></span>
                                        When to Upgrade
                                    </h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
                                        {[
                                            "Current tank is over 10-12 years old",
                                            "Visible leaks or rust on your current tank",
                                            "Running out of hot water during busy hours",
                                            "Wanting to reclaim basement floor space"
                                        ].map((item, i) => (
                                            <li key={i} style={{ color: "#64748b", fontSize: 16, display: "flex", alignItems: "flex-start", gap: 10 }}>
                                                <span style={{ color: "#ff7216", fontWeight: "bold" }}>•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Our Services */}
                                <div>
                                    <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#ff7216", display: "flex", alignItems: "center", gap: 10 }}>
                                        <span style={{ width: 8, height: 8, background: "#6366f1", borderRadius: "50%" }}></span>
                                        Why Choose Us?
                                    </h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
                                        {[
                                            "Certified installation and safe gas piping",
                                            "Official warranty on parts and labor",
                                            "Annual descaling and maintenance services",
                                            "Expert advice on sizing for your family"
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
                                    src={tankless}
                                    alt="Tankless Water System"
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
                                    background: "linear-gradient(to top, rgba(12, 74, 110, 0.8), transparent)",
                                    color: "#fff"
                                }}>
                                    <h4 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>On-Demand Performance</h4>
                                    <p style={{ opacity: 0.9 }}>Reliable hot water exactly when you need it, for as long as you need it.</p>
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
                                    <span style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 1, fontWeight: 700, color: "#ff7216" }}>Product Details</span>
                                    <h3 style={{ fontSize: 22, fontWeight: 800, color: "#ff7216", margin: "5px 0 0" }}>Rinnai Tankless</h3>
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
                                    Efficiency Leader
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* CTA */}
                <div style={{ padding: "60px 20px", background: "#fff", textAlign: "center" }}>
                    <div style={{ maxWidth: 800, margin: "0 auto" }}>
                        <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: 24, color: '#ff7216' }}>Stop waiting for hot water.</h2>
                        <p style={{ fontSize: 18, color: "#64748b", marginBottom: 40 }}>Our experts can install your new tankless system in just one day.</p>
                        <Link to="/contact" style={{
                            display: "inline-flex", alignItems: "center", gap: 12,
                            textDecoration: "none", background: "#ff7216", color: "#fff",
                            padding: "18px 40px", borderRadius: 100, fontWeight: 700, fontSize: 18,
                            boxShadow: "0 10px 30px rgba(14, 165, 233, 0.4)"
                        }}>
                            <Calendar size={20} /> Get Free Estimate
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
