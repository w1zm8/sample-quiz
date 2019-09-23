import { SET_DECK, LOAD_DECKS, ADD_DECK } from "../../actionTypes";
import rootReducer from "../index";
import { deckMock, deckListMock } from "../../__mocks__/deck";

describe("root reducer", () => {
  it("returns the initial state", () => {
    expect(rootReducer(undefined, { type: "" })).toEqual({
      deck: null,
      decks: []
    });
  });

  it("sets deck", () => {
    expect(
      rootReducer(undefined, { type: SET_DECK, payload: deckMock })
    ).toEqual({ deck: deckMock, decks: [] });
  });

  it("loads decks", () => {
    expect(
      rootReducer(undefined, { type: LOAD_DECKS, payload: deckListMock })
    ).toEqual({
      deck: null,
      decks: deckListMock
    });
  });

  it("adds a deck", () => {
    expect(
      rootReducer(undefined, { type: ADD_DECK, payload: deckMock })
    ).toEqual({ deck: null, decks: [deckMock] });
  });
});
