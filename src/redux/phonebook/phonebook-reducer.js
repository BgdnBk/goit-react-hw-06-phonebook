import { combineReducers } from "redux";
import types from "./phonebook-types";

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTER:
      console.log("this is state", state);
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
