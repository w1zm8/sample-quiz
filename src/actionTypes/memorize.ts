import { Deck } from "../types";
export const SET_DECK = "SET_DECK";
export const LOAD_DECKS = "LOAD_DECKS";
export const ADD_DECK = "ADD_DECK";

export type SetDeckAction = {
  type: typeof SET_DECK;
  payload: Deck;
};

export type LoadDecksAction = {
  type: typeof LOAD_DECKS;
  payload: Deck[];
};

export type AddDeckAction = {
  type: typeof ADD_DECK;
  payload: Deck;
};
