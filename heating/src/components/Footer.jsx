import React from 'react';
import { FaFacebookF, FaInstagram, FaNewspaper, FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col about-col">
                        <h3>About Us</h3>
                        <p>At PATEL Heating & Air Conditioning, we specialize in residential HVAC appliance installation, repair and maintenance services of any kind of Heating and Cooling system.</p>
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/Patel-Heating-and-Air-Conditioning-481166902281003/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/patel_heating_air_conditioning/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>
                    </div>

                    <div className="footer-col links-col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/blog"><FaLongArrowAltRight /> Blog</Link></li>
                            <li><Link to="/about-us"><FaLongArrowAltRight /> About Us</Link></li>
                            <li><Link to="/services"><FaLongArrowAltRight /> Our Services</Link></li>
                            <li><Link to="/contact"><FaLongArrowAltRight /> Get In Touch</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col posts-col">
                        <h3>Recent Posts</h3>
                        <ul>
                            <li>
                                <Link to="/blog/furnace-size">
                                    <FaNewspaper /> Guide to Choosing Furnace Size
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/best-ac-canada">
                                    <FaNewspaper /> Best AC in Canada
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog/furnace-repair">
                                    <FaNewspaper /> Furnace Repair Guide
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-col newsletter-col">
                        <h3>Newsletter</h3>
                        <p>Enter your Email get our updates and offers.</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Your Email..." />
                            <button className="btn btn-primary">Go</button>
                        </div>
                    </div>
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
