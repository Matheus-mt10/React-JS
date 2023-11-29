import style from './Features.module.css';
import Card from '../Card/Card';
import orderImg from '../assets/orderImg.png';
import deliveryImg from '../assets/deliveryImg.png';
import creditCard from '../assets/creditcardImg.png';


function Features(){
    return(
        <div className={style.featureContainer}>
            <div className={style.featureHeader}>
                <h2 className={style.featureTitle}>Features</h2>
                <h2 className={style.featureSubtitle}> Out Awesome services</h2>
            </div>

            <div className={style.featureCards}>
                <Card
                cardImg={orderImg}
                cardTitle={"Easy To Order"}
                cardText={"Your favorite food delivery partner. A trendly food delivery."}
                >
                </Card>

                <Card
                cardImg={deliveryImg}
                cardTitle={"Fast delivery "}
                cardText={"The food at your doorstep. Best service to fulfil your expectations."}
                >
                </Card>

                <Card
                cardImg={creditCard}
                cardTitle={"Secureted Payment"}
                cardText={"Our commitments is keeping you safe. Pinnacle of reliability"}
                >
                </Card>
                
            </div>
        </div>
    );

}

export default Features;