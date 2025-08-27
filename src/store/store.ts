import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import userReducer from './slices/userSlice';
import navigationReducer from './slices/navigationSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    user: userReducer,
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;