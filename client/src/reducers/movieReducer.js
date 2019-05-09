import * as types from '../actions/types';

const initialState = {
    movieList:[],
    loading: false
}

export default function(state =  initialState,action){
    switch (action.type) {
        case types.GET_MOVIE_TITLES: 
            if(action.payload.data.Response && action.payload.data.movies.length >= 1){
                return {
                    ...state,
                    movieList:action.payload.data.movies,
                    loading:true,
                    noMovieFlag:false
                }
            }

            break;

        case types.NO_MOVIE_RECEIVED:
                return {
                    ...state,
                    movieList:{},
                    noMovieFlag:true
                }
                break;
            case types.CLEAR_MOVIE_TITLES:
                return {
                    ...state,
                    movieList:{}
                }
            
        default:
            return state;
    }
}