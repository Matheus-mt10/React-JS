import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
// inspiração - https://dribbble.com/shots/15248074-Food-Delivery-Landing-Page-UI-Design

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Hero></Hero>
    <AboutUs></AboutUs>
    </div>
  );
}

export default App;
