import lancheImg from '../assets/lanche.png';
import style from './AboutUs.module.css';

function AboutUs() {
    return(
        <div className= {style.containerColorFull}>

            <div className={style.aboutAllContent}>
                <div className={style.lancheImg}>
                    <img src={lancheImg}  className={style.xbaconImg} alt="" />
                </div>
                <div className={style.aboutContent}>
                    <h2 className="aboutSubtitle" >About Us</h2>
                    <h1 className="aboutTitle" >Every meal is  a Heppy meal</h1>
                    <p className="aboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste unde, iure ab hic obcaecati quia doloremque. </p>
                </div>
            </div>

        </div>
    );

}

export default AboutUs;