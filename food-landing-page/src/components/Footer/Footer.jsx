import style from './Footer.module.css';
import logo from '../assets/continho.png'
import faceLogo from '../assets/facebook.png';
import instaLogo from '../assets/instagram.png';
import twitterLogo from '../assets/twitter.png';
import linkedinLogo from '../assets/linkedin.png';


function Footer(params) {
    return(
        <footer>
            <div className={style.containerFooter}>
                <div className={style.socialContacts}>
                    <div className={style.logoDiv}>
                        <img src={logo} className={style.logoFooter}  alt="Logo da empresa" />
                    </div>
                    <p className={style.socialText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                    </p>
                    <div className={style.socialMedias}>
                        <a href="#"><img src={faceLogo}  className={style.socialLogo} alt=" Facebook logo" /></a>
                        <a href="#"><img src={instaLogo} className={style.socialLogo}  alt=" Instagram Logo" /></a>
                        <a href="#"><img src={twitterLogo} className={style.socialLogo} alt="Twitter Logo" /></a>
                        <a href="#"><img src={linkedinLogo} className={style.socialLogo} alt=" Linkedin Logo" /></a>
                    </div>
                </div>
                <div className={style.ourMenu}>
                    <h2>Our Menu</h2>
                    <ul>
                        <a href="#">
                            <li>Breakfast</li>
                        </a>
                        <a href="#">
                            <li>Lunce</li>
                        </a>
                        <a href="#">
                            <li>Dunner</li>
                        </a>
                        <a href="#" >
                            <li>Snack</li>
                        </a>
                    </ul>
                </div>
                <div className={style.usefulLinks}>
                    <h2>Useseful links</h2>
                    <ul>
                        <a href="#">
                            <li>Services</li>
                        </a>
                        <a href="#">
                            <li>Support</li>
                            <li>Conditions</li>
                        </a>
                        <a href="#">
                            <li>Security</li>
                        </a>
                    </ul>
                
                </div>
            </div>
            
        </footer>
    );
}

export default Footer