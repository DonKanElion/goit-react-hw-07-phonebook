import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Redux Async', number: '443-89-12' },
      { id: 'id-2', name: 'Bradley Cooper', number: '443-89-12' },
      { id: 'id-4', name: 'Aaron Paul', number: '645-17-79' },
    ],
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
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.error](state, action) {
      state.isLoading = false;
      state.error = action.payload;
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
