import { Link, useNavigate } from "react-router-dom";
import logo from "../utils/rentzylog.png";
import "../css/navbar.css";

const MyNav = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div>
        <nav className=" ">
          <div className=" nav-container">
            <Link to="/">
              <img className="logo " src={logo} />
            </Link>
          </div>
          <div className="contact-us-nav">
            <button
              className="button-18 nav-button"
              style={{ fontSize: "16px" }}
              role="button"
              onClick={() => navigate("/search")}
            >
              SEARCH
            </button>
          </div>
        </nav>

        {/* Navbar section end */}
      </div>
    </div>
  );
};

export default MyNav;
