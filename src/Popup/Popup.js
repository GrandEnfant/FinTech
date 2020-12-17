import React from 'react';
import style from './style.css'


export const Popup = ({closePopup, charImg}) => {

    return(
        <React.Fragment>
            <div className='popup'>
                <div className='popup_inner'>
                    <img src={charImg} />
              {/*<img src="https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136"/>*/}
                    <button onClick={closePopup}>Закрыть</button>
                </div>
            </div>


        </React.Fragment>

    )



};