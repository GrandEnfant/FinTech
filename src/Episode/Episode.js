import React from 'react';
import style from './style.css'


export const EpisodeCard = ({episodeData}) => {

    return (
        <div className={"episodeCard"}>
            <div className={"episode-number"}>
                {episodeData.episode}
            </div>
            <div className={"episodeTitle"}>
                {episodeData.title}
            </div>
        </div>
            );
};