import React from "react";
import { shallow } from "enzyme";
import Card, { Props, State } from "../Card";

const props: Props = {
  card: {
    note: "test note",
    field: "test note",
    id: "0"
  }
};

describe("Card component", () => {
  const wrapper = shallow(<Card {...props} />);

  it('sets field of state "isShown" to be false', () => {
    const state = wrapper.state() as State;
    expect(state.isShown).toBeFalsy();
  });

  it("renders card's 'note'", () => {
    expect(
      wrapper
        .find("WithTheme(Box)")
        .at(1)
        .props().children
    ).toEqual(props.card.note);
  });

  it('renders a element "show field" instead of field', () => {
    expect(
      wrapper
        .find("WithTheme(Box)")
        .at(2)
        .find("span")
        .text()
    ).toEqual("🧐");
  });

  describe('clicking a element "show field"', () => {
    beforeAll(() => {
      wrapper
        .find("WithTheme(Box)")
        .at(2)
        .find("span")
        .simulate("click");
    });

    it('updates field "isShown" in state', () => {
      const state = wrapper.state() as State;
      expect(state.isShown).toBeTruthy();
    });

    it("renders card's 'field'", () => {
      expect(
        wrapper
          .find("WithTheme(Box)")
          .at(2)
          .find("span")
          .text()
      ).toEqual(props.card.field);
    });
  });
});
