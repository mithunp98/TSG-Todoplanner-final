import { Action, ThunkDispatch, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import RootReducer from './reducers';

const store = configureStore({
    reducer: RootReducer,
});

export type AppState = ReturnType<typeof store.getState>;

export type ThunkAppDispatch = ThunkDispatch<AppState, void, Action>;

export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();

export default store;
