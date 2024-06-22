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
      state.subscribe.email = action.payload;
    },
  },
  extraReducers:
    (builder) => {
      builder
        .addCase(subcribeAction.pending, (state) => {
          state.isLoading = true;
          state.error = '';
        })
        .addCase(subcribeAction.fulfilled, (state) => {
          state.isLoading = false;
        })
        .addCase(subcribeAction.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        });
    },
});

export default subscribeSlice.reducer;
export const { emailChange } = subscribeSlice.actions;
