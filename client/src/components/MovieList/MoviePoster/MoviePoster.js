import React from 'react';
import classes from './MoviePoster.css';

const MoviePoster = (props) => {
    if(props.imdbId !== null){
        return (
            <div className="column" key={props.imdbId}>
                <img src={props.img} alt={props.title} title={props.title} />
                <h2> {props.title} </h2>
            </div>
        )
        
    }
    
}

export default MoviePoster;