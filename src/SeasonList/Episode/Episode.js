import React from 'react';
import './style.css'
const CharactersList = React.lazy(() => import("./Characters/CharactersList"));

 const EpisodeCard = ({episodeData, dataCharacters, changeCharImg, changeStatePopup}) => {
    const getSrcName = (clickedName) => {
        let result = dataCharacters.data.find(obj => (obj.name === clickedName));
        if (result !== undefined) {
            let srcImg = result.img;
            changeCharImg(srcImg);
            changeStatePopup();
        }
    };

    return (
        <div className={"episode-card"}>
            <div className={"episode-number"}>
                Episode {episodeData.episode}
            </div>
            <div className={"episode-title"}>
                {episodeData.title}
            </div>
            <React.Suspense fallback={<div>Loading...</div>}>
            <CharactersList episodeData={episodeData} getSrcName={getSrcName}/>
            </React.Suspense>
        </div>
    );
};
export default EpisodeCard