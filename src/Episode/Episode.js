import React from 'react';
import style from './style.css'


export const EpisodeCard = ({episodeData, characters, changeCharImg, popupIsOpen, changeStatePopup}) => {



    const getSrcName = (clickedName) => {
      let result = characters.find(obj => (obj.name === clickedName));

        if(result !== undefined) {
            let srcImg = result.img;
            changeCharImg(srcImg);
            changeStatePopup();
      };
    };



    return (
        <div className={"episodeCard"}>
            <div className={"episode-number"}>
                {episodeData.episode}
            </div>
            <div className={"episodeTitle"}>
                {episodeData.title}
            </div>
            <div className={"episodeCharacters"}><ul>
                {episodeData.characters.map((item, id) => <li><a onClick={() => getSrcName(item)}>{item}</a></li>)}</ul>
            </div>

        </div>
            );

};
