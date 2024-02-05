import styles from './dist/Card.module.css'
import nikeair from '../Assets/nk full cut.png'
import cart from '../Assets/cart.png'
import airIco from '../Assets/nikeairlogo.png'

function Card() {
    return(

        <div className={styles.cardContainer}>

            <div className={styles.cardHeader}>
               
                    <img className={styles.airIco} src={airIco} alt="" />
               
                    <img src={cart} alt="" className={styles.cartIco} />
            </div>


            <div className={styles.imgBox}>
                <img src={nikeair} className={styles.nikeAir} alt="Tenis Nike" />
            </div>
            <div className={styles.snkInfo}>
                <div className={styles.snkName}>
                    <h1>Nike Air 1</h1>
                    <p>Casual </p>
                </div>

                <div className={styles.snkPrice}>
                    <h2 className={styles.price}>455</h2>
                    <p className={styles.coin}>Reais</p>
                </div>
            </div>
        </div>

    )
}
export default Card