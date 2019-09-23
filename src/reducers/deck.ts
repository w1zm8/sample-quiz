import { SET_DECK, SetDeckAction } from "../actionTypes";
import { DeckStore, RootStore } from "../types";

export default function(state: DeckStore = null, action: SetDeckAction) {
  switch (action.type) {
    case SET_DECK:
      return action.payload;
    default:
      return state;
  }
}

export const getDeck = (state: RootStore) => state.deck;
