import './App.css';

function App() {

  var nome = "matheus";
  var newName = nome.toUpperCase();
  var img = "https://via.placeholder.com/150"

  return (
    <div className="App">
     <h1>Alterando o JSX</h1>
     <h2>Olá, {newName} </h2>
     <img src={img} alt="minha imagem"></img>

    </div>
  );
}

export default App;
