import { Deck } from "./memorize";
import { Category } from "./quiz";

export type DeckStore = Deck | null;
export type DecksStore = Deck[];
export type CategoryStore = Category[];

export type RootStore = {
  deck: DeckStore;
  decks: DecksStore;
  categories: CategoryStore;
};
