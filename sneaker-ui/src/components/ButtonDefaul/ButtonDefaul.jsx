import style from '../ButtonDefaul/ButtonDefaul.css';

function ButtonDefaul({textButton}) {
    return(
        <div className={style.button}>
            <p>{textButton}</p>
        </div>

    );

}

export default ButtonDefaul;