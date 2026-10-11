import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations.js";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state, action) => {
      handlePending;
    });

    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      handleRejected;
      state.error = null;
      state.items = action.payload;
    });

    builder.addCase(fetchContacts.rejected, (state, action) => {
      handleRejected;
      state.error = action.payload;
    });

    builder.addCase(addContact.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });

    builder.addCase(deleteContact.fulfilled, (state, action) => {
      const index = state.items.findIndex(
        (contact) => contact.id === action.payload.id,
      );
      state.items.splice(index, 1);
    });
  },
});


export default contactsSlice.reducer;