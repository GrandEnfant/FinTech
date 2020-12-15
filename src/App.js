import './App.css';
import {useEffect, useState} from "react";
import {EpisodeCard} from "./Episode/Episode";

function App() {

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://breakingbadapi.com/api/episodes")
        .then(res => res.json())
        .then((result) => {setIsLoaded(true);
              setItems(result)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            })
  }, [])
console.log(items);



    const getGroup = (array) =>
    {
        let mapCollection = new Map();
        let objTemp = {};
        let values = array.map((el, idx) => array.filter(elem => +elem.season === +array[idx].season))
            // .filter(e => objTemp.hasOwnProperty(e)? false : (objTemp[e] = true));
        let arrTempEpisode = values.map(e => e.map(el => el));
        let arrTempSeason = values.map(e => e[0].season).forEach((e, i) => mapCollection.set(e, arrTempEpisode[i]))
        return mapCollection;
    };

let seasonInformation = getGroup(items.filter(elem => elem.series === "Breaking Bad"));

    const func = seasonInformation => {
        const collection = [];
        for (let i=1; i <= seasonInformation.size; i++){
            collection.push(seasonInformation.get(String(i)))
    }
    return collection
    }
   const collection = func(seasonInformation);
  return (
    <div className="App">

      {collection.map((item, key) => <div className={"season"}> Season {item[0].season}
            {item.map((elem, idx) => <EpisodeCard episodeData={elem}/>)}
        </div>)}

    </div>
  );
}

export default App;
