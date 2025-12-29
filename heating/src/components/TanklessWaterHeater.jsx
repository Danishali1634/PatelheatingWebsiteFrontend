
import React from "react";
import { Droplets, TrendingDown, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
// import tankless from '../assets/tankless.png'
import tankless from '../assets/tankless.png'

export default function TanklessWaterHeater() {
    return (
        <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

            {/* Custom Hero: Clean Water Theme */}
            <div style={{ padding: "20px 20px 40px", background: "#f0f9ff", textAlign: "center", overflow: "hidden" }}>
                <div style={{ maxWidth: 800, margin: "0 auto", position: "relative" }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        background: "#fff", color: "gray",
                        padding: "8px 20px", borderRadius: 50, fontSize: 13, fontWeight: 700,
                        border: '2px solid #ff7216',
                        marginBottom: 30, boxShadow: "0 10px 20px rgba(14, 165, 233, 0.1)"
                    }}>
                        <Droplets size={16} color="#ff7216" /> ENDLESS HOT WATER
                    </div>
                    <h1 style={{ fontSize: "clamp(42px, 6vw, 72px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.03em", color: "#0f172a" }}>
                        <span style={{ color: "#ff7216" }}>Never Run Out</span><br />of Hot <span style={{ color: '#ff7216' }}>Water</span> Again<span style={{ color: '#ff7216' }}>.</span>
                    </h1>
                    <p style={{ fontSize: 20, color: "#64748b", marginBottom: 40, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
                        Switch to an energy-efficient tankless system and enjoy on-demand comfort while saving space.
                    </p>
                    <Link to="/contact" style={{
                        textDecoration: "none", background: "#", color: "gray",
                        padding: "16px 36px", borderRadius: 12, fontWeight: 700,
                        display: "inline-flex", alignItems: "center", gap: 8,
                        border: '2px solid #ff7216',
                        boxShadow: "0 10px 30px rgba(14, 165, 233, 0.3)"
                    }}>
                        Get a Free Quote <ArrowRight size={20} color="#ff7216" />
                    </Link>
                </div>
            </div>

            <div style={{ padding: "40px 20px", background: "#fff", overflow: "hidden" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "clamp(32px, 4vw, 42px)", fontWeight: 800, marginBottom: 60, color: '#ff7216' }}>
                        The Tankless Advantage
                    </h2>

                    <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: 60 }}>

                        {/* Center Image */}
                        <div style={{
                            width: 250, height: 320, background: "#f0f9ff", borderRadius: 40,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            boxShadow: "0 20px 60px rgba(14, 165, 233, 0.1)", zIndex: 2, border: "1px solid #e0f2fe"
                        }}>
                            <img
                                src={tankless}
                                alt="Tankless Water Heater"
                                style={{ width: "90%", height: "90%", objectFit: "contain" }} // Placeholder visual
                            />
                        </div>

                        {/* Floating Features */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 30, textAlign: "left", flex: 1, minWidth: 280 }}>
                            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                                <div style={{ background: "#f0f9ff", padding: 12, borderRadius: 12, color: "#ff7216" }}><Droplets /></div>
                                <div>
                                    <h4 style={{ fontWeight: 700, fontSize: 18 }}>Unlimited Supply</h4>
                                    <p style={{ color: "#64748b", fontSize: 15 }}>Heats water instantly as it flows through. No tank to deplete.</p>
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                                <div style={{ background: "#f0f9ff", padding: 12, borderRadius: 12, color: "#ff7216" }}><TrendingDown /></div>
                                <div>
                                    <h4 style={{ fontWeight: 700, fontSize: 18 }}>Save Space & Energy</h4>
                                    <p style={{ color: "#64748b", fontSize: 15 }}>Wall-mounted design saves floor space and uses up to 40% less energy.</p>
                                </div>
                            </div>
                            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                                <div style={{ background: "#f0f9ff", padding: 12, borderRadius: 12, color: "#ff7216" }}><Clock /></div>
                                <div>
                                    <h4 style={{ fontWeight: 700, fontSize: 18 }}>20+ Year Lifespan</h4>
                                    <p style={{ color: "#64748b", fontSize: 15 }}>Lasts almost twice as long as traditional tank heaters.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Custom CTA: Gradient Text */}
            <div style={{ padding: "60px 20px", background: "#0f172a", textAlign: "center" }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <h2 style={{
                        fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 900, marginBottom: 20,
                        // background: "linear-gradient(to right, #38bdf8, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
                        color: '#ff7216'
                    }}>
                        Upgrade Time?
                    </h2>
                    <p style={{ fontSize: 18, color: "#94a3b8", marginBottom: 40 }}>
                        Start enjoying endless hot water today. Flexible financing available.
                    </p>
                    <Link to="/contact" style={{
                        textDecoration: "none", color: "#fff",
                        padding: "16px 40px", borderRadius: 8, fontWeight: 700,
                        display: "inline-block",
                        border: '2px solid #ff7216'
                    }}>
                        Contact a Specialist
                    </Link>
                </div>
            </div>
        </div>
    );
}

