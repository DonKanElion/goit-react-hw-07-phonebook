import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.error](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

  },
});

export const contactsReducer = contactsSlice.reducer;

// export const contactsSlice = createSlice({
//   {
//     contacts: {
//       items: [],
//       isLoading: false,
//       error: null,
//       filter: "",
//     },
//      reducers: {
//         fetchingInProgress(state) {
//           state.isLoading = true;
//         },
//         fetchingSuccess(state, action) {
//           state.isLoading = false;
//           state.error = null;
//           state.items = action.payload;
//         },
//         fetchingError(state, action) {
//           state.isLoading = false;
//           state.error = action.payload;
//         },
//       },
//   });

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         const newContact = action.payload;
//         state.contacts.push(newContact);
//       },

//       prepare(name, number) {
//         return {
//           payload: {
//             id: 'id-' + nanoid(2),
//             name,
//             number,
//           },
//         };
//       },
//     },

//     deleteContact(state, action) {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     },

//     findContact(state, action) {
//       return {
//         ...state,
//         filter: action.payload,
//       };
//     },
//   },
// });

// export const { addContact, deleteContact, findContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
