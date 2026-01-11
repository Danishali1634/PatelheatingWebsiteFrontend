import React from "react";
import { Wind, ArrowLeftRight, Leaf, ShieldCheck, ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import hrvimage from "../assets/hrvimage.png";
import ervimage from "../assets/ervimage.jpg";


export default function Hrv() {
    return (
        <>
            <title>HRV Systems - Patel Heating & Air Conditioning</title>
            <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

                {/* Custom Hero: Nature/Freshness */}
                <div style={{
                    position: "relative", paddingTop: 40, paddingBottom: 60, overflow: "hidden",
                    background: "linear-gradient(to bottom, #f0fdf4, #fff)"
                }}>
                    <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #bbf7d0 0%, transparent 70%)", opacity: 0.5 }}></div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 100, background: "linear-gradient(to top, #fff, transparent)", zIndex: 2 }}></div>

                    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 1 }} className="hrv-hero-grid">
                        <style>{`
                            @media (max-width: 968px) {
                                .hrv-hero-grid { grid-template-columns: 1fr !important; text-align: center; }
                                .hrv-hero-img { order: -1; margin-bottom: 20px; }
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
                                <Leaf size={16} fill="#ff7216" color="#ff7216" /> FRESH AIR EXCHANGE
                            </div>
                            <h1 style={{
                                fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24,
                                letterSpacing: "-0.03em", color: "#064e3b"
                            }}>
                                Filtered. <span style={{ color: "#ff7216" }}> Fresh. </span><br />
                                <span style={{ color: "#ff7216" }}>Breathe Better.</span>
                            </h1>
                            <p style={{ fontSize: 20, color: "#4b5563", marginBottom: 40, lineHeight: 1.6, maxWidth: 550 }}>
                                Keep your heat, lose the stale air. Essential ventilation for modern, energy-efficient homes in any season.
                            </p>
                            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                                <Link to="/contact" style={{
                                    textDecoration: "none", background: "#ff7216", color: "#fff",
                                    padding: "18px 40px", borderRadius: 50, fontWeight: 700,
                                    boxShadow: "0 10px 25px rgba(22, 163, 74, 0.2)",
                                    display: "inline-flex", alignItems: "center", gap: 10,
                                    transition: "all 0.2s",
                                }}>
                                    Book System Audit <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>

                        <div className="hrv-hero-img" style={{ position: "relative" }}>
                            <img
                                src={hrvimage}
                                alt="Modern HRV System"
                                style={{
                                    width: "100%", maxHeight: "400px", objectFit: "contain", borderRadius: "30px 30px 0 30px",
                                    boxShadow: "0 30px 60px -20px rgba(22, 163, 74, 0.25)",
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
                                    <div style={{ color: "#ff7216" }}><ShieldCheck size={20} /></div>
                                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>Pure Ventilation</div>
                                </div>
                                <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.4 }}>
                                    Removes 99% of indoor airborne pollutants and stale air.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Immersive Layout */}
                <div style={{ padding: "60px 20px", background: "#f0fdf4" }}>
                    <div style={{
                        maxWidth: 1200, margin: "0 auto",
                        background: "#fff",
                        borderRadius: 32, overflow: "hidden",
                        boxShadow: "0 20px 60px rgba(22, 163, 74, 0.1)",
                        border: '1px solid #ff7216',
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                    }}>

                        {/* Content Side */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {/* Text Content Header */}
                            <div style={{ padding: "60px 40px 40px", textAlign: "left" }}>
                                <div style={{ color: "black", fontWeight: 700, letterSpacing: 1.2, marginBottom: 16, fontSize: 13, textTransform: "uppercase" }}>
                                    HRV & ERV Ventilation Services
                                </div>
                                <h2 style={{ fontSize: "clamp(30px, 4vw, 36px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.2, color: "#ff7216" }}>
                                    Fresh Air • Healthier Living • Lower Energy Bills
                                </h2>
                                <p style={{ fontSize: 18, color: "#64748b", lineHeight: 1.7, maxWidth: 800 }}>
                                    Your home’s indoor air can be more polluted than the outdoor air. These systems bring fresh, clean air into your home while saving energy — keeping your family healthy and comfortable.
                                </p>
                            </div>

                            {/* Content Grid */}
                            <div style={{
                                display: "grid",
                                gap: "40px",
                                padding: "0 40px 60px"
                            }}>
                                {/* HRV vs ERV */}
                                <div>
                                    <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#ff7216", display: "flex", alignItems: "center", gap: 10 }}>
                                        <span style={{ width: 8, height: 8, background: "#ff7216", borderRadius: "50%" }}></span>
                                        HRV vs ERV: Which is Right?
                                    </h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
                                        {[
                                            "HRV: Best for colder climates, transfers heat only",
                                            "ERV: Best for humid climates, transfers heat and moisture",
                                            "Both improve overall indoor air quality significantly",
                                            "Both reduce the workload on your furnace and AC"
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
                                        <span style={{ width: 8, height: 8, background: "#16a34a", borderRadius: "50%" }}></span>
                                        Key Benefits
                                    </h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
                                        {[
                                            "Eliminates stuffy, stale indoor air odors",
                                            "Prevents moisture and mold buildup on windows",
                                            "Filters out dust, allergens, and local pollutants",
                                            "Maintains balanced pressure throughout the home"
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
                                        <span style={{ width: 8, height: 8, background: "#0ea5e9", borderRadius: "50%" }}></span>
                                        Why Choose Us?
                                    </h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
                                        {[
                                            "Licensed ventilation specialists (HRAI Certified)",
                                            "Expert sizing for airtight, modern homes",
                                            "Professional integration with existing HVAC",
                                            "Full maintenance and filter cleaning programs"
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
                                    src={hrvimage}
                                    alt="HRV Unit Installation"
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
                                    background: "linear-gradient(to top, rgba(6, 78, 59, 0.8), transparent)",
                                    color: "#fff"
                                }}>
                                    <h4 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>Total Air Control</h4>
                                    <p style={{ opacity: 0.9 }}>Experience the difference that constant fresh air makes in your daily life.</p>
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
                                    <h3 style={{ fontSize: 22, fontWeight: 800, color: "#ff7216", margin: "5px 0 0" }}>Venmar HRV</h3>
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
                                    HRAI Certified
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* CTA */}
                <div style={{ padding: "60px 20px", background: "#fff", textAlign: "center" }}>
                    <div style={{ maxWidth: 800, margin: "0 auto" }}>
                        <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: 24, color: '#ff7216' }}>Breathe easy. We've got you.</h2>
                        <p style={{ fontSize: 18, color: "#64748b", marginBottom: 40 }}>Schedule your ventilation audit today and feel the difference in your indoor air.</p>
                        <Link to="/contact" style={{
                            display: "inline-flex", alignItems: "center", gap: 12,
                            textDecoration: "none", background: "#ff7216", color: "#fff",
                            padding: "18px 40px", borderRadius: 100, fontWeight: 700, fontSize: 18,
                            boxShadow: "0 10px 30px rgba(22, 163, 74, 0.4)"
                        }}>
                            <Calendar size={20} /> Request Service
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
