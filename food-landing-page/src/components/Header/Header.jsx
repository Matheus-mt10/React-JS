import style from './Header.module.css'
import imgBrand from "../assets/continho.png"

function Header () {
    return(
        <>
        <header>
            <div className="logoBrand">,
               <img className={style.brand} src={imgBrand} alt="logo" /> 
            </div>
        </header>
        </>
    )
}

export default Header