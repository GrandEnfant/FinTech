import {Types} from "./types";


export function changeCharacterPhoto(charImg) {
    return {
        type: Types.CHANGE_CHARACTER_PHOTO,
        payload: charImg
        }
    }

export function changeStatePopup(isOpen) {
    return {
        type: Types.CHANGE_STATE_POPUP,
        payload: isOpen
    }
}


export function changeSerialData(dataSerial) {
    return {
        type: Types.CHANGE_SERIAL_DATA,
        payload: {data: dataSerial}
    }
}


export function changeCharactersData(dataCharacters) {
    return {
        type: Types.CHANGE_CHARACTERS_DATA,
        payload: {data: dataCharacters}
    }
}