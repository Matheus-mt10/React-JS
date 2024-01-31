
import './dist/App.module.css';

function App() {
  return (
    <div className="container-app">

        <div className="containerMainContent">
          <header><a href="#"><img src="./assets/logo.png" alt="" className="mainLogo" /></a></header>
          <div className="containerLogin">
            <h1>Bem-vindo de volta</h1>
            <p>Bem vindo de volta, por favor insira seus dados de login </p>
            <div className="loginOrCreateAccount">
              <button className="login">Login</button>
              <button className="createAccount">Criar conta</button>
            </div>
            <div className="emailBox">
              <div className="emailIco"></div>
              <input type="email" name="" id="inputEmail" />
              <div className="confirmBox">ok</div>
            </div>
            <button className="continue">Continuar</button>
          </div>
          <div className="loginWithSocialMedias">
            <div className="continueText">
              <p> Continue com</p>
            </div>
            <div className="socialMedias">
              <a href="#">google<img src="" alt="" className="googleLogo" /></a>
              <a href="#">apple<img src="" alt="" className="appleLogo" /></a>
              <a href="#">face<img src="" alt="" className="facebookLogo" /></a>
            </div>
          
          </div>
          <footer>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam deleniti necessitatibus perferendis at similique, placeat fugiat ea ratione quisquam sequi vero quidem vitae fugit debitis ad vel dolor laudantium.</p>
          </footer>
        </div>
    </div>
  );
}

export default App;
