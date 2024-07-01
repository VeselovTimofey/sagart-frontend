import { createSlice } from '@reduxjs/toolkit';

import type ILastNewsState from '../../utils/types/lastNewsState';
import lastNewsAction from '../actions/lastNewsAction';
import { INews } from '../../utils/types/lastNewsState';

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
        const news: Array<INews> = [];
        action.payload
          .json()
          .then((data) => data.map((element: INews) => news.push(element)));
        const newState = {
          ...state,
          isLoading: false,
          news,
        };
        return newState;
      })
      .addCase(lastNewsAction.rejected, (state: ILastNewsState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          error: action.error.message,
        };
        return newState;
      });
  },
});

export default lastNewsSlice.reducer;
export const { currentNewsChange } = lastNewsSlice.actions;
