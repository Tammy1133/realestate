import introimg from "../utils/interior.jpg";
import "../css/intro.css";
import "../css/home.css";
import rent from "../utils/rent.jpg";
import buy from "../utils/buy.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const navigate = useNavigate();
  return (
    <div className="allIntro">
      <div className="intro">
        <img src={introimg} alt="introImg" className="introimg" />
        <div className="introDetails">
          <p className="top">Modern House</p>
          <p className="bottom">Make Better Life</p>
          <div className="pt-3 otherIntro">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aut
            id nulla in minima ab et officia. Similique, vitae necessitatibus?
          </div>
        </div>
      </div>

      <div className="belowIntro " style={{ paddingBottom: "90px" }}>
        <div className="home">
          <div className="home-item1">
            <div className="left">
              <img src={rent} alt="" />
            </div>
            <div className="right">
              <p>RENT A HOME</p>
              <h3 style={{ width: "200px" }}>
                Rental Homes for <br />
                Everyone
              </h3>
              <p>
                Explore Apartments, Villas, Homes <br /> and more...
              </p>

              <button
                className="button-18"
                role="button"
                onClick={() => {
                  navigate("/rent");
                }}
              >
                Explore Renting
              </button>
            </div>
          </div>
          <div className="home-item2">
            <div className="left">
              <img src={buy} alt="" />
            </div>
            <div className="right ">
              <p>BUY A HOME</p>
              <h3 style={{ width: "200px" }}>
                Find, Buy & Own Your <br />
                Dream House
              </h3>
              <p>
                Explore Apartments, Villas, Homes <br /> and more...
              </p>

              <button
                className="button-18"
                role="button"
                onClick={() => {
                  navigate("/buy");
                }}
              >
                Explore Buying
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
