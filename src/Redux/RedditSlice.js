import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios from 'axios'

const initialState = {
    redditData: [],
    loading: false,
    error: ''
}
export const fetchData = createAsyncThunk(
    'reddit/fetchData',
    async () => {
        const data = await fetch("https://www.reddit.com/r/popular.json")
        const json = await data.json()
        console.log(json)
    }
)
const RedditSlice = createSlice({
    name: 'reddit',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [fetchData.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchData.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = false;
        },
        [fetchData.rejected]: (state, action) => {
            state.data = [];
            state.loading = false;
            state.error = action.error.message
        }
    }
})

export default RedditSlice.reducer 