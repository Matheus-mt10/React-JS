import style from './dist/CardCollection.module.css';

function CardCollection({imgSneaker, alt, sneakerTitle, sneakerPrice}) {
    return(

        <div className={style.collectionCard}>
            <img className={style.imgSneaker} src={imgSneaker} alt={alt} />
            <div className={style.cardContent}>
                <h2 className={style.sneakerTitle}>{sneakerTitle}</h2>
                <p className="sneakerPrice">{sneakerPrice}</p>
            </div>
        </div>

    );
}

export default CardCollection;