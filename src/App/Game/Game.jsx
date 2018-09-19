import React, { Component } from 'react';
import { Route } from 'react-router';
import {connect} from 'react-redux';

import selector from './state/selector';
import dispatcher from './state/dispatcher';

import './styles';

class Game extends Component {

  handleStartClick = event => {
    this.props.startGame();
  }

  handleSquareClick = square => {
    this.props.squareSelected(square);
  }

  render() {
    const {
      state,
      squares,
    } = this.props;

    if(state === 'pre') {
      return (
        <section className="game" onClick={this.handleStartClick} role="button">
          Play
        </section>
      )
    }

    return (
      <section className="game">
        <ul className="game__board">
          {squares.map((square, index) => {
            const liProps = {};
            if(!square && state === 'active') {
              liProps.onClick = e => this.handleSquareClick(index, e);
              liProps.role = 'button';
            }
            return (
              <li key={index} {...liProps}>
                {square === 1 ? 'X' : (square === 2 ? 'O' : '')}
              </li>
            );
          })}
        </ul>
        {state === 'post' && (
          <div className="game__over" onClick={this.handleStartClick} role="button">Game Over!</div>
        )}
      </section>
    )
  }
}

export default connect(selector, dispatcher)(Game);