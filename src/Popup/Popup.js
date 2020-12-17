import React from 'react';
import style from './style.css'


export const Popup = ({closePopup, src}) => {
    console.log(closePopup);
    return(
        <React.Fragment>
            <div className='popup'>
                <div className='popup_inner'>
                    <img className={"img"} src={src} />
                    <button onClick={closePopup}>Закрыть</button>
                </div>
            </div>


        </React.Fragment>

    )



};