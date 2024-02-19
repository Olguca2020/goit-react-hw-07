import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  elements: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.elements.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        elements: state.elements.filter(
          (contact) => contact.id !== action.payload.id
        ),
      };
    },
  },
});
const persistConfig = {
  key: "contacts",
  storage,
};

export const contactReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContact } = contactsSlice.actions;
export const { removeContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
export const persistcontactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
