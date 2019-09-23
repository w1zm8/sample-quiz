import { SetDeckAction, LoadDecksAction, AddDeckAction } from "./memorize";
import { FetchCategoryAction } from "./quiz";

export { SET_DECK, LOAD_DECKS, ADD_DECK } from "./memorize";
export { FETCH_CATEGORIES } from "./quiz";

export type SetDeckAction = SetDeckAction;
export type LoadDecksAction = LoadDecksAction;
export type AddDeckAction = AddDeckAction;
export type FetchCategoryAction = FetchCategoryAction;
