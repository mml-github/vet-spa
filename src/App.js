import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';


class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar>
            
          </NavBar>
        </div>
      </BrowserRouter>
    )
  }

}

export default App;
