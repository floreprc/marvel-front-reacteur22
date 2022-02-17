import "./Navigation.css";
import { Link } from "react-router-dom";
import logoWhite from "../assets/img/logo_white.png";
import logoColored from "../assets/img/logo_colored.png";

const Navigation = () => {
  return (
    <div className="dark-grey-background nav">
      <div className="nav-bar wrapped">
        <Link to="/">
          <div className="image-wrapper">
            <img src={logoWhite} className="image" alt="" />
            <img src={logoColored} className="image-hover" alt="" />
          </div>
        </Link>
        <div className="nav-buttons">
          {" "}
          <Link to="/characters">
            <button>PERSONNAGES</button>
          </Link>
          <Link to="/comics">
            <button>COMICS</button>
          </Link>
          <Link to="/favorites">
            <button>FAVORIS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
