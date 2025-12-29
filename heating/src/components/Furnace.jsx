import React from "react";
import { Flame, ShieldCheck, Zap, Thermometer, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import furanceimg from '../assets/furanceimg.png'

export default function Furnace() {
    return (
        <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>

            {/* Custom Hero: Light & Cozy Warmth */}
            <div style={{
                background: "linear-gradient(135deg, #fff7ed 0%, #fff 100%)",
                padding: "40px 20px 40px",
                position: "relative",
                overflow: "hidden"
            }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
                    <style>{`
                        @media (max-width: 968px) {
                            .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
                            .hero-text { margin: 0 auto; }
                            .hero-image { display: none; } /* Optional: hide big image on small mobile or stack it */
                        }
                    `}</style>

                    <div className="hero-text" style={{ maxWidth: 600, position: "relative", zIndex: 10 }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            background: "#fff", color: "#ff7216",
                            padding: "8px 20px", borderRadius: 50, fontSize: 13, fontWeight: 700,
                            marginBottom: 24, boxShadow: "0 4px 12px rgba(255, 114, 22, 0.15)",
                            border: "1px solid #ffedd5"
                        }}>
                            <Flame size={16} fill="#ff7216" /> PREMIUM HEATING
                        </div>
                        <h1 style={{
                            fontSize: "clamp(42px, 5vw, 72px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24,
                            letterSpacing: "-0.02em", color: "#1c1917"
                        }}>
                            Ultimate <br />
                            <span style={{
                                background: "linear-gradient(to right, #ff7216, #fb923c)",
                                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
                            }}>Home Comfort.</span>
                        </h1>
                        <p style={{ fontSize: 20, color: "#57534e", marginBottom: 32, lineHeight: 1.6 }}>
                            Don't let the cold in. Experience quiet, efficient, and reliable warmth with our top-tier furnace systems.
                        </p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
                            <Link to="/contact" style={{
                                textDecoration: "none", background: "#ff7216", color: "#fff",
                                padding: "18px 40px", borderRadius: 50, fontWeight: 700,
                                boxShadow: "0 10px 25px rgba(255, 114, 22, 0.25)",
                                display: "inline-flex", alignItems: "center", gap: 8,
                                transition: "transform 0.2s"
                            }}>
                                Get a Quote <ArrowRight size={20} />
                            </Link>
                            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <div style={{
                                    width: 48, height: 48, borderRadius: "50%", background: "#fff",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                                }}>
                                    <Phone size={20} color="#1c1917" />
                                </div>
                                <div style={{ textAlign: "left" }}>
                                    <div style={{ fontSize: 13, color: "#78716c", fontWeight: 600 }}>24/7 SUPPORT</div>
                                    <div style={{ fontSize: 16, color: "#1c1917", fontWeight: 700 }}>+1 (647) 984-7874</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ position: "relative" }}>
                        {/* Decorative Blob */}
                        <div style={{
                            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                            width: "120%", height: "120%",
                            background: "radial-gradient(circle, #fed7aa 0%, transparent 70%)",
                            opacity: 0.5, zIndex: 0
                        }}></div>

                        <img
                            src={furanceimg}
                            alt="Cozy Living Room with Fireplace"
                            style={{
                                width: "100%", maxHeight: "400px", objectFit: "contain", borderRadius: 40,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                                position: "relative", zIndex: 1,
                                transform: "rotate(2deg)"
                            }}
                        />
                        {/* Floating Badge */}
                        <div style={{
                            position: "absolute", bottom: 40, left: -20,
                            background: "#fff", padding: "20px", borderRadius: 20,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.1)", zIndex: 2,
                            display: "flex", alignItems: "center", gap: 12
                        }}>
                            <div style={{ backgroundColor: '#fff', padding: 10, borderRadius: "50%", color: "#65a30d" }}>
                                <ShieldCheck size={24} color="#ff7216" />
                            </div>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: 16, color: "#1c1917" }}>10-Year Warranty</div>
                                <div style={{ fontSize: 13, color: "#78716c" }}>On parts & labour</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Main Split Section */}
            <div style={{ padding: "40px 20px", background: "#fff" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" }}>

                    {/* Text Content */}
                    <div style={{ order: 2 }}>
                        <h2 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 24, color: '#ff7216' }}>
                            Is Your Furnace Ready?
                        </h2>
                        <p style={{ fontSize: 18, color: "#4b5563", lineHeight: 1.7, marginBottom: 30 }}>
                            A reliable furnace is the heart of a comfortable home. We install state-of-the-art systems that run quietly, heat evenly, and slash your energy bills. Don't let a breakdown leave you in the cold.
                        </p>

                        <div style={{ display: "grid", gap: 20 }}>
                            {[
                                { title: "Expert Installation", desc: "Sizing the right unit for your home's unique needs." },
                                { title: "24/7 Repairs", desc: "Fast response when you need it most." },
                                { title: "Maintenance", desc: "Annual tune-ups to extend system lifespan." }
                            ].map((item, i) => (
                                <div key={i} style={{ display: "flex", gap: 16 }}>
                                    <div style={{
                                        minWidth: 40, height: 40, borderRadius: 10, background: "#fff7ed",
                                        display: "flex", alignItems: "center", justifyContent: "center", color: "#ff7216"
                                    }}>
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}>{item.title}</h4>
                                        <p style={{ color: "#6b7280", fontSize: 15 }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div style={{ order: 1 }}>
                        <div style={{ position: "relative" }}>
                            <div style={{
                                position: "absolute", inset: 0, transform: "translate(20px, 20px)",
                                background: "#f3f4f6", borderRadius: 24, zIndex: 0
                            }}></div>
                            <img
                                src={furanceimg}
                                alt="Modern Furnace Installation"
                                style={{
                                    width: "100%", maxHeight: "400px", objectFit: "contain", borderRadius: 24, position: "relative", zIndex: 1,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Feature Grid */}
            <div style={{ padding: "40px 20px", background: "#f9fafb" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ fontSize: "32px", fontWeight: 800, marginBottom: 60, color: '#ff7216' }}>Why Upgrade?</h2>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 30 }}>
                        {[
                            { icon: <Zap size={32} />, title: "Energy Savings", desc: "High AFUE ratings mean less gas usage." },
                            { icon: <Thermometer size={32} />, title: "Better Comfort", desc: "Two-stage heating eliminates cold spots." },
                            { icon: <Flame size={32} />, title: "Quiet Operation", desc: "Insulated cabinets reduce operating noise." }
                        ].map((card, idx) => (
                            <div key={idx} style={{
                                padding: 40, borderRadius: 20, background: "#fff",
                                border: "1px solid #e5e7eb",
                                transition: "transform 0.3s",
                                textAlign: "left"
                            }}>
                                <div style={{
                                    background: "#fff7ed", width: 50, height: 50, borderRadius: 12,
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    color: "#ff7216", marginBottom: 20
                                }}>{card.icon}</div>
                                <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{card.title}</h3>
                                <p style={{ color: "#6b7280", lineHeight: 1.6 }}>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom CTA: Minimal White with Orange Border */}
            <div style={{ padding: "100px 20px", background: "#fff" }}>
                <div style={{
                    maxWidth: 1000, margin: "0 auto",
                    border: "2px solid #f3f4f6", borderRadius: 32, padding: "60px 20px",
                    textAlign: "center"
                }}>
                    <h2 style={{ fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, marginBottom: 20, color: '#ff7216' }}>
                        Keep your home warm this winter.
                    </h2>
                    <p style={{ fontSize: 18, color: "#6b7280", marginBottom: 40 }}>
                        Schedule your furnace maintenance or get a free quote for a new system.
                    </p>
                    <Link to="/contact" style={{
                        display: "inline-flex", alignItems: "center", gap: 10,
                        textDecoration: "none", color: "#ff7216", background: "#fff",
                        padding: "16px 40px", borderRadius: 50, fontWeight: 700, fontSize: 18,
                        border: "2px solid #ff7216", transition: "all 0.2s"
                    }}>
                        <Phone size={20} /> Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}