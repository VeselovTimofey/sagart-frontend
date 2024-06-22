import { createSlice } from '@reduxjs/toolkit';

import ISubscribeState from '../../utils/types/subscribeState';
import subcribeAction from '../actions/subscribeActions';

const initialState:ISubscribeState = {
  subscribe: {
    email: '',
    agreement: false,
  },
  isLoading: false,
  error: '',
};

const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    emailChange: (state, action) => {
      const newState = {
        ...state,
        subscribe: {
          ...state.subscribe,
          email: action.payload,
        },
      };
      return newState;
    },
  },
  extraReducers:
    (builder) => {
      builder
        .addCase(subcribeAction.pending, (state) => {
          const newState = {
            ...state,
            isLoading: true,
            error: '',
          };
          return newState;
        })
        .addCase(subcribeAction.fulfilled, (state) => {
          const newState = {
            ...state,
            isLoading: false,
          };
          return newState;
        })
        .addCase(subcribeAction.rejected, (state, action) => {
          const newState = {
            ...state,
            isLoading: false,
            error: action.error.message,
          };
          return newState;
        });
    },
});

export default subscribeSlice.reducer;
export const { emailChange } = subscribeSlice.actions;
