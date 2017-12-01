import React, { Component } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import '../styles/App.css';
import { TOKEN_KEY} from "../constants"

// import '../styles/Main.css';
// import '../styles/Register.css';


class App extends Component {
  state = {
    isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
  }
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
