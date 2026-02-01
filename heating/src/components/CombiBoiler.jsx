import React from "react";
import { CheckCircle, Zap, ShieldCheck, ArrowRight, Calendar, Droplets } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";



export default function CombiBoiler() {
    return (
        <div style={{ fontFamily: "Inter, sans-serif", color: "#0d0d0d" }}>
            <Helmet>
                <title>High-Efficiency Combi Boiler Systems Brampton | Patel Heating</title>
                <meta name="description" content="Save space and energy with a combination boiler system. Whole-home heating and on-demand hot water in one compact unit. Licensed boiler installation in Brampton." />
                <meta name="keywords" content="combi boiler Brampton, combination boiler installation, hydronic heating, space saving boiler, Patel Heating boilers" />
            </Helmet>

            {/* Custom Hero Section */}
            <div style={{
                position: "relative",
                paddingTop: 80,
                paddingBottom: 80,
                overflow: "hidden",
                background: "linear-gradient(to bottom, #fff7ed, #fff)"
            }}>
                <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #fed7aa 0%, transparent 70%)", opacity: 0.5 }}></div>

                <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center", position: "relative", zIndex: 1 }} className="combi-hero-grid">
                    <style>{`
                        @media (max-width: 968px) {
                            .combi-hero-grid { grid-template-columns: 1fr !important; text-align: center; gap: 40px !important; }
                            .combi-hero-img { order: -1; margin-bottom: 20px; }
                        }
                    `}</style>
                    <div>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            color: "#ff7216",
                            background: "rgba(255, 114, 22, 0.1)",
                            padding: "8px 20px", borderRadius: 50, fontSize: 13, fontWeight: 700,
                            marginBottom: 24,
                            textTransform: "uppercase",
                            letterSpacing: "1px"
                        }}>
                            <Zap size={16} fill="#ff7216" /> Advanced Heating Solutions
                        </div>
                        <h1 style={{
                            fontSize: "clamp(48px, 6vw, 76px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24,
                            letterSpacing: "-0.02em", color: "#451a03"
                        }}>
                            Combie <span style={{ color: "#ff7216" }}> Boiler </span> System
                        </h1>
                        <p style={{ fontSize: "clamp(20px, 2.8vw, 24px)", color: "#44403c", marginBottom: 32, lineHeight: 1.6, maxWidth: 650 }}>
                            This system is perfect for a small house. It is an energy saver unit. This system works for warm air and this Combination Boiler system offers hydronic space heating in addition to hot water.
                        </p>
                        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
                            <style>{`
                                @media (min-width: 969px) {
                                    .combi-hero-grid > div:first-child { display: flex; flex-direction: column; align-items: flex-start; }
                                    .combi-hero-grid > div:first-child .btn-group { justify-content: flex-start !important; }
                                }
                             `}</style>
                            <div className="btn-group" style={{ display: "flex", gap: 16, flexWrap: "wrap", width: "100%", justifyContent: "center" }}>
                                <Link to="/contact" style={{
                                    textDecoration: "none", background: "#ff7216", color: "#fff",
                                    padding: "16px 36px", borderRadius: 50, fontWeight: 700,
                                    boxShadow: "0 10px 25px rgba(251, 146, 60, 0.3)",
                                    display: "inline-flex", alignItems: "center", gap: 10,
                                    transition: "all 0.2s",
                                }}>
                                    Get a Free Quote <ArrowRight size={20} />
                                </Link>
                                <a href="tel:+16479847874" style={{
                                    textDecoration: "none", background: "transparent", color: "#ff7216",
                                    padding: "16px 36px", borderRadius: 50, fontWeight: 700,
                                    border: "2px solid #ff7216",
                                    display: "inline-flex", alignItems: "center", gap: 10,
                                    transition: "all 0.2s",
                                }}>
                                    Call Us <Calendar size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="combi-hero-img" style={{ position: "relative" }}>
                        <img
                            src='https://res.cloudinary.com/dtjcelk8d/image/upload/v1769538470/newCombie_dxoii3.png'
                            alt="Combie Boiler System unit"
                            style={{
                                width: "100%", maxHeight: "500px", borderRadius: "24px",
                                boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.25)",
                                zIndex: 1, position: "relative",
                                objectFit: "contain"
                            }}
                        />
                        <div style={{
                            position: "absolute", bottom: -20, right: -10,
                            background: "rgba(255, 255, 255, 0.95)", backdropFilter: "blur(10px)",
                            padding: "20px", borderRadius: "20px",
                            boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                            zIndex: 2, display: "flex", alignItems: "center", gap: 12
                        }}>
                            <div style={{ background: "#ff7216", padding: 8, borderRadius: "50%", color: "#fff" }}>
                                <CheckCircle size={20} />
                            </div>
                            <div style={{ fontWeight: 700, fontSize: 14 }}>95% AFUE Efficiency</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Secondary Section */}
            <div style={{ padding: "100px 20px", background: "#fff7ed" }}>
                <div style={{
                    maxWidth: 1200, margin: "0 auto",
                    background: "#fff",
                    borderRadius: 32, overflow: "hidden",
                    boxShadow: "0 30px 70px rgba(69, 26, 3, 0.08)",
                    border: '1px solid #ff7216',
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                    minHeight: "70vh"
                }}>
                    {/* Content Side */}
                    <div style={{ padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ color: "#ff7216", fontWeight: 700, letterSpacing: 2, marginBottom: 16, fontSize: 14, textTransform: "uppercase" }}>
                            Ultimate System Efficiency
                        </div>
                        <h2 style={{ fontSize: "clamp(32px, 5vw, 42px)", fontWeight: 900, marginBottom: 32, lineHeight: 1.1, color: "#451a03" }}>
                            Energy Efficiency <br /> & Pure Comfort
                        </h2>
                        <p style={{ fontSize: 18, color: "#44403c", lineHeight: 1.7, marginBottom: 40, maxWidth: 500 }}>
                            Home heating and a small draw on DHW system. Priority system temperature controlled by zones with 10-1 Modulation.
                        </p>

                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 16 }}>
                            {[
                                { title: "Single stainless steel burner", desc: "Condensing burner efficiency for maximum heat transfer." },
                                { title: "ECM motor savings", desc: "Significant electricity savings with advanced motor technology." },
                                { title: "Zone control", desc: "Priority system temperature controlled precisely by zones." },
                                { title: "10-1 Modulation", desc: "Wide modulation range for perfectly balanced heating demand." }
                            ].map((item, i) => (
                                <li key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255, 114, 22, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <Zap size={18} color="#ff7216" />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: 16, fontWeight: 700, color: "#451a03", marginBottom: 4 }}>{item.title}</h4>
                                        <p style={{ color: "#64748b", margin: 0, fontSize: 14 }}>{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Side */}
                    <div style={{ display: "flex", flexDirection: "column", borderLeft: "1px solid #f1f5f9" }}>
                        <div style={{ flex: 1, position: "relative", minHeight: "50vh", maxHeight: "50vh", overflow: "hidden", background: "#f8fafc" }}>
                            <img
                                src='https://res.cloudinary.com/dtjcelk8d/image/upload/v1769538470/newCombie_dxoii3.png'
                                alt="Professional Combie Boiler Installation"
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
                                <h4 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12, color: "#ff7216" }}>Unmatched Control</h4>
                                <p style={{ opacity: 0.9, color: "#ff7216", fontWeight: 600, fontSize: 16 }}>Simplify your home's HVAC with one powerful unit.</p>
                            </div>
                        </div>

                        {/* Info Footer */}
                        <div style={{ padding: "40px 60px", background: "#fff", borderTop: "1px solid #f1f5f9", display: "flex", flexDirection: "column", gap: 20 }}>
                            <div>
                                <span style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700, color: "#94a3b8" }}>Featured System</span>
                                <h3 style={{ fontSize: 24, fontWeight: 800, color: "#ff7216", margin: "8px 0 0" }}>Glow Brand™ Combie</h3>
                            </div>
                            <div style={{
                                display: "inline-flex", alignItems: "center", gap: 12, padding: "12px 24px",
                                background: "#f8fafc", borderRadius: 100, border: "1px solid #e2e8f0"
                            }}>
                                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }}></div>
                                <span style={{ fontSize: 15, fontWeight: 700, color: "#475569" }}>TSSA Licensed Installation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Flexibility Section */}
            <div style={{ padding: "80px 20px", background: "#fff" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: 60 }}>
                        <div style={{ color: "#ff7216", fontWeight: 700, letterSpacing: 2, marginBottom: 16, fontSize: 14, textTransform: "uppercase" }}>
                            Ultimate Flexibility
                        </div>
                        <h2 style={{ fontSize: "clamp(32px, 5vw, 42px)", fontWeight: 900, color: "#451a03" }}>Versatile System Configurations</h2>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 30 }}>
                        {[
                            { title: "Multiple Configurations", desc: "Supports various applications and specialized setups for any home." },
                            { title: "Range of Products", desc: "Meeting diverse heating and DHW demands with precision." },
                            { title: "Space Optimization", desc: "Various installation options to minimize space requirements." },
                            { title: "Separate Streams", desc: "Dedicated water streams for each component ensuring pure efficiency." },
                            { title: "Built-in Components", desc: "Includes high-quality built-in expansion tank and pump." }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: 30, background: "#f8fafc", borderRadius: 24, border: "1px solid #e2e8f0" }}>
                                <div style={{ color: "#ff7216", marginBottom: 16 }}><ShieldCheck size={24} /></div>
                                <h4 style={{ fontSize: 20, fontWeight: 800, color: "#451a03", marginBottom: 12 }}>{item.title}</h4>
                                <p style={{ color: "#64748b", fontSize: 16, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section style={{ padding: "60px 20px", background: "#f97316", textAlign: "center", borderRadius: "40px", margin: "0 20px 40px" }}>
                <div style={{ maxWidth: 800, margin: "0 auto", color: "#fff" }}>
                    <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900, marginBottom: 20 }}>Ready for Maximum Efficiency?</h2>
                    <p style={{ fontSize: 18, opacity: 0.9, marginBottom: 35 }}>Our experts can help you choose the right Combi Boiler System for your home.</p>
                    <Link to="/contact" style={{
                        display: "inline-flex", alignItems: "center", gap: 12,
                        textDecoration: "none", background: "#fff", color: "#f97316",
                        padding: "18px 45px", borderRadius: 100, fontWeight: 800, fontSize: 18,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                        transition: "all 0.3s"
                    }}>
                        Get Free Consultation <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
}

function clamp(min, preferred, max) {
    return `clamp(${min}px, ${preferred}vw, ${max}px)`;
}
