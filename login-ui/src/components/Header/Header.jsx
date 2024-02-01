import logo from '../assets/LOGO EAGLE SIGHT .png'
import styles from '../Header/dist/Header.module.css'

function Header(params) {
    return(
        <header>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img className={styles.logoImg} src={logo} alt="Logo"/>
            </a>
        </header>
    );
}

export default Header