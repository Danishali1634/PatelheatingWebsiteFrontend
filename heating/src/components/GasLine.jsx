
import React from "react";
import { AlertTriangle, CheckSquare, Flame, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import gasline from "../assets/gasline.jpg";

export default function GasLine() {
    return (
        <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

            {/* Custom Hero: Warning/Yellow/Black */}
            <div style={{
                background: "#facc15", color: "#000", padding: "20px 20px",
                backgroundImage: "repeating-linear-gradient(45deg, #fde047, #fde047 10px, #facc15 10px, #facc15 20px)"
            }}>
                <div style={{ maxWidth: 1000, margin: "0 auto", background: "#fff", padding: "40px 40px", borderRadius: 0, boxShadow: "10px 10px 0 #000", border: "4px solid #000" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 900, fontSize: 14, letterSpacing: 1, marginBottom: 20, textTransform: "uppercase" }}>
                        <AlertTriangle size={20} color="#ff7216" /> Professional Service
                    </div>
                    <h1 style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 900, lineHeight: 0.9, marginBottom: 30 }}>
                        <span style={{ color: '#ff7216' }}>GAS LINE</span><br />INSTALLATION<span style={{ color: '#ff7216' }}>.</span>
                    </h1>
                    <p style={{ fontSize: 20, fontWeight: 500, maxWidth: 600, lineHeight: 1.5, marginBottom: 40 }}>
                        Certified technicians for BBQs, stoves, pool heaters, and fireplaces. Safety is our #1 priority.
                    </p>
                    <Link to="/contact" style={{
                        textDecoration: "none", background: "#ff7216", color: "#fff",
                        padding: "18px 40px", fontWeight: 700, fontSize: 18,
                        display: "inline-block",
                        border: '2px solid #ff7216'
                    }}>
                        BOOK INSPECTION
                    </Link>
                </div>
            </div>


            <div style={{ padding: "40px 20px", background: "#fff" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>

                    <div style={{
                        background: "#fff", padding: "0px",
                        marginBottom: 30
                    }}>
                        <div style={{ display: "flex", gap: 20, alignItems: "start" }}>
                            <div style={{ background: "#000", color: "#fff", padding: 12, borderRadius: 4 }}><CheckSquare size={32} color="#ff7216" /></div>
                            <div>
                                <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 10, color: '#ff7216' }}>Licensed & Insured</h3>
                                <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.6, maxWidth: 800 }}>
                                    Working with natural gas requires strict adherence to TSSA codes. Never attempt DIY gas work. Our licensed technicians ensure every connection is leak-free and fully certified.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" }}>
                        <div>
                            <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: 30 }}><span style={{ color: '#ff7216' }}>We</span> Connect Everything<span style={{ color: '#ff7216' }}>.</span></h2>
                            <div style={{ display: "grid", gap: 16 }}>
                                {["BBQ Gas Lines", "Gas Stoves & Ranges", "Pool Heaters", "Fireplaces", "Dryers"].map((item, i) => (
                                    <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px", background: "#f9fafb", borderRadius: 4, border: "1px solid #e5e7eb" }}>
                                        <span style={{ fontWeight: 600, color: '#ff7216' }}>{item}</span>
                                        <Flame size={20} color="#ff7216" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img
                                src={gasline}
                                alt="Professional Gas Technician"
                                style={{
                                    width: "100%", maxHeight: "400px", objectFit: "cover",
                                    boxShadow: "10px 10px 0 #facc15",
                                    borderRadius: 40
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Custom CTA: Contact */}
            <div style={{ padding: "60px 20px", background: "#111", color: "#fff", textAlign: "center" }}>
                <Link to="/contact" style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    textDecoration: "none", color: "#ff7216",
                    fontSize: 24, fontWeight: 900
                }}>
                    <Phone size={24} color="#ff7216" /> CALL FOR A QUOTE
                </Link>
            </div>
        </div>
    );
}

