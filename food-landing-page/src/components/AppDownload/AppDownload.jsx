import style from './AppDownload.module.css'
import googleLabel from '../assets/googleLabel.png'
import applelabel from '../assets/appleÇabel.png'

function AppDownload(params) {
        return(
            <div className="appDownload">
                <div className="appBox">
                    <div className="downloadTitleBox">
                        <h2 className="downloadTitle"> Download </h2>
                        <h2 className="downloadTitle2" >Get the app just now</h2>
                        <p className="downloadTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos quod cum eaque illum sunt, laborum tempore labore!</p>

                    <div className="storesApps">

                        <img className={style.brandsStore} src={googleLabel} alt="Google play label" />

                        <img className={style.brandsStore} src={applelabel} alt="App store label" />
                    

                    </div>


                    </div>

                

                </div>
            </div>
        );
}

export default AppDownload;