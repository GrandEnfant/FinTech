import './App.css';
import {useEffect, useState} from "react";
import {EpisodeCard} from "./Episode/Episode";
import {Popup} from "./Popup/Popup";
import {AboutCharacter} from "./AboutCharacter/AboutCharacter";

function App() {


const [isOpen, setOpen] = useState(false)
   const togglePopup = () => {
        setOpen(!isOpen);
    };
  const [serial, setSerial] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://breakingbadapi.com/api/episodes?series=Breaking+Bad")
        .then(res => res.json())
        .then((result) => {setIsLoaded(true);
              setSerial(result)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            });
      fetch("https://breakingbadapi.com/api/characters")
          .then(res => res.json())
          .then((result) => {setIsLoaded(true);
                  setCharacters(result)
              },
              (error) => {
                  setIsLoaded(true);
                  setError(error);
              })
  }, []);
console.log(serial);
console.log(characters)


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

let seasonInformation = getGroup(serial);

    const func = seasonInformation => {
        const collection = [];
        for (let i=1; i <= seasonInformation.size; i++){
            collection.push(seasonInformation.get(String(i)))
    }
    return collection
    };
   const collection = func(seasonInformation);
  return (
    <div className="App">

      {collection.map((item, id) => <div key={id} className={"season"}> Season {item[0].season}
          {item.map((elem, idx) => <EpisodeCard episodeData={elem} characters={characters} key={idx}/>)}
        </div>)}
          {/*<button onClick={togglePopup}>{isOpen?*/}
              {/*<Popup*/}
                  {/*text='Закрыть'*/}
                  {/*closePopup={togglePopup}*/}
              {/*>*/}
                  {/*<AboutCharacter character={elem}/>*/}
              {/*</Popup>*/}
              {/*: null*/}
          {/*}</button>)}*/}
    </div>

);
}

export default App;
