import React, { Component } from 'react';
import logo from './logo.svg';
import Panel from "./components/Panel";
import Scoreboard from "./components/Scoreboard";
import friends from "./friends.json";
import './App.css';

const friendsInitial = friends;
let clicked = [],
current = 0,
high = 0;

class App extends Component {
  

  state = {
    friends,
    current,
    high
  };

  whenClicked = (id) => {
    console.log(this.state.friends[id]);
    if (this.state.friends[id].beenClicked === true) {
      this.setState({ current: 0});
      this.setState(prevState => ({
        friends: prevState.friends.map(
          obj => (Object.assign(obj, { beenClicked: false }))
        )
      }));
      console.log(this.state.friends[id].beenClicked);
      console.log("You lose");
    } else {
      this.setState(prevState => ({
        friends: prevState.friends.map(
          obj => (obj.id === id ? Object.assign(obj, { beenClicked: true }) : obj)
        )
      }));
      
      this.setState({ current: this.state.current + 1});
      if (this.state.current > this.state.high) {
        this.setState({ high: this.state.current});
      }
      clicked.push(id);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This is a Clicky Game</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {this.state.friends.map(friend => (
                  <Panel
                    whenClicked={this.whenClicked}
                    beenClicked={friend.beenClicked}
                    id={friend.id}
                    key={friend.id}
                    name={friend.name}
                    image={friend.image}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <Scoreboard
                current={this.state.current}
                high={this.state.high}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
