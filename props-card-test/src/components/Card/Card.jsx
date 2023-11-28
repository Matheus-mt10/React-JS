import style from './Card.module.css';
import airmar1 from '../Assets/airmax1.png';

function Card() {
    
    return(
        <div className={style.Card}>
            <img src={airmar1} className={style.airmax1} alt="Foto do airmax1" />

            <div className={style.ContentContainer}>
                <h2 className={style.cardTitle}>
                Nike Air Max Tn Plus
                </h2>

                <p className={style.cardDiscription}>
                O Air Max 90 é um dos principais sneakers da família Max Air. Desenvolvido pela Nike, foi lançada em 1990.
                </p>

                <div className={style.priceContent}>
                <p className={style.price}><strong>R$ 1000,00</strong> 6x sem juros</p>
                </div>

                <div className={style.containerButton}><button className={style.ButtonAddCart}>Adicionar ao Carrinho</button></div>

            </div>
            
            
        </div>

    );

}

export default Card;