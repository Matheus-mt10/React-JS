import style from './Card.module.css'
import deliveryImg from '../assets/deliveryImg.png'

function Card() {
    return(

        <div className={style.card}>
            <div className={style.orderImg}>
                <img src={deliveryImg} className={style.deliveryImg} alt="Order icon for the better view" />
            </div>
            <h2 className={style.orderTitle}>Easy To Order</h2>
            <p className="orderText">
                Your favorite food delivery partner.<br></br> A trendly food delivery. 
            </p>
        </div>

    );

}

export default Card;