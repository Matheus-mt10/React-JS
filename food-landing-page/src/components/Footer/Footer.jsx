import style from './Footer.module.css';
import logo from '../assets/continho.png'
import faceLogo from '../assets/facebook.png';
import instaLogo from '../assets/instagram.png';
import twitterLogo from '../assets/twitter.png';
import linkedinLogo from '../assets/linkedin.png';


function Footer(params) {
    return(
        <footer>
            <div className={style.socialContacts}>

                <div className={style.logoDiv}>
                    <img src={logo} className={style.logoFooter}  alt="Logo da empresa" />
                </div>

                <p className={style.socialText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                </p>

                <div className="socialMedias">
                    <img src={faceLogo}  className={style.socialLogo} alt=" Facebook logo" />
                    <img src={instaLogo} className={style.socialLogo}  alt=" Instagram Logo" />
                    <img src={twitterLogo} className={style.socialLogo} alt="Twitter Logo" />
                    <img src={linkedinLogo} className={style.socialLogo} alt=" Linkedin Logo" />
                </div>

            </div>

            <div className="ourMenu">
                <h2>Our Menu</h2>
                <ul>
                    <li>Breakfast</li>
                    <li>Lunce</li>
                    <li>Dunner</li>
                    <li>Snack</li>
                </ul>
            </div>

            <div className="usefulLinks">
                <ul>
                    <li>Services</li>
                    <li>Support</li>
                    <li>Conditions</li>
                    <li>Security</li>
                </ul>
                
            </div>
            
        </footer>
    );
}

export default Footer