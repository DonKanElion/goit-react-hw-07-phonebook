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
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact', 
  async (contactId, thunkAPI) => {
    try {
      const responce = await axios.delete(`/contacts/${contactId}`);
      return responce.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
});

export const findContact = createAsyncThunk(
  'contacts/findContact', 
  async (id, thunkAPI) => {
    try {
      const responce = await axios.get(`contacts/${id}`);
      console.log(responce.data);
      return responce.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});