import { SET_USER, RESTART_GAME, START_GAME, PAUSE_GAME, CHECK_GAME, SET_INITIAL_CARDS_ORDER, MOVE_CARD, AppActionTypes, SET_SCORE } from './types'

export function setUser(userName: string): AppActionTypes {
  return {
    type: SET_USER,
    userName
  }
}

export function startGame(): AppActionTypes {
  return {
    type: START_GAME
  }
}

export function pauseGame(): AppActionTypes {
  return {
    type: PAUSE_GAME
  }
}

export function setScoreAction(): AppActionTypes {
  return {
    type: SET_SCORE
  }
}

export function checkGame(): AppActionTypes {
  return {
    type: CHECK_GAME
  }
}

export function setInitialCardsOrder(): AppActionTypes {
  return {
    type: SET_INITIAL_CARDS_ORDER
  }
}

export function moveCard(payload: any): AppActionTypes {
  return {
    type: MOVE_CARD,
    payload
  }
}

export function restartGameAction(): AppActionTypes {
  return {
    type: RESTART_GAME
  }
}
