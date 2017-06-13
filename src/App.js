import React, { Component } from 'react';
import './App.css';
import Teams from './components/Teams';
import AddPlayer from './components/AddPlayer';
import PlayerList from './components/PlayerList';

class App extends Component {
  constructor(){
    super();

    this.state = {
      team1Roster: ['Joe','Gordon','Jimmy'],
      team2Roster: ['Harry','Arnold', 'Chuck'],
      selectedTeam: 1,
      tempName: ''
    }
  }
  render() {
    return (

      <div>
        <div><button>Team 1</button><button>Team 2</button></div>
        <div><input type="text" /><button>Add</button></div>
        <div>
          <PlayerList roster={this.state.team1Roster} lastName='Shmoe' />
        </div>
        <div>
          <PlayerList roster={this.state.team2Roster} lastName='Fairy'/>
        </div>
      </div>
    )
  }
}

export default App;
