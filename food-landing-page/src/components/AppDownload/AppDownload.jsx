import style from './AppDownload.module.css'
import googleLabel from '../assets/googleLabel.png'
import applelabel from '../assets/appleÇabel.png'
import smartphoneImg from '../assets/app.png'

function AppDownload(params) {
        return(
            <div className={style.appDownload}>
                <div className={style.appBox}>

                    <div className={style.downloadTitleBox}>
                        <h2 className={style.downloadTitle}> Download </h2>
                        <h2 className={style.downloadTitle2}>Get the  ?food app just now</h2>
                        <p className={style.downloadText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos quod cum eaque illum sunt, laborum tempore labore! </p>
                    </div>

                    <div className={style.storesApps}>

                        <img className={style.brandsStore} src={googleLabel} alt="Google play label" />

                        <img className={style.brandsStore} src={applelabel} alt="App store label" />
                    
                    </div>
                    
                </div>


                <div className={style.imgBox} >
                    <img className={style.phoneImg} src={smartphoneImg} alt="" />
                </div>

            </div>
        );
}

export default AppDownload;