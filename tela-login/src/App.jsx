import './App.css';
import TitleLogin from './components/TitleLogin/TitleLogin';
import InputEmail from './components/inputEmail/InputEmail';
import InputPassword from './components/InputPassword/InputPassword';

function App() {
  return (
    <body>
      <section className="mainContainer">

          <TitleLogin></TitleLogin>
          <InputEmail></InputEmail>
          <InputPassword></InputPassword>

      </section>
    </body>
  );
}
export default App;
