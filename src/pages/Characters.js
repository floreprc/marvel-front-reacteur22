import axios from "axios";
import "./Characters.css";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characterList, setCharacterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const resultsForEachPage = 100;

  useEffect(() => {
    try {
      const fetchData = async () => {
        let toAdd = "";

        if (searchText) {
          toAdd += `?name=${searchText}`;
        }

        if (pageNumber > 1) {
          const toSkip = pageNumber * resultsForEachPage;

          if (searchText) {
            toAdd += `&skip=${toSkip}`;
          } else {
            toAdd += `?skip=${toSkip}`;
          }
        }
        const response = await axios.get(
          `https://marvel-back-reacteur22-flore.herokuapp.com/characters${toAdd}`
        );

        setCharacterList(response.data.results);
      };
      fetchData();
      setIsLoading(false);
    } catch {}
  }, [searchText, pageNumber, resultsForEachPage]);
  return (
    <div className="title wrapped">
      <h2>LISTE DES PERSONNAGES MARVEL</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="search-and-pagination">
            <div className="search-bar">
              <FontAwesomeIcon icon="magnifying-glass" />
              <input
                placeholder="RECHERCHER"
                onChange={(event) => {
                  setSearchText(event.target.value);
                  setPageNumber(1);
                }}
              ></input>
            </div>
            <div className="pagination">
              {pageNumber > 1 && (
                <FontAwesomeIcon
                  icon="angle-left"
                  onClick={() => {
                    setPageNumber(pageNumber - 1);
                  }}
                />
              )}
              <p>{pageNumber}</p>
              {characterList.length === resultsForEachPage && (
                <FontAwesomeIcon
                  icon="angle-right"
                  onClick={() => {
                    setPageNumber(pageNumber + 1);
                  }}
                />
              )}
            </div>
          </div>
          <div className="character-caroussel">
            {characterList.map((elem, index) => {
              const thumbnail = `${elem.thumbnail.path}.${elem.thumbnail.extension}`;
              return (
                <div
                  key={elem._id}
                  className="character-box dark-grey-background"
                >
                  <Link to={`/character/${elem._id}`}>
                    <img src={thumbnail} alt="" />
                  </Link>
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
        </>
      )}
    </div>
  );
};

export default Characters;
