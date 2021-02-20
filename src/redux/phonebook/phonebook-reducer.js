import { combineReducers } from "redux";
// import types from "./phonebook-types";
import { createReducer } from "@reduxjs/toolkit";
import action from "./phonebook-action";

const contacts = createReducer([], {
  [action.addContact]: (state, { payload }) => [...state, payload],
  [action.delete]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [action.filter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];

//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case "phonebook/filter":
//       console.log("this is state", state);
//       return payload;

//     default:
//       return state;
//   }
// };
