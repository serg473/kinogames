import React from 'react';
import aG from './AllGenre.module.css'

const AllGenre = (props) => {
    return (
        <div className={aG.card_item}>
            <img src={props.src} alt=""/>
            <h4>{props.title}</h4>
        </div>
    );
};

export default AllGenre;