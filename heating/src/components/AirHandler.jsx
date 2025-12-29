import React from "react";
import { Wind, Activity, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import airhandler from '../assets/airhandler.png'

export default function AirHandler() {
    return (
        <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

            {/* Custom Hero: Industrial Tech */}
            <div style={{ padding: "40px 20px 20px", background: "#f8fafc", textAlign: "left", borderBottom: "1px solid #e2e8f0" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
                    <div style={{ maxWidth: 600 }}>
                        <h1 style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 900, lineHeight: 1, marginBottom: 24, letterSpacing: "-0.03em", color: "#ff7216" }}>
                            POWERFUL AIRFLOW.
                        </h1>
                        <p style={{ fontSize: 20, color: "#64748b", fontWeight: 500, maxWidth: 500 }}>
                            The heart of your HVAC system. Optimize circulation and efficiency with a premium air handler.
                        </p>
                    </div>
                    <Link to="/contact" style={{
                        textDecoration: "none", color: "gray",
                        border: '2px solid #ff7216',
                        padding: "16px 36px", borderRadius: 4, fontWeight: 600,
                        display: "flex", alignItems: "center", gap: 10, letterSpacing: 0.5
                    }}>
                        GET AN ESTIMATE <ArrowRight size={18} color="#ff7216" />
                    </Link>
                </div>
            </div>

            {/* Tall Image Layout */}
            <div style={{ padding: "40px 20px", background: "#fff" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="responsive-grid">
                    <style>{`
                        @media (max-width: 768px) {
                            .responsive-grid { grid-template-columns: 1fr !important; }
                        }
                    `}</style>

                    {/* Big Image Section (approx 500px height as requested) */}
                    <div>
                        <img
                            src={airhandler}
                            alt="Large Air Handler System"
                            style={{
                                width: "100%", height: "400px", objectFit: "contain",
                                borderRadius: 4, boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                                filter: "grayscale(10%)"
                            }}
                        />
                    </div>

                    <div>
                        {/* <div style={{ color: "#334155", fontWeight: 700, fontSize: 14, letterSpacing: 2, marginBottom: 16, }}>MAXIMUM PERFORMANCE</div> */}
                        <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24, color: '#ff7216' }}>
                            What is an Air Handler?
                        </h2>
                        <p style={{ fontSize: 18, color: "#4b5563", lineHeight: 1.8, marginBottom: 30 }}>
                            An air handler contains the indoor coil and blower fan. It works in sync with your heat pump or AC to move conditioned air through your ducts. A better air handler means quieter operation and more consistent temperatures in every room.
                        </p>

                        <div style={{ background: "#f1f5f9", padding: 30, borderRadius: 8, borderLeft: "4px solid #334155", marginBottom: 30 }}>
                            <h4 style={{ fontWeight: 700, fontSize: 18, marginBottom: 10, color: '#ff7216' }}>Why Upgrade?</h4>
                            <p style={{ color: "#64748b" }}>Old blowers use inefficient motors. New variable-speed models adjust airflow precisely, eliminating blasts of cold air and saving electricity.</p>
                        </div>

                        <ul style={{ display: "grid", gap: 16 }}>
                            {["Variable Speed Motor", "Aluminium Coils", "Silent Operation"].map((item, i) => (
                                <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 17, fontWeight: 600 }}>
                                    <CheckCircle size={20} color="#ff7216" /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* Custom CTA: Simple Center */}
            <div style={{ padding: "60px 20px", background: "#f8fafc", textAlign: "center" }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: 20, color: '#ff7216' }}>Optimize Your Airflow Today.</h2>
                    <Link to="/contact" style={{
                        textDecoration: "none", color: "#334155",
                        fontSize: 18, fontWeight: 700, borderBottom: "2px solid #334155",
                        paddingBottom: 2
                    }}>
                        Contact us specifically for Air Handler service
                    </Link>
                </div>
            </div>
        </div>
    );
}
