import React from "react";
import { Zap, Sun, Snowflake, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heatpump from '../assets/heatpump.png'

export default function HeatPump() {
    return (
        <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

            {/* Custom Hero: Split/Gradient */}
            <div style={{
                background: "linear-gradient(to right, #fff 50%, #fff7ed 50%)",
                minHeight: "450px",
                display: "flex",
                alignItems: "center"
            }} className="split-bg-responsive">
                <style>{`
                    @media (max-width: 768px) {
                        .split-bg-responsive { background: #fff !important; padding-top: 60px; }
                    }
                `}</style>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, width: "100%", padding: 20, alignItems: "center" }} className="grid-stack">
                    <style>{`
                        @media (max-width: 768px) {
                            .grid-stack { grid-template-columns: 1fr !important; }
                        }
                    `}</style>

                    {/* Text Left */}
                    <div>
                        <div style={{
                            display: "inline-block", background: "#fff", color: "#ff7216",
                            fontWeight: 700, padding: "6px 12px", borderRadius: 8, marginBottom: 20, fontSize: 13
                        }}>
                            ECO-FRIENDLY CHOICE
                        </div>
                        <h1 style={{ fontSize: "clamp(40px, 5vw, 60px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
                            One <span style={{ color: "#ff7216" }}>System.<br />Every </span> Season.
                        </h1>
                        <p style={{ fontSize: 18, color: "#4b5563", marginBottom: 32, lineHeight: 1.6 }}>
                            Heating in winter, cooling in summer. Heat pumps are the most efficient way to control your home's climate.
                        </p>
                        <div style={{ display: "flex", gap: 16 }}>
                            <Link to="/contact" style={{
                                textDecoration: "none", background: "#ff7216", color: "#fff",
                                padding: "14px 28px", borderRadius: 8, fontWeight: 600,
                            }}>
                                Get a Quote
                            </Link>

                        </div>
                    </div>

                    {/* Image Right with Mask */}
                    <div style={{ position: "relative" }}>
                        <img
                            src={heatpump}
                            alt="Heat Pump System"
                            style={{
                                width: "100%", borderRadius: "200px 200px 20px 20px",
                                boxShadow: "0 20px 50px rgba(0,0,0,0.1)"
                            }}
                        />
                        <div style={{
                            position: "absolute", top: 40, right: -20, background: "#fff",
                            padding: "16px 24px", borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                            display: "flex", alignContent: "center", gap: 10, fontWeight: 700
                        }}>
                            <Zap size={24} color="#ff7216" fill="#ff7216" /> Efficient
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 1: Image Left, Text Right */}
            <div style={{ padding: "40px 20px", background: "#fff" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 80, alignItems: "center" }}>

                    {/* Image 1 */}
                    <div style={{ position: "relative" }}>
                        <div style={{
                            background: "linear-gradient(45deg, #ff7216, #ff9f43)",
                            borderRadius: 30, padding: 5, transform: "rotate(-2deg)"
                        }}>
                            <img
                                src={heatpump}
                                alt="Ductless Heat Pump Unit"
                                style={{ width: "100%", borderRadius: 25, transform: "rotate(2deg)", background: "#fff" }}
                            />
                        </div>
                    </div>

                    <div>
                        <h2 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, marginBottom: 24 }}>
                            Heating & Cooling in <span style={{ color: "#ff7216" }}>One Unit</span>
                        </h2>
                        <p style={{ fontSize: 18, color: "#4b5563", lineHeight: 1.7, marginBottom: 30 }}>
                            Heat pumps transfer heat rather than generating it, making them incredibly efficient. In summer, they act like an AC. In winter, they extract heat from the outside air (even at -30°C!) to warm your home.
                        </p>
                        <ul style={{ display: "grid", gap: 16 }}>
                            {["Up to 300% Efficiency", "Reduces Carbon Footprint", "Eligible for Government Rebates"].map((item, i) => (
                                <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 17, fontWeight: 600 }}>
                                    <CheckCircle size={20} color="#ff7216" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Section 2: Text Left, Image Right */}
            <div style={{ padding: "40px 20px", background: "#fafbfc" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>

                    <div style={{ order: 1 }}>
                        <h2 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, marginBottom: 24, color: '#ff7216' }}>
                            Quiet & Consistent
                        </h2>
                        <p style={{ fontSize: 18, color: "#4b5563", lineHeight: 1.7, marginBottom: 30 }}>
                            Forget the roar of a traditional furnace. Modern heat pumps operate at a whisper. Plus, their inverter technology maintains a precise temperature without the uncomfortable "blast and wait" cycles.
                        </p>
                        <div style={{ display: "flex", gap: 20 }}>
                            <div style={{ background: "#fff", padding: 20, borderRadius: 16, flex: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                                <Sun color="#ff7216" size={32} style={{ marginBottom: 10 }} />
                                <div style={{ fontWeight: 700, fontSize: 16 }}>Summer Cool</div>
                            </div>
                            <div style={{ background: "#fff", padding: 20, borderRadius: 16, flex: 1, boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                                <Snowflake color="#ff7216" size={32} style={{ marginBottom: 10 }} />
                                <div style={{ fontWeight: 700, fontSize: 16 }}>Winter Warm</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Custom CTA: Grey with Dual Buttons */}
            <div style={{ padding: "80px 20px", background: "#1f2937", color: "#fff", textAlign: "center" }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: 20 }}>Ready to go ductless?</h2>
                    <p style={{ fontSize: 18, color: "#9ca3af", marginBottom: 30 }}>Get a free consultation and see how much you can save.</p>
                    <div style={{ display: "flex", gap: 16, justifyItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link to="/contact" style={{
                            textDecoration: "none", background: "#ff7216", color: "#fff",
                            padding: "16px 32px", borderRadius: 8, fontWeight: 600,
                        }}>
                            Get Pricing
                        </Link>
                        <Link to="/about-us" style={{
                            textDecoration: "none", border: "1px solid #4b5563", color: "#fff",
                            padding: "16px 32px", borderRadius: 8, fontWeight: 600,
                        }}>
                            Why Choose Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
