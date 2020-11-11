import { createStore, combineReducers } from 'redux';
import { gameReducer } from './reducers'

const rootReducer = combineReducers({
  game: gameReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);