import React from 'react';
import style from './style.css'


export const Popup = (props) => {
console.log(props)
console.log(props)
console.log(props)
console.log(props)


    return(
        <React.Fragment>
            <div className='popup'>
                <div className='popup_inner'>
                    {props.children}
                    {/*<button onClick={this.props.closePopup}>Закрыть</button>*/}
                </div>
            </div>


        </React.Fragment>

    )



};