import React from "react";
import { ServicesHeroSection } from "./ServicesHeroSection";
import { CtaSection } from "./CtaSection";
import { Droplets, Shield, Smile, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import humidifier from '../assets/humidifier.png'

export default function Humidifier() {
    return (
        <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

            {/* Custom Hero: Soft & Cloudy */}
            <div style={{
                background: "linear-gradient(to bottom, #fff, #f0f9ff)", padding: "20px 20px 40px",
                textAlign: "center"
            }}>
                <div style={{ maxWidth: 800, margin: "0 auto" }}>
                    <div style={{
                        width: 80, height: 80, background: "#e0f2fe", borderRadius: "50%", margin: "0 auto 30px",
                        display: "flex", alignItems: "center", justifyContent: "center", color: "#ff7216"
                    }}>
                        <Droplets size={40} color="#ff7216" />
                    </div>
                    <h1 style={{ fontSize: "clamp(42px, 5vw, 68px)", fontWeight: 800, marginBottom: 20, color: "#ff7216" }}>
                        Breathe Easier.
                    </h1>
                    <p style={{ fontSize: 20, color: "#64748b", marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" }}>
                        Whole-home humidifiers designed to protect your health and wood furniture from dry winter air.
                    </p>
                </div>
            </div>

            <div style={{ padding: "40px 20px", background: "#f0f9ff" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" }}>

                    <div>
                        <h2 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, marginBottom: 24, color: "#ff7216" }}>
                            Why Humidity Matters
                        </h2>
                        <p style={{ fontSize: 18, color: "#4b5563", lineHeight: 1.7, marginBottom: 30 }}>
                            Dry winter air causes dry skin, static shocks, and can even damage wood flooring. A whole-home humidifier works with your furnace to deliver the perfect amount of moisture to every room automatically.
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                            <div style={{ background: "#fff", padding: 24, borderRadius: 16, boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
                                <Shield color="#ff7216" size={32} style={{ marginBottom: 12 }} />
                                <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Protect Wood</h4>
                                <p style={{ fontSize: 13, color: "#6b7280" }}>Prevents hardwood from cracking.</p>
                            </div>
                            <div style={{ background: "#fff", padding: 24, borderRadius: 16, boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
                                <Smile color="#ff7216" size={32} style={{ marginBottom: 12 }} />
                                <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Healthier Skin</h4>
                                <p style={{ fontSize: 13, color: "#6b7280" }}>Relieves itchiness and dry throat.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div style={{ position: "relative", padding: 20 }}>
                            <div style={{
                                position: "absolute", top: 0, right: 0, width: 200, height: 200,
                                background: "radial-gradient(circle, #e0f2fe 0%, transparent 70%)", borderRadius: "50%", zIndex: 0
                            }}></div>
                            <img
                                src={humidifier}
                                alt="Modern Living Room with Healthy Air"
                                style={{
                                    width: "100%", borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                                    boxShadow: "0 20px 40px rgba(14, 165, 233, 0.15)", position: "relative", zIndex: 1, objectFit: "contain", height: 400
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Custom CTA */}
            <div style={{ padding: "40px 20px", background: "#fff", textAlign: "center" }}>
                <Link to="/contact" style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    textDecoration: "none", background: "#f0f9ff", color: "gray",
                    padding: "16px 40px", borderRadius: 50, fontWeight: 700, fontSize: 18,
                    border: "2px solid #ff7216", transition: "all 0.2s"
                }}>
                    Improve Your Air Quality <ArrowRight size={20} color="#ff7216" />
                </Link>
            </div>
        </div>
    );
}
