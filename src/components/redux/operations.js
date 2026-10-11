import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const response = await axios.get(
      "https://6a8d6d96baf2ac84246d0ffa.mockapi.io/contacts",
    );
    return response.data;
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }) => {
    const response = await axios.post(
      "https://6a8d6d96baf2ac84246d0ffa.mockapi.io/contacts",
      { name, number },
    );
    return response.data;
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId) => {
    const response = await axios.delete(
      `https://6a8d6d96baf2ac84246d0ffa.mockapi.io/contacts/${contactId}`,
    );
    return response.data;
  },
);