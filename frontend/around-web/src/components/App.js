import React, { Component } from 'react';
import '../styles/App.css';
import { Header } from './Header';
import { Main } from './Main';
import { TOKEN_KEY } from "../constants"


class App extends Component {

  state = {
    isLoggedin : Boolean(localStorage.getItem(TOKEN_KEY)),
  }

  handleLogin = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
    this.setState({isLoggedin : true});
  }

  handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    this.setState({isLoggedin : false});
  }

  render() {
    return (
      <div className="App">
        <Header isLoggedin={this.state.isLoggedin} handleLogout={this.handleLogout}/>
        <Main isLoggedin={this.state.isLoggedin} handleLogin={this.handleLogin}/>
      </div>
    )
  }
}

export default App;
