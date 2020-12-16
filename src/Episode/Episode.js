import React, {useState} from 'react';
import style from './style.css'
import {Popup} from "../Popup/Popup";


export const EpisodeCard = ({episodeData, characters}) => {
    const [isOpen, setOpen] = useState(false)
    const togglePopup = () => {
        setOpen(!isOpen);
    };

    const getSrcName = (clickedName) => {
      let result = characters.find(obj => (obj.name === clickedName));
        return result.img;

    };



    return (
        <div className={"episodeCard"}>
            <div className={"episode-number"}>
                {episodeData.episode}
            </div>
            <div className={"episodeTitle"}>
                {episodeData.title}
            </div>
            <div className={"episodeCharacters"}>
                {episodeData.characters.map((item, id) => <a onClick={() => getSrcName(item)}>{item}</a>)}
            </div>
            <button onClick={togglePopup}>{isOpen?
            <Popup
            text='Закрыть'
            closePopup={togglePopup}
            >
            <AboutCharacter character={episodeData} src={}/>
            </Popup>
            : null
            }</button>

        </div>
            );
};