import {combineReducers, createStore} from "redux";
import reducerFilms from "./reducerFilms";

let reducers = combineReducers(
    {genre: reducerFilms}
)

let store = createStore(reducers);

window.store = store;
export default store

