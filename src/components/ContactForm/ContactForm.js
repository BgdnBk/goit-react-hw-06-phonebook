import React from "react";
// import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import s from "../ContactForm/ContactForm.module.css";
import { connect } from "react-redux";
import phonebookAction from "../../redux/phonebook/phonebook-action";

function СontactForm({ contactList, onDeleted }) {
  return (
    <TransitionGroup component="ul" classNames={s.table}>
      {contactList.map(({ id, name, number }) => {
        console.log("this is CLSt", contactList);
        return (
          <CSSTransition key={id} timeout={250} classNames={s} unmountOnExit>
            <li>
              {name}: {number}
              <button
                className={s.btnList}
                type="button"
                onClick={() => onDeleted(id)}
              >
                Удалить
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

// СontactForm.propTypes = {
//   contactList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleted: PropTypes.func.isRequired,
// };

const getFilter = (allContacts, filter) => {
  const filterValues = filter.toLowerCase();

  return allContacts.filter(({ contact }) =>
    contact.toLowerCase().includes(filterValues)
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contactList: getFilter(contacts, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleted: (id) => dispatch(phonebookAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(СontactForm);
