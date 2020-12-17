
import {combineReducers} from 'redux';
import {charImgReducer} from "./CharImgReducer";
import {statePopupReducer} from "./CharImgReducer";

export const rootReducer = combineReducers({
    charImg: charImgReducer,
    popupIsOpen: statePopupReducer
});