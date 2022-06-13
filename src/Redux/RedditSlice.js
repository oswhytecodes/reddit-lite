import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: "",
  // category: "memes",
};

export const fetchData = createAsyncThunk("reddit/fetchData", async () => {
  // const url = `https://www.reddit.com/r/${category}.json`
  
  const data = await fetch(`https://www.reddit.com/r/happy.json`);
  const json = await data.json();
  const fetchedData = json.data.children;
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
