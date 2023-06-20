import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { filter } from './filter/constants';
import { contacts } from './contacts/constants';
const initialState = {
  contacts,
  filter,
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  console.log(...state.contacts);
  // console.log(action.payload.contact)

  switch (action.type) {
    case 'contact/addContact':
      console.log(action.payload.contact);
      return {
        ...state,
        contacts: [...state.contacts, action.payload.contact],
      };

    case 'filter/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };

    case 'filter/searchContact':
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
