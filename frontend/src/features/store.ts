import { configureStore, combineReducers } from '@reduxjs/toolkit';
import themeReducer from "./themeSlice/themeSlice"

const rootReducer = combineReducers({
    theme: themeReducer
})

export const store = configureStore({
    reducer: {
        theme: rootReducer, // our theme provider does not really use any reducers, but for convention sake it will stay called as a reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch