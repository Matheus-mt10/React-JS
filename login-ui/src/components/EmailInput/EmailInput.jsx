import styles from './dist/EmailInput.module.css'
import confirm_ico from '../assets/confirm_icon.png'
import emailIco from '../assets/email.png'

function EmailInput() {
    return(
        <div className={styles.emailContainer}>
            <img src={emailIco} alt="Email icon" className={styles.emailIco} />
            <div className={styles.inputEmailBox}>
                <p>Email Address</p>
                <input type="email" name="" id={styles.inputEmail} />                
            </div>
            <div className={styles.confirmIco}><img src={confirm_ico} alt="" /></div>
        </div>
    );
}

export default EmailInput