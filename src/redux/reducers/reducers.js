
import {Types} from "../types";

const imgInitialState = {charImg: ''};

const statusPopupInitial = {popupIsOpen: false};

const DataSerialInitial = {dataSerial: []};

export const charImgReducer = (state = imgInitialState, action) => {
    switch (action.type) {
        case Types.CHANGE_CHAR_IMG: {
            let copiedState = state;
            copiedState.charImg = action.payload;
            return {...copiedState};
        }
        default: return state;
    }
};

export const statePopupReducer = (state = statusPopupInitial, action) => {
    switch (action.type) {
        case Types.CHANGE_STATE_POPUP: {
            let copiedState = state;
            copiedState.popupIsOpen = !action.payload;
            return {...copiedState}
        }
        default: return state;
    }
};


export const dataSerialReducer = (state = DataSerialInitial, action) => {

    switch (action.type) {
        case Types.CHANGE_SERIAL_DATA: {
            let copiedState = state;
            copiedState.dataSerial = action.payload;
            console.log('tut');
            return {...copiedState}
        }
        default: return state;
    }
};
