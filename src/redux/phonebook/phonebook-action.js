// import types from "./phonebook-types";
import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("phonebook/add", ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const deleteContact = createAction("phonebook/delete");
const filter = createAction("phonebook/changeFilter");

export default { addContact, deleteContact, filter };

// const addContact = ({ name, number }) => ({
//   type: types.ADD,
// payload: {
//   id: shortid.generate(),
//   name,
//   number,
// },
// });

// const deleteContact = (contactId) => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const filter = (value) => ({
//   type: types.FILTER,
//   payload: value,
// });
