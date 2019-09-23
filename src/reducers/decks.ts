import {
  LOAD_DECKS,
  LoadDecksAction,
  ADD_DECK,
  AddDeckAction
} from "../actionTypes";
import { DecksStore, RootStore } from "../types";

export default function(
  state: DecksStore = [],
  action: LoadDecksAction | AddDeckAction
) {
  switch (action.type) {
    case LOAD_DECKS:
      return action.payload;
    case ADD_DECK:
      return [...state, action.payload];
    default:
      return state;
  }
}

export const getDecks = (state: RootStore) => state.decks;
