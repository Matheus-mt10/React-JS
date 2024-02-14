import style from './dist/EventExe.module.css'



function EventExe(params) {

    let containerArea = window.document.querySelector("div.container")
    let btn = window.document.querySelector('button.btn')


    function btnChange(params) {
        containerArea.style.background = 'blue'
    }

    return(
        <div className={style.container}>

            <button onClick={btnChange} className={style.btn}>Clique</button>

        </div>
    );
}

export default EventExe