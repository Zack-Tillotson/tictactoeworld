import React, { Fragment } from 'react';
import { Route } from 'react-router';

import Home from './Home';

import './styles';

export default function() {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/news/" component={() => ('News')} />
      <Route exact path="/about/" component={() => ('About')} />
    </Fragment>
  );
}