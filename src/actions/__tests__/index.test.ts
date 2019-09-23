import { SET_DECK, LOAD_DECKS, ADD_DECK } from "../../actionTypes";
import { setDeck, loadDecks, addDeck } from "../index";
import { deckMock, deckListMock } from "../../__mocks__/deck";

describe("action creators", () => {
  it("creates action to set the deck", () => {
    const expectedAction = {
      type: SET_DECK,
      payload: deckMock
    };

    expect(setDeck(deckMock)).toEqual(expectedAction);
  });

  it("creates action to add a deck", () => {
    const expectedAction = {
      type: ADD_DECK,
      payload: deckMock
    };

    expect(addDeck(deckMock)).toEqual(expectedAction);
  });

  it("creates action to load a decks", () => {
    const expectedAction = {
      type: LOAD_DECKS,
      payload: deckListMock
    };

    expect(loadDecks(deckListMock)).toEqual(expectedAction);
  });
});
