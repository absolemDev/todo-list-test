import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../services/localStorage.service";

const initialState = {
  data: localStorageService.getDB() || [],
};

const commentsSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    itemCreated: (state, action) => {
      state.data.push(action.payload);
    },
    itemEdited: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[index] = action.payload;
    },
    itemDeleted: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
  },
});

const { reducer: appReducer, actions } = commentsSlice;
const { itemCreated, itemEdited, itemDeleted } = actions;

export const createItem = (data) => (dispatch) => {
  dispatch(itemCreated(data));
  localStorageService.addItem(data);
};

export const editItem = (data) => (dispatch) => {
  dispatch(itemEdited(data));
  localStorageService.editItem(data);
};

export const deleteItem = (id) => (dispatch) => {
  dispatch(itemDeleted(id));
  localStorageService.deleteItem(id);
};

export const getData = () => (state) => state.data;
export const getItemById = (id) => (state) =>
  state.data.find((item) => item.id === id);

export default appReducer;
