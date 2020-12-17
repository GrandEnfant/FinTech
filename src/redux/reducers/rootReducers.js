
import {combineReducers} from 'redux';
import {charImgReducer} from "./reducers";
import {statePopupReducer} from "./reducers";

export const rootReducer = combineReducers({
    charImg: charImgReducer,
    popupIsOpen: statePopupReducer
});