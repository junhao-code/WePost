import React, { Component } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import '../styles/App.css';
// import '../styles/Main.css';
// import '../styles/Register.css';


class App extends Component {
  state = {
    isLoggedIn: false,
  }
  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn}/>
        <Main isLoggedIn={this.state.isLoggedIn}/>
      </div>
    );
  }
}

export default App;
