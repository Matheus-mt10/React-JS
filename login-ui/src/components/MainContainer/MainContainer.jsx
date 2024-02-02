import styles from './dist/MainContainer.module.css'
import Welcome from '../Welcome/Welcome';
import LoginOrSingUp from '../LoginOrSingUp/loginOrSingUp';
import EmailInput from '../EmailInput/EmailInput';

function MainContainer() {
    return(
        <div className={styles.mainContainer}>
            <Welcome></Welcome>
            <LoginOrSingUp></LoginOrSingUp>
            <EmailInput></EmailInput>

        </div>
    );
}

export default MainContainer