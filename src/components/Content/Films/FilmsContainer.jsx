import React from 'react';
import {connect} from "react-redux";
import Films from "./Films";

let mapStateToProps = (state) => {
    return{
        allGenre: state.genre.allGenre

    }
}

let FilmsContainer = connect(mapStateToProps)(Films);
export default FilmsContainer;