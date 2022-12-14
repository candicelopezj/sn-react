import './footer.css';
import facebook from "../../images/facebook__icon.svg"
import mail from "../../images/mail__icon.svg"
import instagram from "../../images/instagram__icon.svg"
import youtube from "../../images/youtube__icon.svg"
import phone from "../../images/phone__icon.svg"
import {} from "react-router-dom";
const Footer = () => {
    return (
        <footer>
        <div className="footer__top">
        <img className="footer__logo-img" src="images/surfing__logo.svg" alt="" />
        </div>
        <div className="footer__content">
            <div className="footer__mid-item">
                <div className="footer__mid-text footer__links">
                    <div className="footer__item-title">
                        <h1>
                            Quick Links 
                        </h1>
                    </div>
                    <a href='./RealEstate'>
                        Surf
                    </a>
                    <a href='./RealEstate'>
                        Real Estate
                    </a>
                    <a href='./RealEstate'>
                        Vacation Homes
                    </a>
                    <a href='./RealEstate'>
                        Discover Nosara
                    </a>
                    <a href='./RealEstate'>
                        Blog
                    </a>
                    <a href='./RealEstate'>
                        Contact
                    </a>
                    
                </div>
            </div>
            <div className="footer__mid-item">
                <div className="footer__mid-text">
                    <div className="footer__item-title">
                        <h1>
                            Surfing Nosara - It's easier than you think. &nbsp
                        </h1>
                    </div>
                    <div className="footer_mid-text">
                        Founded in 2007 with a vision to be the place to exchange expert real estate advice and daily
                        surf
                        reports for the area, Surfing Nosara has grown into an informational and vacation hub, as well
                        as
                        the leading real estate office in the Nosara area. Our philosophy is simple- To make you happy,
                        to
                        be transparent and to be that friendly voice in the community you can trust with expert advice
                        you
                        can count on. And we???re proud to have attracted some of the brightest minds in Nosara to our
                        team to
                        allow us to do this.
                    </div>
                    <div className="footer__mid-link">
                        <a href="/">Checked out our latest blog post?</a>
                    </div>
                </div>
                
            </div>
            <div className="footer__mid-item">
                <div className="footer__icons">
                    <div className="footer__item-title">
                        <h1>
                            Get In Touch 
                        </h1>
    
                    </div>
                    <a href='./RealEstate'>
                        <img src={phone} alt="/" />
                        <span>+1-800-591-5407</span>
                    </a>
                    <a href='./RealEstate'>
                        <img src={mail} alt="/" />
                        <span>info@surfingnosara.com</span>
                    </a>
                    <a href='./RealEstate'>
                        <img src={facebook} alt="/" />
                        <span>facebook.com/Surfing Nosara</span>
                    </a>
                    <a href='./RealEstate'>
                        <img src={instagram} alt="/" />
                        <span>instagram.com/surfing_nosara/</span>
                    </a>
                    <a href='./RealEstate'>
                        <img src={youtube} alt="/" />
                        <span>youtube.com/user/surfingnosaravideos</span>
                    </a>
                </div>
            </div>
        </div>
        <div className="footer__bottom">
            <div>
                ?? 2016 Surfing Nosara. All Right Reserved
            </div>
            <div>
                Terms of use ??? Privacy Policy
            </div>
        </div>


    </footer>
        
        
    )
}

export default Footer;