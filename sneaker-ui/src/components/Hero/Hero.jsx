import ButtonDefaul from "../ButtonDefaul/ButtonDefaul";


function Hero() {
    return(
       <div className="heroContainer">
        <div className="heroText">
            <h2 className="heroTitle">Find Your Dream Sneakers</h2>
            <p className="heroText">Find youus shoes  from our  various collections. Hero  shoes are  endies and profit is also endsless</p>
            <ButtonDefaul
            textButton="Explore More"
            ></ButtonDefaul>

        </div>
       </div>

    );
}

export default Hero;