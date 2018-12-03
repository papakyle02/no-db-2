import React, { Component } from 'react';
import './App.css';
// import axios from 'axios';
import Games from './components/Games.js';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <div className='main-display'>
          <Games/>
          {/* <FavoriteGames/> */}
        </div>
        
      </div>
    );
  }
}

export default App;
