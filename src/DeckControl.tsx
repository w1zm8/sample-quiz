import React from "react";
import { Box } from "grommet";
import NavLink from "./NavLink";

class DeckControl extends React.Component {
  render() {
    return (
      <>
        <Box background="#604a94" pad="small" margin="xsmall">
          <h4>Create a new deck</h4>
        </Box>
        <br />
        <NavLink to="/memorize" label="↩️ Memorize" />
      </>
    );
  }
}

export default DeckControl;
