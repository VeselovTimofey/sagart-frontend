import { createSlice } from '@reduxjs/toolkit';

import type ILastNewsState from '../../utils/types/lastNewsState';
import lastNewsAction from '../actions/lastNewsAction';
import mockLastNews from '../../utils/mock/lastNews.json';

const initialState: ILastNewsState = {
  news: [
    {
      title: '',
      link: '',
      imageUrl: '',
      id: '',
    },
  ],
  currentNews: {
    value: 0,
  },
  isLoading: false,
  error: '',
};

const lastNewsSlice = createSlice({
  name: 'lastNews',
  initialState,
  reducers: {
    currentNewsChange: (state: ILastNewsState, action) => {
      const newState = {
        ...state,
        currentNews: action.payload,
      };
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(lastNewsAction.pending, (state: ILastNewsState) => {
        const newState = {
          ...state,
          isLoading: true,
        };
        return newState;
      })
      .addCase(lastNewsAction.fulfilled, (state: ILastNewsState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          news: action.payload,
        };
        return newState;
      })
      .addCase(lastNewsAction.rejected, (state: ILastNewsState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          error: action.error.message,
        };
        if (action.error.message === 'Rejected') {
          newState.news = mockLastNews;
        }
        return newState;
      });
  },
});

export default lastNewsSlice.reducer;
export const { currentNewsChange } = lastNewsSlice.actions;
