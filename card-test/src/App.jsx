import './App.css';
import Card from './components/Card/Card';
import airIco from './components/Assets/nikeairlogo.png'
import tnIco from './components/Assets/niketnlogo.png'
import jordanIco from './components/Assets/jordanLogo.png'
import jordan1 from './components/Assets/jordan1.png'
import noctaIco from './components/Assets/noctaLogo.png'
import nikeLogo from './components/Assets/nikeLogoCut.png'
import nikeNocta from './components/Assets/NOCTAGlideCut.png'
import nikeYearDragon from './components/Assets/NikeYearOfTheDragoncur.png'
import jordanlowImg from './components/Assets/nokeJordanLw.png'
import nikeAirImg from './components/Assets/nk full cut.png'
import nikeAirMaxPlus from './components/Assets/niketnpluscut.png'


function App() {
  return (
    <body>
      <Card
        snkIco={airIco}
        snkImg={nikeAirImg}
        snkName={"Nike Air"}
        snkStyle={"Casual"}
        snkPrice={"455,00"}
      ></Card>

      <Card
        snkIco={tnIco}
        snkImg={nikeAirMaxPlus}
        snkName={"Air Max Plus"}
        snkStyle={"Sport"}
        snkPrice={"1000"}
      ></Card>

      <Card
        snkIco={noctaIco}
        snkImg={nikeNocta}
        snkName={"NOCTA Glide"}
        snkStyle={"Sport"}
        snkPrice={"1000"}
      ></Card>

      <Card
        snkIco={nikeLogo}
        snkImg={nikeYearDragon}
        snkName={"Year of the dragon"}
        snkStyle={"Casual"}
        snkPrice={"1000"}
      ></Card>

      <Card
        snkIco={jordanIco}
        snkImg={jordanlowImg}
        snkName={"Jordan Low"}
        snkStyle={"Sneaker"}
        snkPrice={"1000"}
      ></Card>

      <Card
        snkIco={jordanIco}
        snkImg={jordan1}
        snkName={"Jordan 1"}
        snkStyle={"Sneaker"}
        snkPrice={"1000"}
      ></Card>
      
    </body>
  );
}

export default App;
