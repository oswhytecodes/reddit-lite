import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: "",
  category: "happy",
  suggestions: []
};

export const fetchData = createAsyncThunk(
  "reddit/fetchData",
  async (category, { rejectWithValue }) => {
    try {
      const url = `https://www.reddit.com/r/${category}.json`;
      // `https://www.reddit.com/r/happy.json`
      const data = await fetch(url);
      const json = await data.json();
      const fetchedData = json.data;

      return fetchedData;
    } catch (error) {
      // console.log(error.response.data);
      return rejectWithValue(error);
    }
  }
);
export const fetchNewSuggestions = createAsyncThunk(
  "reddit/fetchNewSuggestions",
  async (query) => {
    try {
      const url = `https://www.reddit.com/r/subreddit/api/search_reddit_names.json?query=${query}`
      const data = await fetch(url)
      const json = await data.json()

      // console.log(json)
      return json
    } 
    catch (error) {
      console.log(error)
    }
  }
);
const RedditSlice = createSlice({
  name: "reddit",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      // rejectwithvalue
      if (!action.payload) {
        state.error = "Whoopsies";
        state.loading = false;
        state.data = [];
        return;
      }
      state.data = action.payload.children;
      state.loading = false;
      state.error = "";
    },
    [fetchData.rejected]: (state, action) => {
      state.data = [];
      state.loading = false;
      // console.log(action.error);
      state.error = action.error;
    },
    // Suggestion Data
    [fetchNewSuggestions.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchNewSuggestions.fulfilled]: (state, action) => {
      // rejectwithvalue
      if (!action.payload) {
        state.error = "Whoopsies";
        state.loading = false;
        state.suggestions = [];
        return;
      }
      state.suggestions = action.payload.names;
      state.loading = false;
      state.error = "";
    },
    [fetchNewSuggestions.rejected]: (state, action) => {
      state.suggestions = [];
      state.loading = false;
      // console.log(action.error);
      state.error = action.error;
    },
  },
  
});


export default RedditSlice.reducer;
