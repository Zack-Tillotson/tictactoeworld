import React, { Component } from 'react';
import { Route } from 'react-router';

import Game from '../Game';

import './styles';

class Home extends Component {
  render() {
    return (
      <section className="page-content">
        <Game />
        <article>
          <h1>Tic Tac Toe World</h1>
          <p>The home of the world's hottest Tic Tac Toe community. Here you can enjoy your favorite game in the company of millions and millions of other aficionados of fine board games.</p>
        </article>
      </section>
    );
  }
}

export default Home;