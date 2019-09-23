import {
  SetDeckActionCreator,
  LoadDecksActionCreator,
  AddDeckActionCreator
} from "./memorize";
import { FetchCategoriesActionCreator } from "./quiz";

export { setDeck, loadDecks, addDeck } from "./memorize";
export { fetchCategories } from "./quiz";

export type SetDeckActionCreator = SetDeckActionCreator;
export type LoadDecksActionCreator = LoadDecksActionCreator;
export type AddDeckActionCreator = AddDeckActionCreator;
export type FetchCategoriesActionCreator = FetchCategoriesActionCreator;
