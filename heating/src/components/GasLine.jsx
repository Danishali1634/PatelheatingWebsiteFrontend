import React from "react";
import { Flame, Clock, RefreshCw, ArrowRight, Calendar, Shield, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import gasline from '../assets/gasline.jpg'


export default function GasLine() {
    return (
        <>
            <title>Gas Line Services - Patel Heating & Air Conditioning</title>
            <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

                {/* Custom Hero: Split Solid Color */}
                <div style={{
                    position: "relative", paddingTop: 40, paddingBottom: 60, overflow: "hidden",
                    background: "linear-gradient(to bottom, #fff7ed, #fff)"
                }}>
                    <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #ffedd5 0%, transparent 70%)", opacity: 0.5 }}></div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 100, background: "linear-gradient(to top, #fff, transparent)", zIndex: 2 }}></div>

                    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 1 }} className="gasline-hero-grid">
                        <style>{`
                            @media (max-width: 968px) {
                                .gasline-hero-grid { grid-template-columns: 1fr !important; text-align: center; }
                                .gasline-hero-img { order: -1; margin-bottom: 20px; }
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
                                <Flame size={16} fill="#ff7216" color="#ff7216" /> LICENSED EXPERTS
                            </div>
                            <h1 style={{
                                fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24,
                                letterSpacing: "-0.03em", color: "#431407"
                            }}>
                                Safe <span style={{ color: "#ff7216" }}> Gas Line </span><br />
                                <span style={{ color: "#ff7216" }}>Solutions.</span>
                            </h1>
                            <p style={{ fontSize: 20, color: "#64748b", marginBottom: 40, lineHeight: 1.6, maxWidth: 550 }}>
                                Certified technicians for BBQs, stoves, pool heaters, and fireplaces. Safety is our #1 priority.
                            </p>
                            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                                <Link to="/contact" style={{
                                    textDecoration: "none", background: "#ff7216", color: "#fff",
                                    padding: "18px 40px", borderRadius: 50, fontWeight: 700,
                                    boxShadow: "0 10px 25px rgba(234, 88, 12, 0.3)",
                                    display: "inline-flex", alignItems: "center", gap: 10,
                                    transition: "all 0.2s",
                                }}>
                                    Book Inspection <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>

                        <div className="gasline-hero-img" style={{ position: "relative" }}>
                            <img
                                src={gasline}
                                alt="Gas Line Professional Installation"
                                style={{
                                    width: "100%", maxHeight: "400px", objectFit: "contain", borderRadius: "30px 30px 0 30px",
                                    boxShadow: "0 30px 60px -20px rgba(234, 88, 12, 0.25)",
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
                                    <div style={{ color: "#ff7216" }}><Shield size={20} /></div>
                                    <div style={{ fontWeight: 700, fontSize: 14, color: "#1e293b" }}>TSSA Certified</div>
                                </div>
                                <p style={{ fontSize: 13, color: "#64748b", margin: 0, lineHeight: 1.4 }}>
                                    Fully compliant with all safety codes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Immersive Layout */}
                <div style={{ padding: "60px 20px", background: "#fffaf5" }}>
                    <div style={{
                        maxWidth: 1200, margin: "0 auto",
                        background: "#fff",
                        borderRadius: 32, overflow: "hidden",
                        boxShadow: "0 20px 60px rgba(234, 88, 12, 0.1)",
                        border: '1px solid #ff7216',
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                    }}>

                        {/* Content Side */}
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {/* Text Content Header */}
                            <div style={{ padding: "60px 40px 40px", textAlign: "left" }}>
                                <div style={{ color: "black", fontWeight: 700, letterSpacing: 1.2, marginBottom: 16, fontSize: 13, textTransform: "uppercase" }}>
                                    Gas Line Installation & Repair
                                </div>
                                <h2 style={{ fontSize: "clamp(30px, 4vw, 36px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.2, color: "#ff7216" }}>
                                    Installation • Repair • Leak Detection
                                </h2>
                                <p style={{ fontSize: 18, color: "#64748b", lineHeight: 1.7, maxWidth: 800 }}>
                                    Whether you’re installing a new gas appliance, upgrading your system, or dealing with a gas smell, you need certified professionals you can trust.
                                </p>
                            </div>

                            {/* Content Grid */}
                            <div style={{
                                display: "grid",
                                gap: "40px",
                                padding: "0 40px 60px"
                            }}>
                                {/* Services */}
                                <div>
                                    <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#ff7216", display: "flex", alignItems: "center", gap: 10 }}>
                                        <span style={{ width: 8, height: 8, background: "#ff7216", borderRadius: "50%" }}></span>
                                        Our Professional Services
                                    </h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
                                        {[
                                            "New gas line fitting for all appliances",
                                            "BBQ, stove, and fireplace connections",
                                            "Gas leak detection and emergency repair",
                                            "Safety inspections and pressure testing"
                                        ].map((item, i) => (
                                            <li key={i} style={{ color: "#64748b", fontSize: 16, display: "flex", alignItems: "flex-start", gap: 10 }}>
                                                <span style={{ color: "#ff7216", fontWeight: "bold" }}>•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Warning Signs */}
                                <div style={{ background: "#fff5f5", padding: "24px", borderRadius: "16px", border: "1px solid #feb2b2" }}>
                                    <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, color: "#e53e3e", display: "flex", alignItems: "center", gap: 10 }}>
                                        <AlertTriangle size={20} /> Warning Signs of a Leak
                                    </h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 8 }}>
                                        {[
                                            "Rotten egg or sulfur smell",
                                            "Hissing sounds near gas lines",
                                            "Sudden increase in gas bills",
                                            "Dead plants near outdoor lines"
                                        ].map((item, i) => (
                                            <li key={i} style={{ color: "#c53030", fontSize: 15 }}>• {item}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Why Choose Us */}
                                <div>
                                    <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, color: "#ff7216", display: "flex", alignItems: "center", gap: 10 }}>
                                        <span style={{ width: 8, height: 8, background: "#6366f1", borderRadius: "50%" }}></span>
                                        Why Choose Patel Heating?
                                    </h4>
                                    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
                                        {[
                                            "Fully licensed & TSSA certified technicians",
                                            "24/7 emergency response for gas leaks",
                                            "Transparent pricing with zero hidden fees",
                                            "Strict adherence to all safety codes"
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
                        <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid rgba(234, 88, 12, 0.1)" }}>
                            <div style={{ flex: 1, position: "relative", minHeight: 400 }}>
                                <img
                                    src={gasline}
                                    alt="Gas Line Installation Work"
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
                                    background: "linear-gradient(to top, rgba(67, 20, 7, 0.8), transparent)",
                                    color: "#fff"
                                }}>
                                    <h4 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>Safety First</h4>
                                    <p style={{ opacity: 0.9 }}>Ensuring every connection is leak-free and built to last.</p>
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
                                    <span style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 1, fontWeight: 700, color: "#ff7216" }}>Our Promise</span>
                                    <h3 style={{ fontSize: 22, fontWeight: 800, color: "#ff7216", margin: "5px 0 0" }}>Code Compliant</h3>
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
                                    Licensed Service
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* CTA */}
                <div style={{ padding: "60px 20px", background: "#fff", textAlign: "center" }}>
                    <div style={{ maxWidth: 800, margin: "0 auto" }}>
                        <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: 24, color: '#ff7216' }}>Don't take chances with gas.</h2>
                        <p style={{ fontSize: 18, color: "#64748b", marginBottom: 40 }}>Schedule a professional gas line inspection or installation today.</p>
                        <Link to="/contact" style={{
                            display: "inline-flex", alignItems: "center", gap: 12,
                            textDecoration: "none", background: "#ff7216", color: "#fff",
                            padding: "18px 40px", borderRadius: 100, fontWeight: 700, fontSize: 18,
                            boxShadow: "0 10px 30px rgba(234, 88, 12, 0.4)"
                        }}>
                            <Calendar size={20} /> Book Safety Check
                        </Link>
                    </div>
                </div>

            </div>
        </>
    );
}
