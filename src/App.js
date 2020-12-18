import './App.css';
import { useEffect, useState } from "react";
import { EpisodeCard } from "./Episode/Episode";
import { Popup } from "./Popup/Popup";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeCharImg } from "./redux/actions";
import { changeStatePopup } from "./redux/actions";
import { changeSerialData } from "./redux/actions";


function App({
  changeCharImg,
  charImg,
  changeStatePopup,
  popupIsOpen,
  dataSerial
}) {

  const [serial, setSerial] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("https://breakingbadapi.com/api/episodes?series=Breaking+Bad")
      .then(res => res.json())
      .then((result) => {
        changeSerialData(result);
        setSerial(result)
      }).then(() => {
        setIsLoaded(true);
      })
      .catch((error) => {
        setIsLoaded(false);
        setError(error);
      });

    fetch("https://breakingbadapi.com/api/characters")
      .then(res => res.json())
      .then((result) => {
        setCharacters(result);
        setIsLoaded(true);
      }).then(() => {
        setIsLoaded(true);
      })
      .catch(error => {
        setIsLoaded(false);
        setError(error);
      })
  }, [dataSerial])

  return (
    <div className="App">
      {!!error && error}
      {!isLoaded ? <div> loading... </div> :
        <div>
          {JSON.stringify(serial)}
          {/* {serial.map((item, id) => <div key={id} className={"season"}> Season {item[0].season}
            {item.map((elem, idx) => <EpisodeCard changeCharImg={changeCharImg}
              episodeData={elem}
              characters={characters}
              changeStatePopup={changeStatePopup}
              popupIsOpen={popupIsOpen.popupIsOpen}
              key={idx} />)}
          </div>)} */}
        </div>}

      {popupIsOpen.popupIsOpen ?
        <Popup
          text='Закрыть'
          src={charImg.charImg}
          closePopup={changeStatePopup}
        >
        </Popup>
        : null
      }
    </div>

  );
}


const mapStateToProps = state => {
  return {
    charImg: state.charImg,
    popupIsOpen: state.popupIsOpen,
    dataSerial: state.dataSerial
  }
};
const mapDispatchToProps = dispatch => {
  return {
    changeCharImg: bindActionCreators(changeCharImg, dispatch),
    changeStatePopup: bindActionCreators(changeStatePopup, dispatch),
    changeSerialData: bindActionCreators(changeSerialData, dispatch),
  }
};


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;