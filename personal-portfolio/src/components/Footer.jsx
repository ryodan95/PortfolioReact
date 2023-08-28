import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer () {

    const socialLinks = {
        github: "https://github.com/ryodan95",
        linkedin: "https://www.linkedin.com/in/hector-poggi-04443524a/",
        instagram: "https://www.instagram.com/ahre_poggi/",
        facebook: "https://www.facebook.com/Ryodan.AkA.Poggi/",
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