import { Link } from "react-router-dom";


export const CtaSection = ({ title, description, backgroundColor, descriptionColor }) => {


    return (
        <div style={{
            // background: `linear-gradient(135deg, 'red 0%, #8b0000 100%)`,
            backgroundColor: backgroundColor,
            // background: '#fdc1c2',
            padding: "80px 20px",
            position: "relative",
            overflow: "hidden",
        }}>
            <style>
                {`
          @media (min-width: 768px) {
            .cta-content {
              text-align: left !important;
              justify-content: space-between !important;
            }
          }
        `}
            </style>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                pointerEvents: "none"
            }}></div>
            <div style={{
                maxWidth: 1200,
                margin: "0 auto",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center", // Center on mobile, space-between on desk
                alignItems: "center",
                gap: 40,
                color: "#ffffff",
                position: "relative",
                zIndex: 1,
                textAlign: "center"
            }} className="cta-content">
                <div style={{ flex: "1 1 300px" }}>
                    <h2 style={{
                        fontSize: "clamp(28px, 4vw, 42px)",
                        marginBottom: 12,
                        fontWeight: 800,
                        color: '#ffffff'
                    }}>
                        {title}
                    </h2>
                    <p style={{ fontSize: 18, opacity: 0.95, color: descriptionColor }}>{description}</p>
                </div>
                <Link to="/contact">
                    <button style={{
                        backgroundColor: "#ff7216",
                        color: '#ffffff',
                        border: "none",
                        padding: "18px 40px",
                        borderRadius: 12,
                        fontSize: 17,
                        fontWeight: 700,
                        cursor: "pointer",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                        transition: "transform 0.2s, box-shadow 0.2s",
                        whiteSpace: "nowrap"
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.3)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
                        }}>
                        Contact Us
                    </button>
                </Link>
            </div>
        </div>
    )
}