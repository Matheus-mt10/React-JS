/* eslint-disable jsx-a11y/anchor-is-valid */
import style from './Header.module.css'
import imgBrand from "../assets/continho.png"
import Button from '../Button/Button'

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

                <Button
                buttonText={"Sign in "}
                ></Button>

            </nav>

        </header>
        </>
    )
}

export default Header