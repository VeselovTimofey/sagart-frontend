import { createSlice } from '@reduxjs/toolkit';

import INewsSubscriptionState from '../../utils/types/newsSubscriptionState';
import newsSubscriptionAction from '../actions/newsSubscriptionActions';
import newsSubscriptionSchema from '../../utils/validation/newsSubscriptionSchema';

const initialState: INewsSubscriptionState = {
  subscribe: {
    email: '',
    agreement: false,
  },
  isLoading: false,
  error: '',
  success: '',
};

const newsSubscriptionSlice = createSlice({
  name: 'newsSubscription',
  initialState,
  reducers: {
    emailChange: (state: INewsSubscriptionState, action) => {
      const newState = {
        ...state,
        subscribe: {
          ...state.subscribe,
          email: action.payload,
        },
      };
      return newState;
    },
    agreementChange: (state: INewsSubscriptionState, action) => {
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
  extraReducers: (builder) => {
    builder
      .addCase(
        newsSubscriptionAction.pending,
        (state: INewsSubscriptionState) => {
          if (state.subscribe.agreement === false) {
            throw new Error('Необходимо принять соглашение.');
          }
          newsSubscriptionSchema.validateSync(state.subscribe);
          const newState = {
            ...state,
            isLoading: true,
            error: '',
            success: '',
          };
          return newState;
        }
      )
      .addCase(
        newsSubscriptionAction.fulfilled,
        (state: INewsSubscriptionState) => {
          const newState = {
            ...state,
            isLoading: false,
            success: 'Email успешно зарегистрировался.',
          };
          return newState;
        }
      )
      .addCase(
        newsSubscriptionAction.rejected,
        (state: INewsSubscriptionState, action) => {
          const newState = {
            ...state,
            isLoading: false,
            error: action.error.message,
          };
          return newState;
        }
      );
  },
});

export default newsSubscriptionSlice.reducer;
export const { emailChange, agreementChange } = newsSubscriptionSlice.actions;
