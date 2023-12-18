import ButtonDefaul from "../ButtonDefaul/ButtonDefaul";
import AirmaxPlus700x700 from "../assets/AirmaxPlus700x700.png";

function Hero() {
    return(
       <div className="heroContainer">
        <div className="heroText">
            <h2 className="heroTitle">Find Your Dream Sneakers</h2>
            <p className="heroText">Find youus shoes  from our  various collections. Hero  shoes are  endies and profit is also endsless</p>
            <img src={AirmaxPlus700x700} alt="" />
            <ButtonDefaul
            textButton="Explore More"
            ></ButtonDefaul>
        </div>
       </div>

    );
}

export default Hero;