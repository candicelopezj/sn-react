import './footer.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer>
        <div class="footer__top">
        <img class="footer__logo-img" src="images/surfing__logo.svg" alt="" />
        </div>
        <div class="footer__content">
            <div class="footer__mid-item">
                <div class="footer__mid-text footer__links">
                    <div class="footer__item-title">
                        <h1>
                            Quick Links 
                        </h1>
                    </div>
                    <a href="">
                        Surf
                    </a>
                    <a href="">
                        Real Estate
                    </a>
                    <a href="">
                        Vacation Homes
                    </a>
                    <a href="">
                        Discover Nosara
                    </a>
                    <a href="">
                        Blog
                    </a>
                    <a href="">
                        Contact
                    </a>

                </div>
            </div>
            <div class="footer__mid-item">
                <div class="footer__mid-text">
                    <div class="footer__item-title">
                        <h1>
                            Surfing Nosara - It's easier than you think. &nbsp
                        </h1>
                    </div>
                    <div class="footer_mid-text">
                        Founded in 2007 with a vision to be the place to exchange expert real estate advice and daily
                        surf
                        reports for the area, Surfing Nosara has grown into an informational and vacation hub, as well
                        as
                        the leading real estate office in the Nosara area. Our philosophy is simple- To make you happy,
                        to
                        be transparent and to be that friendly voice in the community you can trust with expert advice
                        you
                        can count on. And we’re proud to have attracted some of the brightest minds in Nosara to our
                        team to
                        allow us to do this.
                    </div>
                    <div class="footer__mid-link">
                        <a href="/">Checked out our latest blog post?</a>
                    </div>
                </div>
                
            </div>
            <div class="footer__mid-item">
                <div class="footer__icons">
                    <div class="footer__item-title">
                        <h1>
                            Get In Touch 
                        </h1>
    
                    </div>
                    <a href="">
                        <img src="images/phone__icon.svg" alt="/" />
                        <span>+1-800-591-5407</span>
                    </a>
                    <a href="">
                        <img src="images/mail__icon.svg" alt="/" />
                        <span>info@surfingnosara.com</span>
                    </a>
                    <a href="">
                        <img src="images/facebook__icon.svg" alt="/" />
                        <span>facebook.com/Surfing Nosara</span>
                    </a>
                    <a href="">
                        <img src="images/instagram__icon.svg" alt="/" />
                        <span>instagram.com/surfing_nosara/</span>
                    </a>
                    <a href="">
                        <img src="images/youtube__icon.svg" alt="/" />
                        <span>youtube.com/user/surfingnosaravideos</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div>
                © 2016 Surfing Nosara. All Right Reserved
            </div>
            <div>
                Terms of use • Privacy Policy
            </div>
        </div>


    </footer>
        
        
    )
}

export default Footer;