import style from './Card.module.css'

function Card({cardImg, cardTitle, cardText}) {
    // cardImg, cardTitle, cardText
    return(

        <div className={style.card}>
            <div className={style.orderImg}>
                <img src={cardImg} className={style.cardImg} alt="icon for the better view" />
            </div>
            <h2 className={style.orderTitle}>{cardTitle}</h2>
            <p className={style.cardText}>
                {cardText}
            </p>
        </div>

    );

}

export default Card;