import style from './Button.module.css'

function Button({buttonText}) {
    return(
        <>
        <button type="submit" className={style.buttonDefault}>{buttonText}</button>
        </>
    )
}

export default Button;