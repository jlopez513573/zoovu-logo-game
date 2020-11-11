import { RootState } from './';
import { IUser, PickupCards, GameStatus } from './types'

export const userSelector = (state: RootState): IUser => state.game.user
export const userNameSelector = (state: RootState): string => state.game.user.name
export const isLogguedSelector = (state: RootState): boolean => !!state.game.user.name

export const scoreSelector = (state: RootState): number => state.game.score
export const pickupCardsSelector = (state: RootState): PickupCards[] => state.game.pickupCards
export const dropCardsSelector = (state: RootState): PickupCards[] => state.game.dropCards
export const gameStatusSelector = (state: RootState): GameStatus => state.game.status