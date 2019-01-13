import React, { Component } from 'react';
import '../styles/App.css';
import { Header } from './Header';
import { Main } from './Main';

class App extends Component {
  state = {
    isLoggedin : false,
  }
  render() {
    return (
      <div className="App">
        <Header isLoggedin={this.state.isLoggedin}/>
        <Main/>
      </div>
    )
  }
}

export default App;
