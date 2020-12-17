import React, {useState} from 'react';
import style from './style.css'
import {Popup} from "../Popup/Popup";
import {AboutCharacter} from "../AboutCharacter/AboutCharacter";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {store} from "../redux/store";
import {changeStatePopup} from "../redux/actions";


export const EpisodeCard = ({episodeData, characters, changeCharImg, popupIsOpen, changeStatePopup}) => {



    const getSrcName = (clickedName) => {
      let result = characters.find(obj => (obj.name === clickedName));
      let srcImg = result.img;
      changeCharImg(srcImg);
      changeStatePopup.changeStatePopup();
      console.log(popupIsOpen);
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeCharImg: bindActionCreators(changeCharImg, dispatch),
//
//     }
// };
//
// const mapStateToProps = state => {
//     return {
//         charImg: state.charImg,
//     }
// };
// export default connect(mapStateToProps, mapDispatchToProps)(EpisodeCard)