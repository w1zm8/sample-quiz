import {
  SET_DECK,
  LOAD_DECKS,
  ADD_DECK,
  SetDeckAction,
  LoadDecksAction,
  AddDeckAction
} from "../actionTypes";
import { Deck } from "../types";

export type SetDeckActionCreator = (payload: Deck) => SetDeckAction;
export type LoadDecksActionCreator = (payload: Deck[]) => LoadDecksAction;
export type AddDeckActionCreator = (payload: Deck) => AddDeckAction;

export const setDeck: SetDeckActionCreator = payload => ({
  type: SET_DECK,
  payload
});

export const loadDecks: LoadDecksActionCreator = payload => ({
  type: LOAD_DECKS,
  payload
});

export const addDeck: AddDeckActionCreator = payload => ({
  type: ADD_DECK,
  payload
});
