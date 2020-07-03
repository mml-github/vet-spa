import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar';
import Home from './components/home';
import ActorsContainer from './components/actorsContainer';
import Actress from './components/actress';
import Films from './components/films';


class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar>
          <Route exact path="/" render={() => <Home title="Oscar Winners" />} />
          </NavBar>
        </div>
      </BrowserRouter>
    )
  }

}

export default App;
