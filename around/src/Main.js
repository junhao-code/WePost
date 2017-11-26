import React from 'react';
import { WrappedRegister } from './Register';
// import './Main.css';

export class Main extends React.Component {
  render() {
    return (
        <section className="main">
          <WrappedRegister/>
        </section>
    );
  }
}