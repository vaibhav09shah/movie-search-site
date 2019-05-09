import React ,  { Component } from 'react';
import classes from './MovieForm.css'
import { connect } from 'react-redux'
import * as types from '../../actions/itemActions';

class MovieForm extends Component {

    state = {
        movieName:''
    }

    constructor(props){
        super(props);
        this.timeout = 0
    }

    getMovieName = (event) => {
        this.setState({
            movieName:event.target.value
         })
        
        let movieName = event.target.value;
        
        if(movieName.length < 3){
            this.props.clearMovieList();   
            return;
        }

        // Calling the Search API only after 300ms after user has stopped typing
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          //search function
          if(movieName){
                this.props.getMovies(movieName);
           }
        }, 300);       
    };


    render(){
        
        return (
            <div>
                <div className="myForm">
                        <form>
                            <label>
                                Movie Name:
                                <input 
                                        id="movieName" 
                                        onChange={this.getMovieName} 
                                        type="text" 
                                        name="movieName"
                                        placeholder="Enter the Movie Name" 
                                />
                            </label>
                        </form> 
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return {
        getMovies: (movieName) => dispatch(types.getMovieTitles(movieName)),
        clearMovieList: () => dispatch(types.clearMovieTitles())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieForm);