import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App dispatch = {store.dispatch.bind(store)} store={state}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}

rerenderTree(store.getState());

store.subscribe(rerenderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
