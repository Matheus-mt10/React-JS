import style from './Footer.module.css';
import logo from '../assets/continho.png'
import faceLogo from '../assets/facebook.png';
import instaLogo from '../assets/instagram.png';
import twitterLogo from '../assets/twitter.png';
import linkedinLogo from '../assets/linkedin.png';
import arrow from '../assets/arrow.png';
import phone from '../assets/phone.png';
import email from '../assets/email.png';

function Footer(params) {
    var linkedin = "www.linkedin.com/in/matheus-santana-dev";
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
                
                <div className={style.stayConnected}>
                    <h2 className="stayConnected"> Stay Connected</h2>
                    <div className={style.footerSearchBox}>
                        <input type="search" name="" id="inputFooter" className={style.inputFooter} placeholder='Email Address'/>
                        <a href="#"><img src={arrow} alt="Flexa de pesquisa" className={style.arrow}/></a>
                    </div>

                    <div className={style.phoneBox}>
                        <img src={phone} className={style.phoneImg} alt="Phone logo" />
                        <p>Call +55 (11)9999-9999</p>
                    </div>
                    <div className={style.emailBox}>
                        <img src={email} className={style.emailImg} alt="Email logo" />
                        <p>Support.cantinhodosabor.net</p>
                    </div>
                </div>

            </div>
            <div className={style.createBy}>
                <p>Create With React.JS by <a href={linkedin} target='blank' > Matheus Santana 2023</a></p>
            </div>
            
        </footer>
    );
}

export default Footer