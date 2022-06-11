import { configureStore } from "@reduxjs/toolkit";
import redditReducer from './RedditSlice'

const store = configureStore({
    reducer: {
        reddit: redditReducer
    }
})

export default store