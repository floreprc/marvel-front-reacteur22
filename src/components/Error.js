import "./Error.css";
import errorPicture from "../assets/img/error_picture.png";

const Error = () => {
  return (
    <div>
      <h2>404 PAGE NOT FOUND</h2>
      <p>$#&%, you broke someting ! Just kidding</p>
      <img src={errorPicture} alt="" />
      <p>
        Check that you typed the address correctly, go back to your previous
        page or try using our site search to find something specific.
      </p>
    </div>
  );
};

export default Error;
