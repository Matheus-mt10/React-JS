import styles from './dist/EmailInput.module.css'
import confirm_ico from '../assets/confirm_icon.png'

function EmailInput() {
    return(
        <div className={styles.emailContainer}>
            <div className="emailIco">sasa</div>
            <input type="email" name="" id="inputEmail" />
            <div className="confirmIco"><img src={confirm_ico} alt="" /></div>
        </div>
    );
}

export default EmailInput