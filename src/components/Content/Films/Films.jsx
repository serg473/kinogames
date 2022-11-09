import React from 'react';
import f from './Films.module.css'
import AllGenre from "./AllGenre/AllGenre";

const Films = (props) => {
    let allGenreFilms = props.allGenre.map(
        (filmsEl) => <AllGenre src = {filmsEl.preview} title = {filmsEl.title} />
    )
    return (
        <div className={f.card}>
            {allGenreFilms}
        </div>
    );
};

export default Films;