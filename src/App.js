import './App.css';
import {useEffect, useState} from "react";
import {EpisodeCard} from "./Episode/Episode";
import {Popup} from "./Popup/Popup";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeCharImg} from "./redux/actions";
import {changeStatePopup} from "./redux/actions";
import {changeSerialData} from "./redux/actions";


function App({
                 changeCharImg,
                 charImg,
                 changeStatePopup,
                 popupIsOpen,
                 dataSerial,
                 changeSerialData
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
        }).then(() => {
        setIsLoaded(true);
    })
        .catch((error)=> {
            setIsLoaded(false);
            setError(error);
        });
    console.log('rerendered')
}, [dataSerial.dataSerial]);

    const getGroup = (array) => {
        if(array.data !== undefined) {
            console.log(array);
            console.log(array);
            console.log(array);
            let mapCollection = new Map();
            let objTemp = {};
            let values = array.data.map((el, idx) => array.data.filter(elem => +elem.season === +array.data[idx].season));
            let arrTempEpisode = values.map(e => e.map(el => el));
            let arrTempSeason = values.map(e => e[0].season).forEach((e, i) => mapCollection.set(e, arrTempEpisode[i]));
            const collection = [];
            for (let i = 1; i <= mapCollection.size; i++) {
                collection.push(mapCollection.get(String(i)))
            }
            return collection;
        }
    };


        const dataSerialGroup = getGroup(dataSerial);


    console.log(dataSerialGroup);

    return (
        <div className="App">
            {!!error && error}
            {!isLoaded ? <div> loading... </div> :
                <div>

                    {dataSerialGroup.map((item, id) => <div key={id} className={"season"}> Season {item.season}
                {/*{item.map((elem, idx) => <EpisodeCard changeCharImg={changeCharImg}*/}
                                                      {/*episodeData={elem}*/}
                                                      {/*characters={characters}*/}
                                                      {/*changeStatePopup={changeStatePopup}*/}
                                                      {/*popupIsOpen={popupIsOpen.popupIsOpen}*/}
                                                      {/*key={idx}/>)}*/}
            {/*</div>)}*/}
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