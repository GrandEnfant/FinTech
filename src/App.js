import './App.css';
import {useEffect, useState} from "react";
import {EpisodeCard} from "./Episode/Episode";
import {Popup} from "./Popup/Popup";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeCharImg} from "./redux/actions";
import {store} from "./redux/store";
import {changeStatePopup} from "./redux/actions";

function App({
                 changeCharImg,
                 charImg,
                 changeStatePopup,
                 popupIsOpen
             }) {

    const [serial, setSerial] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://breakingbadapi.com/api/episodes?series=Breaking+Bad")
            .then(res => res.json())
            .then((result) => {
                    setIsLoaded(true);
                    setSerial(result)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                });
        fetch("https://breakingbadapi.com/api/characters")
            .then(res => res.json())
            .then((result) => {
                    setIsLoaded(true);
                    setCharacters(result)
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
    }, []);

    const getGroup = (array) => {
        let mapCollection = new Map();
        let objTemp = {};
        let values = array.map((el, idx) => array.filter(elem => +elem.season === +array[idx].season));
        let arrTempEpisode = values.map(e => e.map(el => el));
        let arrTempSeason = values.map(e => e[0].season).forEach((e, i) => mapCollection.set(e, arrTempEpisode[i]))
        return mapCollection;
    };

    let seasonInformation = getGroup(serial);

    const func = seasonInformation => {
        const collection = [];
        for (let i = 1; i <= seasonInformation.size; i++) {
            collection.push(seasonInformation.get(String(i)))
        }
        return collection
    };
    const collection = func(seasonInformation);
    return (
        <div className="App">

            {collection.map((item, id) => <div key={id} className={"season"}> Season {item[0].season}
                {item.map((elem, idx) => <EpisodeCard changeCharImg={changeCharImg}
                                                      episodeData={elem}
                                                      characters={characters}
                                                      changeStatePopup={changeStatePopup}
                                                      popupIsOpen={popupIsOpen.popupIsOpen}
                                                      key={idx}/>)}
            </div>)}

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
        popupIsOpen: state.popupIsOpen
    }
};
const mapDispatchToProps = dispatch => {
    return {
        changeCharImg: bindActionCreators(changeCharImg, dispatch),
        changeStatePopup: bindActionCreators(changeStatePopup, dispatch)
    }
};


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;