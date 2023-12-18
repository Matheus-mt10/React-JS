import AirmaxPlus700x700 from "../assets/AirmaxPlus700x700.png";
import DefaultButton from "../DafaultButton/DefaulButton";

function Hero() {
    return(
       <div className="heroContainer">
        <div className="heroText">
            <h2 className="heroTitle">Find Your Dream Sneakers</h2>
            <p className="heroText">Find youus shoes  from our  various collections. Hero  shoes are  endies and profit is also endsless</p>
            <img src={AirmaxPlus700x700} alt="Nike Air max Plus"/>
            <DefaultButton
                textButton="Explore More"
            ></DefaultButton>
            
        </div>
       </div>

    );
}

export default Hero;