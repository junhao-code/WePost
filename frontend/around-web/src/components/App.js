import React, { Component } from 'react';
import '../styles/App.css';
import { Header } from './Header';
import { Main } from './Main';
import { TOKEN_KEY } from "../constants"


class App extends Component {
  state = {
    isLoggedin : false,

  }

  handleLogin = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
    this.setState({isLoggedin : true});
  }

  render() {
    return (
      <div className="App">
        <Header isLoggedin={this.state.isLoggedin} />
        <Main handleLogin={this.handleLogin}/>
      </div>
    )
  }
}

export default App;
