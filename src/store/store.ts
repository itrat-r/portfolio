import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
import contactReducer from './contactSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
