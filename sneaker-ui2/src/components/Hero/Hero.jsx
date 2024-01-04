import style from '../Hero/Hero.module.css';
import nikeTn from '../assets/NikeTnPlus.png';
import nikeTn2 from '../assets/nikeTn2.png';

function Hero() {
    return(

        <div className={style.productContainer}>
            <div className="product">
                <img src={nikeTn} alt="NIKE AIR MAX PLUS TN UNIVERSITY BLUE  " />
                
            </div>
            <div className="productPrice"></div>
        </div>

    );
}

export default Hero;