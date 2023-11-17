import './App.css';
import Frase from './components/Frase';
import Pessoa from './components/Pessoa';
import List from './components/List';


function App() {

  
  return (
    <div className="App">

     <Frase></Frase>
     <Pessoa 
     foto="https://via.placeholder.com/150"
     nome="João pé de feijão"
     idade="25"
     profissao="Análista de sistemas" >
     </Pessoa>

      <List></List>
    </div>
  );
}

export default App;

