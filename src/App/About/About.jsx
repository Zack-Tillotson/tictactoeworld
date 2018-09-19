import React, { Component } from 'react';
import { Route } from 'react-router';

import './styles';

class About extends Component {
  render() {
    return (
      <section className="page-content">
        <article>
          <h1>About</h1>
          <p>The home of the world's hottest Tic Tac Toe community. Here you can enjoy your favorite game in the company of millions and millions of other aficionados of fine board games.</p>
          <p>It's not satire if you believe it.</p>
        </article>
      </section>
    );
  }
}

export default About;