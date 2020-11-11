import {
  GameState,
  AppActionTypes,
  SET_USER,
  SET_SCORE,
  MOVE_CARD,
  SET_INITIAL_CARDS_ORDER,
  PickupCards,
  GameStatus,
  GameAreas,
  START_GAME,
  PAUSE_GAME,
  CHECK_GAME,
  RESTART_GAME
} from './types'

const initialState: GameState = {
  user: {name: ''},
  status: GameStatus.PAUSED,
  score: 0,
  pickupCards: [PickupCards.Z, PickupCards.O, PickupCards.O, PickupCards.V, PickupCards.U],
  dropCards: [PickupCards.EMPTY, PickupCards.EMPTY, PickupCards.EMPTY, PickupCards.EMPTY, PickupCards.EMPTY]
}

const checkMovedCard = (dropCard: PickupCards, index: number) => {
  const correctAnswer = [PickupCards.Z, PickupCards.O, PickupCards.O, PickupCards.V, PickupCards.U];
  return dropCard === correctAnswer[index];
}

export function gameReducer(state: GameState = initialState, action: AppActionTypes): GameState {
  let score = state.score;
  let status = state.status;
  const dropCards = [...state.dropCards];
  const pickupCards = [...state.pickupCards];
  switch (action.type) {
    case START_GAME:
      return {...state, status: GameStatus.STARTED, score: 0}
    case PAUSE_GAME:
      return {...state, status: GameStatus.PAUSED}
    case SET_SCORE:
      return {...state, score: score + 1};
    case RESTART_GAME:
      return {...state, status: GameStatus.PAUSED, score: 0}
    case CHECK_GAME:
      if (
        dropCards[0] === PickupCards.Z && 
        dropCards[1] === PickupCards.O && 
        dropCards[2] === PickupCards.O && 
        dropCards[3] === PickupCards.V && 
        dropCards[4] === PickupCards.U
      ){
        return {...state, status: GameStatus.WINNER}
      }
      return {...state};
    case SET_USER:
      const newUser = {...state.user, name: action.userName};
      return {...state, user: {...newUser}};
    case SET_INITIAL_CARDS_ORDER:
      return {
        ...state,
        pickupCards: [PickupCards.V, PickupCards.U, PickupCards.O, PickupCards.Z, PickupCards.O].sort( () => .5 - Math.random() ),
        dropCards: [PickupCards.EMPTY, PickupCards.EMPTY, PickupCards.EMPTY, PickupCards.EMPTY, PickupCards.EMPTY]
      };
    case MOVE_CARD:
      const { source, target } = action.payload;
      if (source.area === GameAreas.PICK) {
        if (target.area === GameAreas.PICK) {
          pickupCards[source.index] = pickupCards[target.index];
          pickupCards[target.index] = source.cardName;
        } else if (target.area === GameAreas.DROP) {
          pickupCards[source.index] = dropCards[target.index];
          dropCards[target.index] = source.cardName;
        }
      } else if (source.area === GameAreas.DROP) {
        if (target.area === GameAreas.DROP) {
          dropCards[source.index] = dropCards[target.index];
          dropCards[target.index] = source.cardName;
        } else if (target.area === GameAreas.DROP) {
          dropCards[source.index] = pickupCards[target.index];
          pickupCards[target.index] = source.cardName;
        }
      }
      if (!checkMovedCard(dropCards[target.index], target.index)) {
        score += 10;
      }
      return {...state, score, status, pickupCards, dropCards}
    default:
      return state;
  }
}