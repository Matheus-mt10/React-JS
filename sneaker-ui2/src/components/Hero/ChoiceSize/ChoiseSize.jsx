import style from './ChoiseSize.module.css';

function ChoiseSize({size}) {
    return(
        <div className={style.sizeContainer}>
            <div className={style.sizeChoice}>
                <h2>{size}</h2>
            </div>
        </div>

    );
}

export default ChoiseSize;