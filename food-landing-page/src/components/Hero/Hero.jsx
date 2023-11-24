import style from './Hero.module.css'
import imgPizza from '../assets/pizza1c.png'

function Hero(params) {
    return(
        <>
        <div className={style.heroContainer}>
                
                <div className="heroContent">
                    <h2 className="heroSubtitle">FOOD DELIVERY _____</h2>
                    <h1 className="heroTitle">observe the food feel the taste</h1>
                    <p className="herotext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nemo eos ab exercitationem. Rerum sint autem itaque hic eaque cupiditate consectetur at aspernatur. A, molestiae! Rem ducimus eveniet obcaecati excepturi.</p>
                </div>

                <div className="heroImgContainer">
                    <img src={imgPizza} alt="" className={style.imgPizza} />
                </div>

            </div>

        </>
    )
}

export default Hero;