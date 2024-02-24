import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65d3b5c8522627d501097059.mockapi.io/";

export const fetchCards = createAsyncThunk(
  "cards/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("contacts");
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addCard = createAsyncThunk(
  "cards/addCard",
  async (newCard, thunkAPI) => {
    try {
      const response = await axios.post("contacts", newCard);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
