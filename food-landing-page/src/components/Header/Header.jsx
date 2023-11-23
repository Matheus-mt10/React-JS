import style from './Header.module.css'

function Header () {
    return(
        <>
        <header>
            <div className="logoBrand">,
                <img  className={style.brand} src="./assets/continho.png" alt=""/> 
            </div>
        </header>
        </>
    )
}

export default Header