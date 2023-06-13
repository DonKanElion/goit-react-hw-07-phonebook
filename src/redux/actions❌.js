import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', (name, number) => {
  return {
    payload: {
      id: 'id-' + nanoid(2),
      name,
      number,
    },
  }
});

// export const addContact = (name, number) => {
//   return {
//     type: 'contacts/addContact',
//     payload: {
//       id: 'id-' + nanoid(2),
//       name,
//       number,
//     },
//   };
// };

export const findContact = createAction('contacts/findContact');

// export const findContact = value => {
//   return {
//     type: 'contacts/findContact',
//     payload: value,
//   };
// };

export const deleteContact = createAction('contacts/deletedContact');

// export const deleteContact = contactId => {
//   return {
//     type: 'contacts/deletedContact',
//     payload: contactId,
//   };
// };

