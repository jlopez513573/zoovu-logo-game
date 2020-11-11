import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLogguedSelector } from '../../store/selectors';
import Game from './Game';

const GameContainer = () => {
  const isLoggued = useSelector(isLogguedSelector);

  return (
    <Route
      render={props =>
        isLoggued ? (
          <Game />
        ) : (
          <Redirect to={{ pathname: '/' }} />
        )
      }
    />
  )
}

export default GameContainer;