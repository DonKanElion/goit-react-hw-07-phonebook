import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './contactsSlice';

const PROJECT_TOKEN = '6488c7350e2469c038fe5961';
const BASE_URL = `https://${PROJECT_TOKEN}.mockapi.io/contacts`;

axios.defaults.baseURL = BASE_URL;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const resporse = await axios.post('/contacts', data);
      return resporse.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

// export async function addContact(newContact) {
//   const { data } = await axios.post('contacts');
//   console.log('API: AddContact: ', addContact);
//   const newTask = {
//       content: 'Check out mockapi.io',
//       completed: false,
//     };

//   //   fetch('https://PROJECT_TOKEN.mockapi.io/tasks', {
//   //     method: 'POST',
//   //     headers: {'content-type':'application/json'},
//   //     // Send your data in the request body as JSON
//   //     body: JSON.stringify(newTask)
//   //   }).then(res => {
//   //     if (res.ok) {
//   //         return res.json();
//   //     }
//   //     // handle error
//   //   }).then(task => {
//   //     // do something with the new task
//   //   }).catch(error => {
//   //     // handle error
//   //   })
// }

// export async function deleteContact(id) {
//   // axios.delete(url[, config])

//   await axios.delete('contacts', `${id}`);

//   console.log('Delete contact: ', id);
// }

// export async function findContact(query) {
//   console.log('findContact: ', query);
// }
