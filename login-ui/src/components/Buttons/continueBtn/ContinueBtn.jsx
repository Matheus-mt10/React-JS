import styles from './dist/ContinueBtn.module.css'


function ContinueBtn() {
    return(
        <button className={styles.continueBtn}>
            <a href="#">Continue</a>
        </button>
    );

}

export default ContinueBtn