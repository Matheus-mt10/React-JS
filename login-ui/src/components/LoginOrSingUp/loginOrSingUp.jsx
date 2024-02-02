import styles from './dist/loginOrSingUp.module.css'
import ButtonLogin from '../Buttons/ButtonLogin';

function LoginOrSingUp() {
    return(

        <div className={styles.loginSingUp}>
            <ButtonLogin></ButtonLogin>
            <ButtonLogin></ButtonLogin>
        </div>

        
        
    );
}

export default LoginOrSingUp