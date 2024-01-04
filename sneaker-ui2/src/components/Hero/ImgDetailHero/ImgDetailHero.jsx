import style from './dist/imgDetailHero.module.css';

function ImgDetailHero({detailImg}) {
    return(

        <div className={style.detailImgBox}>
            <img src={detailImg} className={style.detailImg} alt="NIKE AIR MAX PLUS TN UNIVERSITY BLUE PAIR" />
        </div>

    );
}

export default ImgDetailHero;