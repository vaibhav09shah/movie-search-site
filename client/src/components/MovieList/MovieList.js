import React , { Component } from 'react';
import { connect } from 'react-redux';
import classes from './MovieList.css'
import MoviePoster from './MoviePoster/MoviePoster';

class MovieList extends Component {

    render(){
        
        console.log(this.props.movieState);
        const movieListing = this.props.movieState.movieList;
        let movieListHTML = '';
        if(movieListing.length > 0) {
            movieListHTML = movieListing.map( (value,key) => (
                value !== null ?
                        <MoviePoster 
                                img={value.Poster} 
                                key={'movieposterID'+key} 
                                imdbId={value.imdbID} 
                                movieno={key} 
                                title={value.Title} 
                        />
                        : ''
         ))
        }
            
        if(this.props.movieState.noMovieFlag) {
            movieListHTML = ' Sorry .. We did not find any Movies !!';
        }
        return(
            <div className="noMovie">
                {movieListHTML}
            </div>
        )
        
    }
}


const mapStateToProps = state => ({
    movieState: state.movies
});

const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieList);