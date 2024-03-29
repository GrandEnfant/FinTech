import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./redux/store";


const app = (
    <Provider store={store}>
        <App />
    </Provider>
);


render(app, document.getElementById('root'));
reportWebVitals();
