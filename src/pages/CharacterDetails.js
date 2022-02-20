import "./CharacterDetails.css";
import background from "../assets/img/background_details.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const CharacterDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState([]);
  const [characterComics, setCharacterComics] = useState([]);
  const [thumbnail, setThumbnail] = useState("");

  const { id } = useParams();

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          `https://marvel-back-reacteur22-flore.herokuapp.com/character?characterId=${id}`
        );
        setCharacter(response.data);
        setThumbnail(
          response.data.thumbnail.path + "." + response.data.thumbnail.extension
        );
      };
      const fetchComics = async () => {
        const response = await axios.get(
          `https://marvel-back-reacteur22-flore.herokuapp.com/comics?id=${id}`
        );
        setCharacterComics(response.data);
        setIsLoading(false);
        console.log(response.data);
      };
      fetchData();
      fetchComics();
    } catch (error) {}
  }, [id]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="background-details">
      <img src={background} className="background-image-details" alt="" />
      <div className="character-details-box wrapped">
        <div className="main-infos">
          <img src={thumbnail} alt="" />
          <div>
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        </div>

        <div className="comics-character-caroussel">
          {characterComics.comics.map((elem, index) => {
            const thumbnailComic = `${elem.thumbnail.path}.${elem.thumbnail.extension}`;
            return (
              <div key={elem._id}>
                <img src={thumbnailComic} alt="" />
                <p>{elem.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
