import style from './Card.module.css';
// photoShoes, nameShoes, DescriptionShoes, priceShoes

function Card({protoShoes, nameShoes, DescriptionShoes, priceShoes}) {
    
    return(
        <div className={style.Card}>
            <img src={protoShoes} className={style.airmax1} alt="Foto do airmax1" />

            <div className={style.ContentContainer}>
                <h2 className={style.cardTitle}> {nameShoes}
                </h2>

                <p className={style.cardDiscription}>
                {DescriptionShoes}
                </p>

                <div className={style.priceContent}>
                <p className={style.price}><strong>{priceShoes}</strong> 6x sem juros</p>
                </div>

                <div className={style.containerButton}><button className={style.ButtonAddCart}>Adicionar ao Carrinho</button></div>

            </div>
            
            
        </div>

    );

}

export default Card;