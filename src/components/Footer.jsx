import React from 'react'
import '../components/Footer.css'
import Logo from '../components/img/Logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>

        <div className="background-blur-red">
        <section className="social-media">
                <div className="footer-links">
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2>About Us</h2>
                            <a href="/">How it works</a>   
                            <a href="/">Testimonials</a>
                            <a href="/">Investors</a>
                            <a href="/">Terms of Service</a>            
                        </div>
                        <div className="footer-link-items">
                            <h2>Contact Us</h2>
                            <a href="/">Contact</a>   
                            <a href="/">Support</a>
                            <a href="/">Destinations</a>
                            <a href="/">Sponsorships</a>   
                        </div>
                        <div className="footer-link-items">
                            <h2>Social Media</h2>
                            <a href="/">Instagram</a>   
                            <a href="/">Facebook</a>
                            <a href="/">Youtube</a>
                            <a href="/">Twitter</a>   
                        </div>
                    </div>
                </div>
                
                 <div className="social-media-wrap">
                        <small className="website-rights">
                            <img className='Logo' src={Logo} alt="Logo" />
                        </small>
                        <div className="social-icons">
                            <div className="social-icon-link" to="/" target="_blank" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </div>
                            <div className="social-icon-link" to="/" target="_blank" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </div>
                            <div className="social-icon-link" to="/" target="_blank" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </div>
                            <div className="social-icon-link" to="/" target="_blank" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
        
        

    </div>
  )
}

export default Footer