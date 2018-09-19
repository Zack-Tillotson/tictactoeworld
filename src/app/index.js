import React, {Fragment} from 'react';
import { Route } from 'react-router';
import {Link} from 'react-router-dom';

import Home from './Home';
import About from './About';

import './styles';

export default function() {
  return (
    <Fragment>
      <nav>
        <div className="page-content">
          <Link to="/" className="logo"><img src="/assets/images/logo192.png" /> TicTacToe World</Link>
          <Link to="/about/" className="link">About</Link>
        </div>
      </nav>
      <Route exact path="/" component={Home} />
      <Route exact path="/about/" component={About} />
    </Fragment>
  );
}