import { Link } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Brands from './Brands';
import Blogs from './Blogs';

const Home = () => {
    return (
        <>
            <title>Patel Heating & Air Conditioning - Home</title>
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <Brands />
            <div style={{ padding: "80px 0", background: "#f9fafb" }}>
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: "50px" }}>
                        <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#ff7216", marginBottom: "15px" }}>Latest from our Blog</h2>
                        <p style={{ fontSize: "18px", color: "#6b7280" }}>Stay informed with the latest HVAC tips and company news.</p>
                    </div>
                </div>
                <Blogs limit={3} isHome={true} />
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                    <Link to="/blog" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "10px",
                        backgroundColor: "#ff7216",
                        color: "#fff",
                        padding: "16px 40px",
                        borderRadius: "50px",
                        fontWeight: 700,
                        textDecoration: "none",
                        fontSize: "18px",
                        boxShadow: "0 10px 20px rgba(255, 114, 22, 0.2)",
                        transition: "all 0.3s ease"
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "translateY(-3px)";
                            e.currentTarget.style.boxShadow = "0 15px 30px rgba(255, 114, 22, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 114, 22, 0.2)";
                        }}
                    >
                        View All Posts
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Home;
