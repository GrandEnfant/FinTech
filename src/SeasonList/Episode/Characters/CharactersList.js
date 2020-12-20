import React from 'react';


 const CharactersList = ({episodeData, getSrcName}) => {

    return (
        <div className={"episodeCharacters"}>
            <ul>
                {episodeData.characters.map((item, id) => <li key={id}><a onClick={() => getSrcName(item)}>{item}</a></li>)}</ul>
        </div>
    )
}

export default CharactersList