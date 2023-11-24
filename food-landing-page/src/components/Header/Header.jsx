/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './Header.module.css'
import imgBrand from "../assets/continho.png"

function Header () {
    return(
        <>
        <header>
            <nav className={style.navHeader}>
                <div className="logoBrand">,
                   <img className={style.brand} src={imgBrand} alt="logo" />
                </div>

                <ul className={style.navMenu}>
                    <li className="navItem"> <a href="#">Home</a></li>
                    <li className="navItem"> <a href="#">About</a></li>
                    <li className="navItem"> <a href="#">Features</a></li>
                    <li className="navItem"> <a href="#">Download</a></li>
                    <li className="navItem"> <a href="#">recipes</a></li>
                    <li className="navItem"> <a href="#">login</a></li>
                </ul>

                <button type="submit" className={style.navButton} >Sign Up</button>

            </nav>

        </header>
        </>
    )
}

export default Header