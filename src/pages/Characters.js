import axios from "axios";
import { useState, useEffect } from "react";

const Characters = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(
          "https://marvel-back-reacteur22-flore.herokuapp.com/characters"
        );

        setCharacterList(response.data.results);
        setIsLoading(false);
      };
      fetchData();
    } catch {}
  }, []);
  return isLoading ? (
    <div>Ca charge !</div>
  ) : (
    <div>
      {characterList.map((elem, index) => {
        return (
          <div key={index}>
            {" "}
            <img src={elem.thumbnail.path} alt="" />
            {elem.thumbnail.path}
            {elem.name}
            {elem.description}
          </div>
        );
      })}
      {/* {characterList[0]} */}
    </div>
  );
};

export default Characters;
