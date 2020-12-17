import React from 'react';


export const EpisodeCard = ({episodeData, characters, changeCharImg, popupIsOpen, changeStatePopup}) => {



    const getSrcName = (clickedName) => {
      let result = characters.find(obj => (obj.name === clickedName));
      let srcImg = result.img;
      changeCharImg(srcImg);
      changeStatePopup();
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

        </div>
            );

};
