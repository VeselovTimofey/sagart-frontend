import { createSlice } from '@reduxjs/toolkit';

import ISubscribeState from '../../utils/types/subscribeState';
import subcribeAction from '../actions/subscribeActions';
import subscribeSchema from '../../utils/validation/subscribeSchema';

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
    emailChange: (state:ISubscribeState, action) => {
      const newState = {
        ...state,
        subscribe: {
          ...state.subscribe,
          email: action.payload,
        },
      };
      return newState;
    },
    agreementChange: (state:ISubscribeState, action) => {
      const newState = {
        ...state,
        subscribe: {
          ...state.subscribe,
          agreement: action.payload,
        },
      };
      return newState;
    },
  },
  extraReducers:
    (builder) => {
      builder
        .addCase(subcribeAction.pending, (state:ISubscribeState) => {
          if (state.subscribe.agreement === false) {
            throw new Error('Необходимо принять соглашение.');
          }
          subscribeSchema.validateSync(state.subscribe);
          const newState = {
            ...state,
            isLoading: true,
            error: '',
          };
          return newState;
        })
        .addCase(subcribeAction.fulfilled, (state:ISubscribeState) => {
          const newState = {
            ...state,
            isLoading: false,
          };
          return newState;
        })
        .addCase(subcribeAction.rejected, (state:ISubscribeState, action) => {
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
export const { emailChange, agreementChange } = subscribeSlice.actions;
