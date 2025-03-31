import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      const newContact = {
        id: nanoid(),
        ...action.payload,
      };
      state.items.push(newContact);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
