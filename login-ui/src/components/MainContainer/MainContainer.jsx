import styles from './dist/MainContainer.module.css'
import Welcome from '../Welcome/Welcome';
import LoginOrSingUp from '../LoginOrSingUp/loginOrSingUp';

function MainContainer() {
    return(
        <div className={styles.mainContainer}>
            <Welcome></Welcome>
            <LoginOrSingUp></LoginOrSingUp>

        </div>
    );
}

export default MainContainer