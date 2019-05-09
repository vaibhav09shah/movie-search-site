import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import MovieForm from './components/MovieForm/MovieForm';
import MovieList from './components/MovieList/MovieList';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {


  render() {
    return (
      <Provider store={store}>
      <div className="container">
          <Navbar />
          <MovieForm />
          <div className="row">
            <MovieList />
          </div>
      </div>
      </Provider>
    );
  }
}

export default App;
