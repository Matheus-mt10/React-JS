import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AboutUs from './components/AboutUs/AboutUs';
import Features from './components/Features/Features';
import AppDownload from './components/AppDownload/AppDownload';
import Footer from './components/Footer/Footer';
// inspiração - https://dribbble.com/shots/15248074-Food-Delivery-Landing-Page-UI-Design

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Hero></Hero>
    <AboutUs></AboutUs>
    <Features></Features>
    <AppDownload></AppDownload>
    <Footer></Footer>
  

    </div>
  );
}

export default App;
