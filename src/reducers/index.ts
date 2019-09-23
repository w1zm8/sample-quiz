import { combineReducers } from "redux";
import deckReducer from "./deck";
import decksReducer from "./decks";
import categoriesReducer from "./categories";

export default combineReducers({
  deck: deckReducer,
  decks: decksReducer,
  categories: categoriesReducer
});
