import styles from './dist/EmailInput.module.css'

function EmailInput() {
    return(
        <div className={styles.emailContainer}>
            <div className="emailIco">sasa</div>
            <input type="email" name="" id="inputEmail" />
            <div className="confirmIco">dssd</div>
        </div>
    );
}

export default EmailInput