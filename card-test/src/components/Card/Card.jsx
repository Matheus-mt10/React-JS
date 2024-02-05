import styles from './dist/Card.module.css'
import nikeair from '../Assets/nk (350 x 350 px) cc.png'
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
                <img src={nikeair} alt="Tenis Nike" />
            </div>
            <div className={styles.snkInfo}>
                <div className={styles.snkName}>
                    <h1>Nike Air 1</h1>
                    <p>Casual </p>
                </div>
                <div className="snkPrice">
                    <p>455</p>
                </div>
            </div>
        </div>

    )
}
export default Card