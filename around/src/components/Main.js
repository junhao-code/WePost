import React from 'react';
import { Register } from './Register';
// import './Main.css';
import { Login } from './Login';
export class Main extends React.Component {
  render() {
    return (
        <section className="main">
          {/*<Register/>*/}
          <Login/>
        </section>
    );
  }
}