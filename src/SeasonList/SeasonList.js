import React from 'react';
import './style.css'
const EpisodeCard = React.lazy(() => import("./Episode/Episode"));

const SeasonList = ({item, numberSeason, changeCharImg, dataCharacters, changeStatePopup, popupIsOpen}) => {
   return (
       <React.Fragment>
       <div className={'title'}> Season {item[numberSeason].season} </div>
       <div className={'season'}>
           {item.map((elem, idx) =>
               <React.Suspense key={idx} fallback={<div>Loading...</div>}>
               <EpisodeCard changeCharImg={changeCharImg}
                            episodeData={elem}
                            dataCharacters={dataCharacters}
                            changeStatePopup={changeStatePopup}
                            popupIsOpen={popupIsOpen.popupIsOpen}
                            />
               </React.Suspense>)}
       </div>
       </React.Fragment>
   )
}

export default SeasonList;


