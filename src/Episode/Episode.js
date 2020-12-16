import React from 'react';
import style from './style.css'


export const EpisodeCard = ({episodeData, characters}) => {

    const getSrcName = (clickedName) => {
      let result = characters.filter(obj => (obj.name === clickedName));
        console.log(result[0].img);
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
                {episodeData.characters.map((item, id) => <button onClick={() => getSrcName(item)}>{item}</button>)}
            </div>
            {/*<button onClick={togglePopup}>{isOpen?*/}
            {/*<Popup*/}
            {/*text='Закрыть'*/}
            {/*closePopup={togglePopup}*/}
            {/*>*/}
            {/*<AboutCharacter character={episodeData}/>*/}
            {/*</Popup>*/}
            {/*: null*/}
            {/*}</button>*/}
            )}
        </div>
            );
};