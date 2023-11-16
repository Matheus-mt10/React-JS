import './App.css';

import Pessoa from './components/Pessoa';


function App() {

  
  return (
    <div className="App">
   
     <Pessoa 
     foto="https://via.placeholder.com/150"
     nome="João pé de feijão"
     idade="25"
     profissao="Análista de sistemas" >

     </Pessoa>

     <Pessoa 
     foto="https://via.placeholder.com/200"
     nome="Elba"
     idade="25"
     profissao="Puta" >
      
     </Pessoa>
    
    </div>
  );
}

export default App;
