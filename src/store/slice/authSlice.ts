import { createSlice } from '@reduxjs/toolkit';
import { signInUser, signUpUser } from '../actions/authUserAction';
import { IUser } from '../../utils/types';

export interface IauthState {
  token: string | null;
  user: IUser | null;
  loading: boolean;
  error: string | null;
  success: string | null;
}

const initialState: IauthState = {
  token: JSON.parse(localStorage.getItem('token') ?? 'null'),
  user: null,
  loading: false,
  error: null,
  success: null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        const newState = {
          ...state,
          loading: true,
        };
        return newState;
      })
      .addCase(signUpUser.fulfilled, (state, { payload }) => {
        const newState = {
          ...state,
          loading: false,
          error: null,
          user: payload,
          success: 'Регистрация успешна',
        };
        return newState;
      })
      .addCase(signUpUser.rejected, (state, { payload }) => {
        const newState = {
          ...state,
          loading: false,
          error: payload || null,
        };
        return newState;
      })
      .addCase(signInUser.pending, (state) => {
        const newState = {
          ...state,
          loading: true,
        };
        return newState;
      })
      .addCase(signInUser.fulfilled, (state, { payload }) => {
        const newState = {
          ...state,
          loading: false,
          error: null,
          success: 'Авторизация успешна',
          user: payload,
        };
        return newState;
      })
      .addCase(signInUser.rejected, (state, { payload }) => {
        const newState = {
          ...state,
          loading: false,
          error: payload || null,
        };
        return newState;
      });
  },
});
// eslint-disable-next-line no-empty-pattern
export const {} = authSlice.actions;
export default authSlice.reducer;
