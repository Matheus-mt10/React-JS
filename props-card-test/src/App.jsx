import './App.css';
import Card from './components/Card/Card';
import airmax1 from './components/Assets/airmax1.png'
import airmax2 from './components/Assets/airmax2.png'


function App() {
  return (
    <div className="App">

      <Card 
      protoShoes={airmax1}
      nameShoes={"Nike Air Max Tn Plus"}
      DescriptionShoes={"O Air Max 90 é um dos principais sneakers da família Max Air. Desenvolvido pela Nike, foi lançada em 1990."}
      priceShoes={"R$ 1000,00"}
      >
      
      </Card>

      <Card
      protoShoes={airmax2}
      nameShoes={"NOCTA Glide White"}
      DescriptionShoes={"Apresentamos o NOCTA Glide. Inspirado no Zoom Flight 95s com o toque de NOCTA."}
      priceShoes={"R$ 1200,00"}
      
      >
      
      </Card>

    </div>
  );
}

export default App;
