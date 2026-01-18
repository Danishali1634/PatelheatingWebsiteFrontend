import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaNewspaper, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                const response = await fetch('https://blog.patelheating.ca/wp-json/wp/v2/posts?per_page=3');
                if (response.ok) {
                    const data = await response.json();
                    setRecentPosts(data);
                }
            } catch (error) {
                console.error("Error fetching recent posts for footer:", error);
            }
        };

        fetchRecentPosts();
    }, []);

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col about-col">
                        <h3>About Us</h3>
                        <p>At PATEL Heating & Air Conditioning, we specialize in residential HVAC appliance installation, repair and maintenance services of any kind of Heating and Cooling system.</p>
                        <div className="footer-socials">
                        </div>
                    </div>

                    <div className="footer-col links-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/about-us"><FaLongArrowAltRight /> About Us</Link></li>
                            <li><Link to="/services"><FaLongArrowAltRight /> Our Services</Link></li>
                            <li><Link to="/reviews"><FaLongArrowAltRight /> Reviews</Link></li>
                            <li><Link to="/blog"><FaLongArrowAltRight /> Blog</Link></li>
                            <li><Link to="/contact"><FaLongArrowAltRight /> Get In Touch</Link></li>
                        </ul>
                    </div>

                    {recentPosts.length > 0 && (
                        <div className="footer-col posts-col">
                            <h3>Recent Posts</h3>
                            <ul>
                                {recentPosts.map(post => (
                                    <li key={post.id}>
                                        <Link to={`/blog/${post.slug}`}>
                                            <FaNewspaper /> <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p>All Rights Reserved. © {new Date().getFullYear()} <Link to="/">Patel Heating & Air-conditioning</Link></p>
                    </div>
                    <div className="powered-by">
                        <p>Powered By : <a href="https://www.uniqtechsolutions.com/" target="_blank" rel="noopener noreferrer">Uniqtech Solutions</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
