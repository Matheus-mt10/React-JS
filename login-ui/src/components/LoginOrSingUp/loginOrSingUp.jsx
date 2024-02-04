import styles from './dist/loginOrSingUp.module.css'
import ButtonLogin from '../Buttons/ButtonLogin';

function LoginOrSingUp() {
    return(

        <div className={styles.loginSingUp}>
            <ButtonLogin
            textBtn="Sing In"
            ></ButtonLogin>
            <ButtonLogin
            textBtn="Sing Up"
            ></ButtonLogin>
        </div>

        
        
    );
}

export default LoginOrSingUp