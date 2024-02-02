import style from './dist/SocialMedia.module.css'
import googleIco  from '../assets/google.png'
import appleIco from '../assets/apple.png'
import facebookIco from '../assets/facebook.png'
import styles from './dist/SocialMedia.module.css'

function SocialMedia() {
    return(
        <div className={style.socialMediaContainer}>
            <a href="#"><img src={googleIco} alt="Google Icon" className={styles.googleIco} /></a>
            <a href="#"><img src={appleIco} alt="Apple Icon" className={styles.appleIco} /></a>
            <a href="#"><img src={facebookIco} alt="Facebook Icon" className={styles.facebookIco} /></a>
        </div>
    );
}

export default SocialMedia;