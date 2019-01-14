import React from 'react';
import { Register } from "./Register";
import { Login } from "./Login";
import { Home } from './Home';
import { Switch, Route, Redirect} from 'react-router-dom';
import { PropTypes } from 'prop-types';


export class Main extends React.Component {

  static propTypes = {
    isLoggedin: PropTypes.bool.isRequired,
    handleLogin: PropTypes.func.isRequired
  }

  getLogin = () => {
    return this.props.isLoggedin ? <Redirect to="/home"/> : <Login handleLogin={this.props.handleLogin}/>;
  }

  getHome = () => {
    return this.props.isLoggedin ? <Home/> : <Redirect to="/login"/>;
  }

  getRoot = () => {
    return <Redirect to="/login"/>
  }

  render() {
    return (
      <div className="main">
        <Switch>
          <Route exact path="/" render={this.getRoot}/>
          <Route path="/login" render={this.getLogin}/>
          <Route path="/register" component={Register}/>
          <Route path="/home" render={this.getHome}/>
          <Route component={Login}/>
        </Switch>
      </div>
    );
  }

}