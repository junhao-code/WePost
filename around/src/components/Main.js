import React from 'react';
import { Register } from './Register';
// import './Main.css';

export class Main extends React.Component {
  render() {
    return (
        <section className="main">
          <Register/>
        </section>
    );
  }
}