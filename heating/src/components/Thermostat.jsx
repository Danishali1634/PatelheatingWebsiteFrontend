import React from "react";
import { Smartphone, PieChart, Wifi, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import thermostast from '../assets/thermostast.png'

export default function Thermostat() {
    return (
        <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

            {/* Custom Hero: Smart Control */}
            <div style={{ background: "#0f172a", color: "#fff", paddingTop: 40, paddingBottom: 40, position: "relative", overflow: "hidden" }}>

                {/* Background Gradients */}
                <div style={{ position: "absolute", top: -200, left: "50%", transform: "translateX(-50%)", width: "100%", height: 800, background: "radial-gradient(ellipse at top, #1e293b 0%, #0f172a 70%)", zIndex: 0 }}></div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 200, background: "linear-gradient(to top, #0f172a, transparent)", zIndex: 1 }}></div>

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 2 }} className="thermostat-hero-grid">
                    <style>{`
                        @media (max-width: 968px) {
                            .thermostat-hero-grid { grid-template-columns: 1fr !important; text-align: center; }
                            .thermostat-hero-images { justify-content: center; }
                        }
                    `}</style>

                    <div>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            background: "rgba(99, 102, 241, 0.1)", color: "#818cf8",
                            padding: "8px 20px", borderRadius: 50, fontSize: 13, fontWeight: 700,
                            marginBottom: 24, border: "1px solid rgba(99, 102, 241, 0.2)",
                            borderColor: '#ff7216',
                            color: '#fff'
                        }}>
                            <Wifi size={16} color="#ff7216" /> SMART HOME READY
                        </div>
                        <h1 style={{ fontSize: "clamp(46px, 5vw, 76px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-0.02em", color: '#ff7216' }}>
                            Control Comfort.<br />
                            <span style={{
                                color: '#fff'
                            }}>
                                From Anywhere.
                            </span>
                        </h1>
                        <p style={{ fontSize: 20, color: "#94a3b8", marginBottom: 40, lineHeight: 1.6, maxWidth: 550 }}>
                            Adjust your home's temperature from your phone, tablet, or voice assistant. Save energy without sacrificing comfort.
                        </p>
                        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "flex-start" }} className="hero-buttons">
                            <Link to="/contact" style={{
                                textDecoration: "none", background: "#ff7216", color: "#fff",
                                padding: "18px 40px", borderRadius: 12, fontWeight: 700,
                                boxShadow: "0 10px 30px rgba(99, 102, 241, 0.3)",
                                display: "inline-flex", alignItems: "center", gap: 10,
                                transition: "transform 0.2s"
                            }}>
                                Install Now <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="thermostat-hero-images" style={{ display: "flex", justifyContent: "flex-end", position: "relative" }}>
                        {/* Phone Mockup (Abstract representation) */}
                        <div style={{
                            width: 250, height: 400, background: "#1e293b", borderRadius: 40,
                            border: "8px solid #334155", overflow: "hidden",
                            boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5)",
                            position: "relative", transform: "rotate(-5deg) translateY(20px)", zIndex: 1
                        }}>
                            <div style={{ padding: 20, textAlign: "center", paddingTop: 60 }}>
                                <div style={{ fontSize: 64, fontWeight: 200, color: "#fff" }}>72°</div>
                                <div style={{ color: "#94a3b8", marginTop: 10 }}>Living Room</div>
                                <div style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 20 }}>
                                    <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#334155", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b" }}>-</div>
                                    <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#ff7216", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(255,114,22,0.4)" }}>+</div>
                                </div>
                            </div>
                        </div>

                        {/* Thermostat Device (Floating) */}
                        <div style={{
                            position: "absolute", bottom: 80, left: -40,
                            width: 220, height: 220, borderRadius: "50%", background: "#000",
                            border: "6px solid #334155",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            zIndex: 2
                        }}>
                            <div style={{ textAlign: "center" }}>
                                <span style={{ fontSize: 52, fontWeight: 700, color: "#fff", display: "block" }}>72</span>
                                <span style={{ fontSize: 13, color: "#10b981", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Eco Mode</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div style={{ padding: "40px 20px", background: "#111827", color: "#fff", borderTop: "1px solid #1e293b" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>

                    <div style={{
                        position: "relative", marginBottom: 80,
                        display: "flex", justifyContent: "center"
                    }}>
                        <div style={{
                            width: 300, height: 300, background: "radial-gradient(circle, #ff7216 0%, transparent 70%)",
                            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: 0.2, filter: "blur(40px)"
                        }}></div>
                        <img
                            src={thermostast}
                            alt="Smart Thermostat Interface"
                            style={{
                                width: "100%", maxWidth: 600, borderRadius: 20, maxHeight: '600px',
                                // border: "8px solid #374151", boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                                position: "relative", zIndex: 1
                            }}
                        />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 30 }}>
                        <div style={{ padding: 30, background: "#1f2937", borderRadius: 20, textAlign: "left" }}>
                            <Smartphone size={32} color="#ff7216" style={{ marginBottom: 20 }} />
                            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Remote Access</h3>
                            <p style={{ color: "#94a3b8" }}>Adjust temperature from your phone, whether you're in bed or on vacation.</p>
                        </div>
                        <div style={{ padding: 30, background: "#1f2937", borderRadius: 20, textAlign: "left" }}>
                            <PieChart size={32} color="#ff7216" style={{ marginBottom: 20 }} />
                            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Usage Reports</h3>
                            <p style={{ color: "#94a3b8" }}>Track your energy consumption and find new ways to save.</p>
                        </div>
                        <div style={{ padding: 30, background: "#1f2937", borderRadius: 20, textAlign: "left" }}>
                            <Wifi size={32} color="#ff7216" style={{ marginBottom: 20 }} />
                            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Smart Integration</h3>
                            <p style={{ color: "#94a3b8" }}>Works seamlessly with Alexa, Google Home, and Apple HomeKit.</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Custom CTA: Dark & Techy */}
            <div style={{ padding: "80px 20px", background: "#0f172a", borderTop: "1px solid #1e293b", textAlign: "center" }}>
                <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#fff", marginBottom: 20 }}><span style={{ color: "#ff7216" }}>Get</span> Smart. Save Money.</h2>
                <Link to="/contact" style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    textDecoration: "none", color: "#ff7216",
                    fontSize: 18, fontWeight: 700,
                    borderBottom: "2px solid #818cf8", paddingBottom: 4
                }}>
                    Order your installation <ArrowRight size={18} />
                </Link>
            </div>
        </div>
    );
}
