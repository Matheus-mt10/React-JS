import styles from './dist/Welcome.module.css'

function Welcome() {
    return(
        
        <div className={styles.welcomeContainer}>
            <h1 className={styles.mainTitle}>Bem vindo de volta</h1>
            <p>Entre com a sua conta</p>
        </div>

    );
}

export default Welcome