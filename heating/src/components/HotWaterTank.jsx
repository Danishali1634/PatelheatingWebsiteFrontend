import React from "react";
import { Flame, Clock, RefreshCw, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import watertank from '../assets/watertank.png'

export default function HotWaterTank() {
    return (
        <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

            {/* Custom Hero: Split Solid Color */}
            <div style={{ display: "flex", flexWrap: "wrap", minHeight: "250px" }}>
                <div style={{
                    flex: "1 1 400px", background: "#1e3a8a", color: "#fff",
                    padding: "20px 20px", display: "flex", flexDirection: "column", justifyContent: "center"
                }}>
                    <div style={{ maxWidth: 600, margin: "0 auto" }}>
                        <div style={{
                            textTransform: "uppercase", letterSpacing: 2, fontWeight: 700, fontSize: 13, color: "#93c5fd", marginBottom: 16
                        }}>
                            Expert Installation
                        </div>
                        <h1 style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 20 }}>
                            <span style={{ color: '#ffff' }}>Hot Water.</span><br /><span style={{ color: "#ff7216" }}>Always Ready.</span>
                        </h1>
                        <p style={{ fontSize: 18, color: "#dbeafe", marginBottom: 30, lineHeight: 1.6 }}>
                            High-capacity tanks for large families. Reliable, affordable, and built to last.
                        </p>
                        <Link to="/contact" style={{
                            display: "inline-flex", alignItems: "center", gap: 10,
                            textDecoration: "none", background: "#fff", color: "#ff7216",
                            border: "2px solid #ff7216",
                            padding: "14px 32px", borderRadius: 4, fontWeight: 700, fontSize: 16
                        }}>
                            Get a Quote <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
                <div style={{ flex: "1 1 300px", minHeight: "200px", maxHeight: "450px", position: "relative", overflow: "hidden" }}>
                    <img
                        src={watertank}
                        alt="Hot Water Tank"
                        style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
                    />
                </div>
            </div>

            <div style={{ padding: "40px 20px", background: "#fff" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>

                    <div style={{ background: "#f8fafc", padding: "40px 30px", borderRadius: 24 }}>
                        <h2 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, marginBottom: 24, color: "#ff7216" }}>
                            Dependable Hot Water
                        </h2>
                        <p style={{ fontSize: 18, color: "#475569", lineHeight: 1.7, marginBottom: 50, maxWidth: 700, margin: "0 auto 50px" }}>
                            There's comfort in reliability. A modern hot water tank stores a large volume of heated water, ready for multiple showers, laundry, and dishes all at once. We install top-rated brands that prioritize safety and longevity.
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, textAlign: "left" }}>
                            {[
                                { icon: <Flame />, title: "Rapid Recovery", text: "Powerful burners reheat water quickly after heavy use." },
                                { icon: <Clock />, title: "Long Lifespan", text: "Durable glass-lined tanks resist corrosion." },
                                { icon: <RefreshCw />, title: "Easy Replacement", text: "Seamless swap of your old, leaking unit." }
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: 20, alignItems: "start", padding: 24, background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0" }}>
                                    <div style={{ color: "#ff7216" }}>{item.icon}</div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, fontSize: 17, marginBottom: 8, color: "#1e293b" }}>{item.title}</h4>
                                        <p style={{ fontSize: 14, color: "#64748b", margin: 0, lineHeight: 1.5 }}>{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Custom CTA: Urgent/Red */}
            <div style={{ padding: "60px 20px", background: "#fee2e2", textAlign: "center" }}>
                <h2 style={{ fontSize: "30px", fontWeight: 800, color: "#ff7216", marginBottom: 16 }}>Leaking Tank?</h2>
                <p style={{ fontSize: 18, color: "#b91c1c", marginBottom: 30 }}>Don't wait for water damage. Call us for emergency replacement.</p>
                <Link to="/contact" style={{
                    textDecoration: "none", background: "#ff7216", color: "#fff",
                    padding: "14px 30px", borderRadius: 50, fontWeight: 700,
                    boxShadow: "0 4px 12px rgba(239, 68, 68, 0.4)"
                }}>
                    Call 24/7 Service
                </Link>
            </div>
        </div>
    );
}
