import "./Loader.css";
import shield from "../assets/img/marvel_shield.png";

const Loader = () => {
  return (
    <div className="spinner">
      <img src={shield} alt="" />
    </div>
  );
};

export default Loader;
