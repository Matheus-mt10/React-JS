import style from '../Hero/Hero.module.css';
import nikeTn from '../assets/NikeTnPluss.png';
import nikeTn2 from '../assets/nikeTn2.png';
import nikeTnback  from '../assets/nikeTnBack.png';
import nikeTnFoot from '../assets/nikeTnFoot.png';
import nikeTnDetail from '../assets/nikeTnDetail.png';
import ImgDetailHero from './ImgDetailHero/ImgDetailHero';
import favoriteIcon from '../assets/favoriteIcon.png';
import ChoiseSize from './ChoiceSize/ChoiseSize';



function Hero() {
    return(

        <div className={style.productContainer}>

            <div className={style.productShow}>

                <img src={nikeTn} className={style.nikeTn} alt="NIKE AIR MAX PLUS TN UNIVERSITY BLUE" />

                <div className={style.productImagesShow}>
                   <ImgDetailHero
                    detailImg={nikeTn2}
                   ></ImgDetailHero>

                   <ImgDetailHero
                    detailImg={nikeTnback}
                   ></ImgDetailHero>

                   <ImgDetailHero
                    detailImg={nikeTnFoot}
                   ></ImgDetailHero>

                    <ImgDetailHero
                    detailImg={nikeTnDetail}
                   ></ImgDetailHero>

                </div>

            </div>


            <div className={style.productPrice}>
                <span className={style.boxText}>
                    <h1> Nike Air Max  Plus TN University Blue </h1>
                </span>

                <div className={style.priceLikeBox}>
                    <h2>159,99</h2>
                    <img src={favoriteIcon} className={style.favoriteIcon} alt="Favorite Icon" />
                </div>

                <div className={style.sizeChoice}>
                    <ChoiseSize
                        size={'37'}
                    ></ChoiseSize>

                    <ChoiseSize
                        size={'38'}
                    ></ChoiseSize>

                    <ChoiseSize
                        size={'39'}
                    ></ChoiseSize>

                    <ChoiseSize
                        size={'40'}
                    ></ChoiseSize>

                    <ChoiseSize
                        size={'41'}
                    ></ChoiseSize>

                    <ChoiseSize
                        size={'42'}
                    ></ChoiseSize>

                    <ChoiseSize
                        size={'43'}
                    ></ChoiseSize>

                    <ChoiseSize
                        size={'44'}
                    ></ChoiseSize>
                    
                    
                    <div className={style.addToCart}>
                        <h2>Add +</h2>
                    </div>
                </div>

                <div className={style.infoShipping}>
                    <p>Enjoy FREE Shipping on Orders Over $150! <br/> Shop now for a seamless experience and take advantage of our limited-time offer. </p>
                </div>

                <div className={style.productDetails}>
                    <h2>PRODUCT DETAILS</h2>
                    <span>arrow</span>
                </div>
            </div>

        </div>

    );
}

export default Hero;