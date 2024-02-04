import styles from './dist/ButtonLogin.module.css'
function ButtonLogin({textBtn}) {
    return(
        <button className={styles.button}>{textBtn}</button>

    );
}

export default ButtonLogin