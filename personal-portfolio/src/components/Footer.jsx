import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer () {

    const socialLinks = {
        github: "https://github.com/tu_usuario",
        linkedin: "https://linkedin.com/in/tu_usuario",
        instagram: "https://instagram.com/tu_usuario",
        facebook: "https://facebook.com/tu_usuario",
      };

    return (
        <div className="footer" id="Blog">
            <div className="container">
                <div className="footerSection">
                    <div className="row justifyConter">
                        <div className="footer-content">
                            <div className="footer-section-logo">
                                <img src="" alt="" />
                            </div>
                            <ul className="footerCircles">
                                <li><a href={socialLinks.github}><FaGithub className="footerIcon"/></a></li>
                                <li><a href={socialLinks.linkedin}><FaLinkedin className="footerIcon"/></a></li>
                                <li><a href={socialLinks.instagram}><FaInstagram className="footerIcon"/></a></li>
                                <li><a href={socialLinks.facebook}><FaFacebookF className="footerIcon"/></a></li>
                            </ul>
                            <div className="copy-right-content">
                                <p className="copyright">Copyright {new Date().getFullYear()} Hector Poggi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer;