import homeImage from "../assets/img/home_picture.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-page ">
        {" "}
        <img src={homeImage} alt="" />
      </div>
    </div>
  );
};

export default Home;
