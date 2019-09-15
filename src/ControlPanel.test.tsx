import React from "react";
import { mount } from "enzyme";
import ControlPanel, { State } from "./ControlPanel";

describe("ControlPanel component", () => {
  let wrapper = mount(<ControlPanel />);

  it('renders the button "Clear"', () => {
    expect(
      wrapper
        .find('[data-test-id="Button.Clear"]')
        .at(1)
        .text()
    ).toBe("Clear");
  });

  describe("when the form is rendering", () => {
    it("renders component Form", () => {
      expect(wrapper.find("Form").exists()).toBe(true);
    });

    it("renders component TextInput", () => {
      expect(wrapper.find('[data-test-id="Field.Note"]').exists()).toBe(true);
    });

    it('renders button "Submit"', () => {
      expect(
        wrapper
          .find('[data-test-id="Button.Submit"]')
          .at(1)
          .text()
      ).toEqual("Submit");
    });
  });

  describe("creating note", () => {
    const noteText = "test text";

    beforeEach(() => {
      wrapper
        .find('[data-test-id="Field.Note"]')
        .find("input")
        .simulate("change", {
          target: {
            value: noteText
          }
        });
    });

    it("updates text field in state", () => {
      const state: State = wrapper.state() as State;
      expect(state.text).toBe(noteText);
    });

    describe("saving the new note by submit button", () => {
      beforeEach(() => {
        wrapper
          .find('[data-test-id="Button.Submit"]')
          .at(1)
          .simulate("click");
      });

      it("adding new note to notes list in state", () => {
        const state: State = wrapper.state() as State;
        expect(state.notes.length).toBe(1);
        expect(state.notes[0].text).toBe(noteText);
      });

      describe('clicking a button "Clear"', () => {
        beforeEach(() => {
          wrapper
            .find('[data-test-id="Button.Clear"]')
            .at(1)
            .simulate("click");
        });

        it("notes and text fields are empty in a state", () => {
          const state: State = wrapper.state() as State;

          expect(state.notes.length).toBe(0);
        });
      });
    });
  });
});
