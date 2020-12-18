import {Types} from "./types";


export function changeCharImg(charImg) {
    return {
        type: Types.CHANGE_CHAR_IMG,
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