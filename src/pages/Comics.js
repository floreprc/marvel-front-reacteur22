import "./Comics.css";
import axios from "axios";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Comics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [comicsList, setComicsList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const resultsForEachPage = 100;

  useEffect(() => {
    try {
      const fetchData = async () => {
        let toAdd = "";
        if (searchText) {
          toAdd += `?title=${searchText}`;
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
          `https://marvel-back-reacteur22-flore.herokuapp.com/comics${toAdd}`
        );

        setComicsList(response.data.results);
        console.log(response.data);
        setIsLoading(false);
      };
      fetchData();
    } catch {}
  }, [searchText, pageNumber, resultsForEachPage]);

  return (
    <div className="title wrapped">
      <h2>LISTE DES COMICS MARVEL</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="search-and-pagination">
            <div className="search-bar">
              <FontAwesomeIcon icon="magnifying-glass" />
              <input
                placeholder="RECHERCHER"
                onChange={(event) => setSearchText(event.target.value)}
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
              {comicsList.length === resultsForEachPage && (
                <FontAwesomeIcon
                  icon="angle-right"
                  onClick={() => {
                    setPageNumber(pageNumber + 1);
                  }}
                />
              )}
            </div>
          </div>
          <div className="comics-caroussel">
            {comicsList.map((elem, index) => {
              const thumbnail = `${elem.thumbnail.path}.${elem.thumbnail.extension}`;
              return (
                <div className="comics-box" key={elem._id}>
                  <img src={thumbnail} alt="" />
                  <p>{elem.title}</p>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Comics;
