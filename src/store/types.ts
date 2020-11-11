export const SET_USER = 'SET_USER'
export const SET_SCORE = 'SET_SCORE'
export const SET_INITIAL_CARDS_ORDER = 'SET_INITIAL_CARDS_ORDER'
export const MOVE_CARD = 'MOVE_CARD'
export const PAUSE_GAME = 'PAUSE_GAME'
export const START_GAME = 'START_GAME'
export const CHECK_GAME = 'CHECK_GAME'
export const RESTART_GAME = 'RESTART_GAME';

export interface IUser {
  name: string
}

export enum GameStatus {
  PAUSED = 'PAUSED',
  STARTED = 'STARTED',
  WINNER = 'WINNER'
}

export enum GameAreas {
  PICK = 'PICK',
  DROP = 'DROP'
}

export enum PickupCards {
  Z = 'Z',
  O = 'O',
  V = 'V',
  U = 'U',
  EMPTY = 'EMPTY'
}

export interface GameState {
  user: IUser
  status: GameStatus
  score: number
  pickupCards: PickupCards[]
  dropCards: PickupCards[]
}

interface StartGameAction {
  type: typeof START_GAME
}

interface PauseGameAction {
  type: typeof PAUSE_GAME
}

interface CheckGameAction {
  type: typeof CHECK_GAME
}

interface SetUserAction {
  type: typeof SET_USER
  userName: string
}

interface SetInitialCardsOrderAction {
  type: typeof SET_INITIAL_CARDS_ORDER
}

interface SetScoreAction {
  type: typeof SET_SCORE
}

interface MoveCardAction {
  type: typeof MOVE_CARD
  payload: any
}

interface RestartGameActionAction {
  type: typeof RESTART_GAME
}

export type AppActionTypes = SetUserAction | SetInitialCardsOrderAction |
MoveCardAction | StartGameAction | PauseGameAction | CheckGameAction | SetScoreAction | RestartGameActionAction