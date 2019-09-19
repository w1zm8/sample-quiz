import React from "react";
import DeckList from "./DeckList";
import NavLink from "./NavLink";

const Anki: React.FC = () => (
  <>
    <h1>Memorize</h1>
    <p>kind of Anki</p>
    <DeckList />
    <br />
    <NavLink to="/deck-control" label="🗃️ Deck Control" />
    <NavLink to="/" label="🏠 Home" />
  </>
);

export default Anki;
