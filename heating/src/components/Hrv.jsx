
import React from "react";
import { Wind, ArrowLeftRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import hrvimage from "../assets/hrvimage.png";
import ervimage from '../assets/ervimage.jpg'

export default function Hrv() {
    return (
        <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

            {/* Custom Hero: Nature/Green Tint */}
            <div style={{
                position: "relative",
                height: "40vh", minHeight: 300,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", textAlign: "center"
            }}>
                <div style={{
                    position: "absolute", inset: 0,
                    backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
                    backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.5)"
                }}></div>

                <div style={{ position: "relative", zIndex: 1, maxWidth: 800, padding: 20 }}>
                    <div style={{ color: "#a7f3d0", fontWeight: 700, letterSpacing: 2, marginBottom: 20, fontSize: 13 }}>
                        FRESH AIR EXCHANGE
                    </div>
                    <h1 style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 800, marginBottom: 30, color: '#fff' }}>
                        <span style={{ color: '#ff7216' }}>Filtered.</span><br />Fresh.
                    </h1>
                    <p style={{ fontSize: 20, color: "#e2e8f0", marginBottom: 40 }}>
                        Keep your heat, lose the stale air. Essential ventilation for modern, airtight homes.
                    </p>

                </div>
            </div>


            <div style={{ padding: "40px 20px", background: "#f0fdf4" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                    {/* Concept Section */}
                    <div style={{ textAlign: "center", maxWidth: 800, margin: "0 auto 80px" }}>
                        <h2 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, marginBottom: 24, color: "#064e3b", color: '#ff7216' }}>How It Works</h2>
                        <p style={{ fontSize: 18, color: "#334155", lineHeight: 1.7 }}>
                            An HRV is like a lung for your house. It expels stale, pollutant-filled indoor air and replaces it with fresh outdoor air. The magic? It transfers the heat from the outgoing air to the incoming air, saving you money.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>

                        {/* Box 1 - Image 1 */}
                        <div style={{ background: "#fff", borderRadius: 24, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                            <img
                                src={hrvimage}
                                alt="Fresh Air Supply Intake"
                                style={{ width: "100%", height: "250px", marginTop: '30px', objectFit: "contain" }}
                            />
                            <div style={{ padding: 40 }}>
                                <div style={{ color: "#10b981", marginBottom: 16 }}><Leaf size={32} /></div>
                                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Fresh Air In</h3>
                                <p style={{ color: "#64748b" }}>Brings in oxygen-rich air from outside, filters it, and warms it up before it enters your living space.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom CTA: Nature Themed */}
            <div style={{ padding: "40px 20px", background: "#111", textAlign: "center" }}>
                <Link to="/contact" style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    textDecoration: "none", color: "#ff7216",
                    fontSize: 20, fontWeight: 700,
                    borderBottom: "1px solid #fff", paddingBottom: 4
                }}>
                    Improve your home's respiratory health <Wind size={20} />
                </Link>
            </div>
        </div>
    );
}
