import * as types from './types';
import axios from '../axios-instance';


export const getMovieTitles = movieName => dispatch => {

    const mKey = 'movie_name_'+movieName;
    const cachedMovieDetailsString =  localStorage.getItem(mKey);

    if(cachedMovieDetailsString !== null){
        const cachedMovieDetails = JSON.parse(cachedMovieDetailsString);
        const currentTimeStamp = new Date().getTime().toString();
        if(currentTimeStamp < cachedMovieDetails.expirationTime) {
            dispatch({
                type:types.GET_MOVIE_TITLES,
                payload:cachedMovieDetails.movieDetails,
                movieName:movieName,
            })
            return;
        }
    }
    
    axios
        .get('/api/search',{
            params:{
                'keyword':movieName
            }
        })
        .then(res => {    
            
                var t = new Date();
                const expirationTime = t.setSeconds(t.getSeconds() + 30);
                const movieCacheData = {
                    movieDetails: res,
                    expirationTime:expirationTime
                }
                localStorage.removeItem(mKey);
                // Caching Movie Data for 30 Seconds
                localStorage.setItem(mKey, JSON.stringify(movieCacheData));
                dispatch({
                    type:types.GET_MOVIE_TITLES,
                    payload:res,
                    movieName:movieName,
                })
             
            
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type:types.NO_MOVIE_RECEIVED,
                movieName:movieName
            });
        });
};

export const clearMovieTitles = () => dispatch => {
    dispatch({
        type:types.CLEAR_MOVIE_TITLES
    })
}