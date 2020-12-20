import React from 'react';
import './style.css';
import closeBtn from './close_img.png'

export const Popup = ({closePopup, src}) => {
    return (
        <React.Fragment>
            <div className='popup'>
                <div className='popup_inner'>
                    <button className={'close-btn'} onClick={closePopup}> <img alt={'Закрыть'} src={closeBtn}/></button>
                    <img className={"img"} src={src}/>
                </div>
            </div>
        </React.Fragment>
    )
};