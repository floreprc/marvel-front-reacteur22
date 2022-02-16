import axios from "axios";
import "./Characters.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characterList, setCharacterList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    try {
      const fetchData = async () => {
        let toAdd = "";
        if (searchText) {
          toAdd = `?name=${searchText}`;
        }
        const response = await axios.get(
          `https://marvel-back-reacteur22-flore.herokuapp.com/characters${toAdd}`
        );

        setCharacterList(response.data.results);
      };
      fetchData();
      setIsLoading(false);
    } catch {}
  }, [searchText, setSearchText]);
  return isLoading ? (
    <div>Ca charge !</div>
  ) : (
    <div className="character-title wrapped">
      <h2>LISTE DES PERSONNAGES MARVEL</h2>
      <div className="search-and-pagination">
        {" "}
        <div className="search-bar">
          <FontAwesomeIcon icon="magnifying-glass" />
          <input
            placeholder="RECHERCHER"
            onChange={(event) => setSearchText(event.target.value)}
          ></input>
        </div>
        <div>
          {" "}
          <FontAwesomeIcon icon="angle-left" />1
          <FontAwesomeIcon icon="angle-right" />
        </div>
      </div>

      <div className="character-caroussel">
        {characterList.map((elem, index) => {
          const thumbnail = `${elem.thumbnail.path}.${elem.thumbnail.extension}`;
          return (
            <div key={elem._id} className="character-box dark-grey-background">
              <img src={thumbnail} alt="" />
              <div className="character-info">
                <h2 className="character-info-header">
                  {elem.name.toUpperCase()}
                  {elem.description && (
                    <p>
                      <FontAwesomeIcon icon="angle-down" />
                    </p>
                  )}
                </h2>
                {elem.description && (
                  <div className="character-info-bottom">
                    <h2>{elem.name.toUpperCase()}</h2>
                    <p>{elem.description}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
