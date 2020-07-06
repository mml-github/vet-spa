import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/NavBar';
import Home from './components/Home';
import ActorsContainer from './components/ActorsContainer';
import Actress from './components/Actress';
import Films from './components/Films';


class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar>
  
          <Route exact path="/" render={() => <Home title="Oscar Winners" />} />
          <Route path="/actors/" render={() => <ActorsContainer title="Best Actors" />} />
          
          </NavBar>
        </div>
      </BrowserRouter>
    )
  }

}

export default App;
