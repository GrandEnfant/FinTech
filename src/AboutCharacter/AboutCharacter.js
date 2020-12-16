import React from 'react';
import style from './style.css'


export const AboutCharacter = ({character}) => {
    console.log(character);
    console.log(character);
    console.log(character);
    console.log(character);


    return(
        <React.Fragment>
                <div className='popup_inner'>
                    <img className={"image"} src="`https://breakingbadapi.com/api/characters/{character.id}`">{character.img} </img>
                    {/*<button onClick={this.props.closePopup}>Закрыть</button>*/}
            </div>


        </React.Fragment>

    )



};