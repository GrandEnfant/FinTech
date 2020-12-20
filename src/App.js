import './App.css';
import React from 'react';
import {useEffect, useState} from "react";
import {Popup} from "./Popup/Popup";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeStatePopup, changeSerialData, changeCharactersData, changeCharacterPhoto} from "./redux/actions";
const SeasonList = React.lazy(() => import("./SeasonList/SeasonList"));

function App({
                 changeCharImg,
                 characterPhoto,
                 changeStatePopup,
                 popupIsOpen,
                 dataSerial,
                 changeSerialData,
                 changeCharactersData,
                 dataCharacters
             }) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        fetch("https://breakingbadapi.com/api/episodes?series=Breaking+Bad")
            .then(res => res.json())
            .then((result) => {
                changeSerialData(result);
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
                changeCharactersData(result);
            }).then(() => {
            setIsLoaded(true);
        })
            .catch((error) => {
                setIsLoaded(false);
                setError(error);
            });
    }, [dataSerial.dataSerial]);

    const groupBySeason = (array) => {
        if (array.data !== undefined) {
            let mapCollection = new Map();
            let filteredSeason = array.data.map((el, idx) => array.data.filter(elem => +elem.season === +array.data[idx].season));
            let arrTempEpisode = filteredSeason.map(e => e.map(el => el));
            let arrTempSeason = filteredSeason.map(e => e[0].season).forEach((e, i) => mapCollection.set(e, arrTempEpisode[i]));
            const groupedEpisodes = [];
            for (let i = 1; i <= mapCollection.size; i++) {
                groupedEpisodes.push(mapCollection.get(String(i)))
            }
            return groupedEpisodes;
        }
    };
    const groupedEpisodes = groupBySeason(dataSerial);

    return (
        <div className="App">
            {!!error && error}
            {!isLoaded ? <div> loading... </div> :
                <React.Suspense fallback={<div>Loading...</div>}>
                <div>
                    {groupedEpisodes.map((item, id) =>
                             <SeasonList key={id} numberSeason={id} item={item} changeCharImg={changeCharImg} dataCharacters={dataCharacters}
                                    changeStatePopup={changeStatePopup} popupIsOpen={popupIsOpen}/>
                    )}
                </div>
                </React.Suspense>
                    }
                      {popupIsOpen.popupIsOpen ?
                <Popup
                    text='Закрыть'
                    src={characterPhoto.characterPhoto}
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
        characterPhoto: state.characterPhoto,
        popupIsOpen: state.popupIsOpen,
        dataSerial: state.dataSerial,
        dataCharacters: state.dataCharacters
    }
};
const mapDispatchToProps = dispatch => {
    return {
        changeCharImg: bindActionCreators(changeCharacterPhoto, dispatch),
        changeStatePopup: bindActionCreators(changeStatePopup, dispatch),
        changeSerialData: bindActionCreators(changeSerialData, dispatch),
        changeCharactersData: bindActionCreators(changeCharactersData, dispatch)
    }
};


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default ConnectedApp;