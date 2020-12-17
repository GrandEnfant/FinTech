import {createStore} from 'redux';
import {rootReducer} from "./reducers/rootReducers";

export const store = createStore(rootReducer);