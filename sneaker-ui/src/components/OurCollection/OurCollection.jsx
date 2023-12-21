import CardCollection from './CardCollection/CardCollection';
import style from './OurCollection.module.css';
import nikeNocta from '../assets/nikeNocta.png';

function OurColletion(){
    return(
        <div className={style.collectionContainer}>
            <CardCollection
            imgSneaker={nikeNocta}
            alt={"Sneaker nike nocta"}
            sneakerTitle={"NOCTA x Nike Glide Black & White"} 
            sneakerStyle={"Casual"}
            sneakerPrice={"150,00 R$"}
            ></CardCollection>

            <CardCollection
            imgSneaker={nikeNocta}
            alt={"Sneaker nike nocta"}
            sneakerTitle={"NOCTA x Nike Glide Black & White"} 
            sneakerStyle={"Casual"}
            sneakerPrice={"150,00 R$"}
            ></CardCollection>


        </div>
    );
}
export default OurColletion;