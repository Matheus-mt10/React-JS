import styles from './dist/Card.module.css'
import nikeair from '../Assets/nk full cut.png'
import cart from '../Assets/cart.png'
import airIco from '../Assets/nikeairlogo.png'

function Card({snkImg,snkIco,snkName,snkStyle,snkPrice}) {
    return(

        <div className={styles.cardContainer}>

            <div className={styles.cardHeader}>
               
                    <img className={styles.airIco} src={snkIco} alt="" />
                    <img src={cart} alt="" className={styles.cartIco} />
            </div>


            <div className={styles.imgBox}>
                <img src={snkImg} className={styles.nikeAir} alt="Tenis Nike" />
            </div>
            <div className={styles.snkInfo}>
                <div className={styles.snkName}>
                    <h1>{snkName}</h1>
                    <p>{snkStyle}</p>
                </div>

                <div className={styles.snkPrice}>
                    <h2 className={styles.price}>{snkStyle}</h2>
                    <p className={styles.coin}>Reais</p>
                </div>
            </div>
        </div>

    )
}
export default Card