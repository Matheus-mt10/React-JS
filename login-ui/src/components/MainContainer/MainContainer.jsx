import styles from './dist/MainContainer.module.css'
import Welcome from '../Welcome/Welcome';
import LoginOrSingUp from '../LoginOrSingUp/loginOrSingUp';
import EmailInput from '../EmailInput/EmailInput';
import ContinueBTn from '../Buttons/continueBtn/ContinueBtn'
import ContinueWith from '../ContinueWith/ContinueWith';
import SocialMedia from '../SocialMedia/SocialMedias';
import Footer from '../Footer/footer';

function MainContainer() {
    return(
        <div className={styles.mainContainer}>
            <Welcome></Welcome>
            <LoginOrSingUp></LoginOrSingUp>
            <EmailInput></EmailInput>
            <ContinueBTn></ContinueBTn>
            <ContinueWith></ContinueWith>
            <SocialMedia></SocialMedia>
            <Footer></Footer>


        </div>
    );
}

export default MainContainer