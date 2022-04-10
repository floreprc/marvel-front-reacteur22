import Cookies from "js-cookie";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Favorites.css";

const Favorites = () => {
  const [characterFavoriteList, setCharacterFavoriteList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      let favoriteResult = [];
      const fetchData = async () => {
        const response = await axios.get(
          `https://marvel-back-reacteur22-flore.herokuapp.com/characters`
        );
        for (let i = 0; i < response.data.results.length; i++) {
          const result = Cookies.get(response.data.results[i]._id);
          console.log("result", result);
          if (result) {
            const responseById = await axios.get(
              `https://marvel-back-reacteur22-flore.herokuapp.com/character?characterId=${result}`
            );
            favoriteResult.push(responseById.data);
          }
        }
        setCharacterFavoriteList(favoriteResult);
        setIsLoading(false);
      };
      fetchData();
    } catch {}
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="title wrapped favorites">
      <h2>Liste des personnages favoris</h2>
      {characterFavoriteList ? (
        <div className="character-caroussel">
          {characterFavoriteList.map((elem, index) => {
            const thumbnail = `${elem.thumbnail.path}.${elem.thumbnail.extension}`;

            return (
              <div
                key={elem._id}
                className="character-box dark-grey-background"
              >
                <img src={thumbnail} alt="" />
                {elem.name}
                <div className="character-info">
                  <h2 className="character-info-header">
                    {elem.name.toUpperCase()}{" "}
                  </h2>
                </div>
              </div>
            );
          })}{" "}
        </div>
      ) : (
        <p>Aucun favoris</p>
      )}
    </div>
  );
};

export default Favorites;
