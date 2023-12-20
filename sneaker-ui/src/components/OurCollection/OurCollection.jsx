import CardCollection from './CardCollection/CardCollection';
import style from './OurCollection.module.css';

function OurColletion(){
    return(
        <div className={style.collectionContainer}>
            <CardCollection></CardCollection>
        </div>
    );
}
export default OurColletion;