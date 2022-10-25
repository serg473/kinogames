import di from './DataInformation.module.css';
import React from 'react';
import DataInfItem from "./DataInfItem/DataInfItem";
import {
    actionCreaterAddFilms,
    actionCreaterGetValueId,
    actionCreaterGetValueSrc,
    actionCreaterGetValueTitle
} from "../../../Redux/reducerSerial";


const DataInformation = (props) =>{
    debugger;
    let linkId = React.createRef();
    let linkTitle = React.createRef();
    let linkSrc = React.createRef();
    const getValueId = () =>{
        let valueTextId = linkId.current.value;
        let action = actionCreaterGetValueId(valueTextId);
        props.dispatch(action);
    }
    const getValueTitle = () =>{
        let valueTextTitle = linkTitle.current.value;
        let action = actionCreaterGetValueTitle(valueTextTitle);
        props.dispatch(action);
    }
    const getValueSrc = () =>{
        let valueTextSrc = linkSrc.current.value;
        let action = actionCreaterGetValueSrc(valueTextSrc);
        props.dispatch(action);
    }



    const addFilm = () =>{
        let action = actionCreaterAddFilms();
        props.dispatch(action)
    }
    let filmsItem = props.store.allGenre.map(el => <DataInfItem id = {el.id} dateYear = {el.dateYear} preview = {el.preview} title = {el.title}/>)
    return(
        <div className={di.news}>
            {filmsItem}
            <div className={di.form_add}>
                <h3>Добавить новый сериал: </h3>
                <input onChange={getValueId} ref={linkId} value={props.store.informationPost.textId} placeholder='Введите id: ' type="text"/>
                <input onChange={getValueTitle} ref={linkTitle} value={props.store.informationPost.textTitle} placeholder='Введите название сериала: ' type="text"/>
                <input onChange={getValueSrc} ref={linkSrc} value={props.store.informationPost.textSrc} placeholder='Введите url картинки: ' type="text"/>
                <button onClick={addFilm} className={di.add}>Добавить в хранилище</button>
            </div>
        </div>
    )
}
export default DataInformation;