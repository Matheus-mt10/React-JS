import style from './Header.module.css';
import menuLogo from '../assets/menu.png';
import nikeLogo from '../assets/nikeLogoBlack(cortada).png';
import bagLogo from '../assets/bag.png';
import personLogo from '../assets/person.png';

function Header(params) {
    return(
        
        <header>
            <div className={style.navigationBox}>

                <div className={style.logoBox}>
                    <a href="#"><img src={menuLogo} className={style.menuLogo} alt="Menu logo" /></a>
                </div>

                <nav className={style.menuList}>
                    <ul className={style.listItens}>
                        <li><a href="#">NEW</a></li>
                        <li><a href="#">MEN</a></li>
                        <li><a href="#">WOMEN</a></li>
                        <li><a href="#">KIDS</a></li>
                    </ul>
                </nav>

            </div>

            <div className={style.logoHeader}>
                <a href="#"><img src={nikeLogo} className={style.nikeLogo} alt="Nike logo black" /></a>
            </div>

            <nav className={style.menuUsers}>
                
                <a href="#">SEARCH</a>

                <div className={style.bagBox}>
                <a href="#">BAG</a>
                <a href="#"><img src={bagLogo} className={style.bagLogo} alt="" /></a>
                </div>

                <a href="#"><img src={personLogo} className={style.personLogo} alt="" /></a>

            </nav>

        </header>

    );
}

export default Header;