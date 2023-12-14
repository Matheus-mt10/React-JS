import style from './Hero.module.css'
import imgPizza from '../assets/pizza1c.png'
import Button from '../Button/Button';

function Hero(params) {
    return(
        <>
        <div className={style.heroContainer}>
                
                <div className={style.heroContent}>
                    <h2 className={style.heroSubtitle}>FOOD DELIVERY </h2>
                    <h1 className={style.heroTitle} >observe the food <br></br> feel the taste</h1>
                    <p className={style.heroText}>Add a joy of best teste. Foodie moments. Taste the best that surprise you. </p>
                    <Button 
                    buttonText={"Order new"}
                    ></Button>

                </div>

                <div className="heroImgContainer">
                    <img src={imgPizza} alt="" className={style.imgPizza} />
                </div>

            </div>

        </>
    )
}

export default Hero;