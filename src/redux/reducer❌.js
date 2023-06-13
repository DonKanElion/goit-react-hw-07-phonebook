import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, findContact } from './actions❌';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Toolkit Testing', number: '443-89-12' },
    { id: 'id-2', name: 'Flying good!', number: '443-89-12' },
    { id: 'id-3', name: 'Aaron Paul', number: '645-17-79' },
    { id: 'id-4', name: 'My name is Mazafaq', number: '642-17-79' },
  ],
  filter: '',
};

export const rootReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    return {
      ...state,
      contacts: [...state.contacts, action.payload],
    };
  },
  [deleteContact]: (state, action) => {
    return {
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    };
  },
  [findContact]: (state, action) => {
    return {
      ...state,
      filter: action.payload,
    };
  },
});

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case addContact.type: {
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case deleteContact.type: {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case findContact.type: {
//       return {
//         ...state,
//         filter: (state.filter = action.payload),
//       };
//     }

//     default:
//       return state;
//   }
// };


