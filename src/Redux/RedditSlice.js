import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios'

const initialState = {
  data: [],
  loading: false,
  error: "",
  categories: "",
};

//  you have to make two calls
//  first call is for the home page, and the other is to link categories
export const fetchData = createAsyncThunk("reddit/fetchData", async () => {
  // const url = `https://www.reddit.com/r/${category}.json`
  const data = await fetch(`https://www.reddit.com/r/memes.json`);
  const json = await data.json();
  const fetchedData = json.data.children
  return fetchedData;
});

const RedditSlice = createSlice({
  name: "reddit",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = "";
    },
    [fetchData.rejected]: (state, action) => {
      state.data = [];
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default RedditSlice.reducer;
