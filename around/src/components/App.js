import React, { Component } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import '../styles/App.css';
import { TOKEN_KEY} from "../constants"

// import '../styles/Main.css';
// import '../styles/Register.css';


class App extends Component {
  // isLoggedIn is used to avoid direct access via URL manipulation
  // we are adding this state at this level because we need it for both Header and Main
  state = {
    isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
  }
  // localStorage works as key value pair, the browser will save these key value pairs until we clear them out
  handleLogin = (token) => {
    localStorage.setItem(TOKEN_KEY, token)
    this.setState({ isLoggedIn: true});
  }

  handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    this.setState({isLoggedIn: false});
  }

  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
        <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default App;
