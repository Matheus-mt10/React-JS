import style from './Features.module.css'
import Card from '../Card/Card';


function Features(){
    return(
        <div className={style.featureContainer}>
            <div className={style.featureHeader}>
                <h2 className={style.featureTitle}>Features</h2>
                <h2 className={style.featureSubtitle}> Out Awesome services</h2>
            </div>

            <div className="featureCards">
                <Card></Card>
            </div>
        </div>
    );

}

export default Features;