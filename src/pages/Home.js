// import homeImage from "../assets/img/home_picture.png";
import homeImageBis from "../assets/img/home_picture_bis.png";
import "./Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-picture-container">
        <img src={homeImageBis} alt="" />

        <div className="home-title-container">
          <div className="home-title wrapped">
            <p>
              {/* Bievenue sur le site (non)-officiel des personnages et comics
              Marvel. - La dernière fois qu’on s’est vu, vous vouliez tuer
              tout-le-monde. Vous en êtes où aujourd’hui ? - C’est variable, ça
              dépend des moments. */}
              <FontAwesomeIcon icon="quote-left" color="red" /> les choix les
              plus durs nécessitent la volonté la plus forte
            </p>
          </div>
        </div>
      </div>
      <div className="home-menu wrapped">
        <h2>Accéder à la liste des :</h2>
        <div className="nav-buttons">
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

export default Home;
