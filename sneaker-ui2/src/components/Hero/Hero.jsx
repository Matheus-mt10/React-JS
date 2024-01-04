import style from '../Hero/Hero.module.css';
import nikeTn from '../assets/NikeTnPluss.png';
import nikeTn2 from '../assets/nikeTn2.png';
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
                    detailImg={nikeTn2}
                   ></ImgDetailHero>
                   <ImgDetailHero
                    detailImg={nikeTn2}
                   ></ImgDetailHero>
                </div>

            </div>


            <div className={style.productPrice}>
                <h1> NIKE AIR MAX PLUS TN UNIVERSITY BLUE </h1>
                <div className="priceLike">
                    <h2>159,99</h2>
                    <img src={favoriteIcon} alt="Favorite Icon" />
                </div>
                <div className="sizeChoice">
                    <ChoiseSize
                        size={'37'}
                    ></ChoiseSize>
                    
                    <div className="addToCart">
                        <h2>Add +</h2>
                    </div>
                </div>

                <div className="infoShipping">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus totam voluptatum dolore hic! Ut quia numquam expedita eum iusto nihil, velit aperiam, facilis, similique iure delectus? Recusandae corporis consequuntur consectetur.</p>
                </div>

                <div className="productDetails">
                    <h2>PRODUCT DETAILS</h2>
                    <span>arrow</span>
                </div>
            </div>

        </div>

    );
}

export default Hero;