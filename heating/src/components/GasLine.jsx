import React from "react";
import { Flame, Clock, RefreshCw, ArrowRight, Calendar, Shield, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";



export default function GasLine() {
    return (
        <>
            <Helmet>
                <title>Professional Gas Line Installation Brampton | TSSA Certified</title>
                <meta name="description" content="Certified gas line installation for stoves, pool heaters, and fireplaces in Brampton. TSSA-compliant technicians for safe and reliable gas solutions." />
                <meta name="keywords" content="gas line installation Brampton, TSSA certified gas fitter, pool heater gas line,gas hookup, Patel Heating" />
            </Helmet>
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
                                src='https://res.cloudinary.com/dtjcelk8d/image/upload/v1769538467/gasline_edcghj.png'
                                alt="Gas Line Professional Installation"
                                style={{
                                    width: "100%", maxHeight: "400px", borderRadius: "30px 30px 0 30px",
                                    boxShadow: "0 30px 60px -20px rgba(234, 88, 12, 0.25)",
                                    zIndex: 1, position: "relative",
                                    objectFit: "contain"
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

                {/* Secondary Section */}
                <div style={{ padding: "100px 20px", background: "#fffaf5" }}>
                    <div style={{
                        maxWidth: 1200, margin: "0 auto",
                        background: "#fff",
                        borderRadius: 32, overflow: "hidden",
                        boxShadow: "0 30px 70px rgba(67, 20, 7, 0.08)",
                        border: '1px solid #ff7216',
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                        minHeight: "70vh"
                    }}>
                        {/* Content Side */}
                        <div style={{ padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div style={{ color: "#ff7216", fontWeight: 700, letterSpacing: 2, marginBottom: 16, fontSize: 14, textTransform: "uppercase" }}>
                                Professional Gas Services
                            </div>
                            <h2 style={{ fontSize: "clamp(32px, 5vw, 42px)", fontWeight: 900, marginBottom: 32, lineHeight: 1.1, color: "#431407" }}>
                                Our Gas Line <br /> Services
                            </h2>
                            <p style={{ fontSize: 18, color: "#44403c", lineHeight: 1.7, marginBottom: 40, maxWidth: 500 }}>
                                Planning a home renovation or adding a new gas appliance? We offer custom gas line installations for both residences.
                            </p>

                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 24 }}>
                                {[
                                    { title: "New Gas Line Installation", desc: "Expert assessment, safe routing, and code-approved materials for your home appliances." },
                                    { title: "Gas Line Repair & Leak Detection", desc: "Safety-first leak detection and rapid repairs using advanced sensor technology." },
                                    { title: "Maintenance & Inspection", desc: "Annual checks including pressure testing and safety compliance certification." }
                                ].map((item, i) => (
                                    <li key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                                        <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255, 114, 22, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                            <Flame size={22} color="#ff7216" />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: 18, fontWeight: 700, color: "#431407", marginBottom: 6 }}>{item.title}</h4>
                                            <p style={{ color: "#64748b", margin: 0, fontSize: 15 }}>{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Image Side */}
                        <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #f1f5f9" }}>
                            <div style={{ flex: 1, position: "relative", minHeight: "50vh", maxHeight: "50vh", overflow: "hidden", background: "#f8fafc" }}>
                                <img
                                    src='https://res.cloudinary.com/dtjcelk8d/image/upload/v1769538467/gasline_edcghj.png'
                                    alt="Gas Line Installation"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "block",
                                        objectFit: "contain"
                                    }}
                                />
                                <div style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: "40px",
                                    background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)",
                                    color: "#ff7216"
                                }}>
                                    <h4 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12, color: "#ff7216" }}>Safety First</h4>
                                    <p style={{ opacity: 0.9, color: "#ff7216", fontWeight: 600, fontSize: 16 }}>Leak-free connections built for long-term safety.</p>
                                </div>
                            </div>

                            {/* Info Footer */}
                            <div style={{ padding: "40px 60px", background: "#fff", borderTop: "1px solid #f1f5f9", display: "flex", flexDirection: "column", gap: 20 }}>
                                <div>
                                    <span style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700, color: "#94a3b8" }}>Our Promise</span>
                                    <h3 style={{ fontSize: 24, fontWeight: 800, color: "#ff7216", margin: "8px 0 0" }}>TSSA Certified Work</h3>
                                </div>
                                <div style={{
                                    display: "inline-flex", alignItems: "center", gap: 12, padding: "12px 24px",
                                    background: "#f8fafc", borderRadius: 100, border: "1px solid #e2e8f0"
                                }}>
                                    <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }}></div>
                                    <span style={{ fontSize: 15, fontWeight: 700, color: "#475569" }}>Code Compliant Installation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Sections */}
                <div style={{ padding: "0 20px 100px", background: "#fff" }}>
                    <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>

                        {/* Installation */}
                        <div style={{ padding: 40, background: "#f8fafc", borderRadius: 24, border: "1px solid #e2e8f0" }}>
                            <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: "#431407" }}>Professional Installation</h3>
                            <p style={{ color: "#64748b", lineHeight: 1.6, marginBottom: 24 }}>Our experts will assess your property's gas requirements and design the safest, most efficient route using code-approved materials.</p>
                            <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 12 }}>
                                {["Property Assessment", "Safe Route Design", "Code-Approved Materials", "Leak & Safety Testing"].map((item, i) => (
                                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, color: "#44403c" }}>
                                        <div style={{ color: "#ff7216" }}><Shield size={16} /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Emergency / Repair */}
                        <div style={{ padding: 40, background: "#fef2f2", borderRadius: 24, border: "1px solid #fee2e2" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                                <AlertTriangle color="#dc2626" size={24} />
                                <h3 style={{ fontSize: 24, fontWeight: 800, color: "#991b1b", margin: 0 }}>Emergency & Repair</h3>
                            </div>
                            <p style={{ color: "#991b1b", fontWeight: 700, marginBottom: 16 }}>If you suspect a gas leak—don't wait. Evacuate the area and call your utility provider or 911 immediately.</p>
                            <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: "#431407" }}>Common Warning Signs:</h4>
                            <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
                                {["Sulfur / Rotten Egg Smell", "Hissing Near Gas Lines", "Sharp Rise in Gas Bills", "Dead Outdoor Plants", "Unexplained Nausea"].map((item, i) => (
                                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, color: "#44403c", fontSize: 14 }}>
                                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#dc2626" }}></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Maintenance */}
                        <div style={{ padding: 40, background: "#f8fafc", borderRadius: 24, border: "1px solid #e2e8f0" }}>
                            <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20, color: "#431407" }}>Maintenance & Inspection</h3>
                            <p style={{ color: "#64748b", lineHeight: 1.6, marginBottom: 24 }}>An annual professional gas line check ensures your home's safety and energy efficiency. Prevent leaks before they start.</p>
                            <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 12 }}>
                                {["Pressure Testing", "Leak Inspection", "Valve & Fitting Checks", "Compliance Certification"].map((item, i) => (
                                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, color: "#44403c" }}>
                                        <div style={{ color: "#ff7216" }}><RefreshCw size={16} /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

                {/* CTA */}
                <div style={{ padding: "60px 20px", background: "#f8fafc", textAlign: "center" }}>
                    <div style={{ maxWidth: 800, margin: "0 auto", padding: "60px 20px", background: "#fff", borderRadius: 32, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}>
                        <h2 style={{ fontSize: "36px", fontWeight: 800, marginBottom: 24, color: '#ff7216' }}>Don't take chances with gas.</h2>
                        <p style={{ fontSize: 18, color: "#64748b", marginBottom: 40 }}>Schedule a professional gas line inspection or installation today with our TSSA licensed experts.</p>
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
