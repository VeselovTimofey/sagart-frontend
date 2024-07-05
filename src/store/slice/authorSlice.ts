import { createSlice } from '@reduxjs/toolkit';
import IAuthorsState from '../../utils/types/authorsState';
import allAuthorAction from '../actions/allAuthorAction';

const initialState: IAuthorsState = {
  authors: [
    {
      id: -1,
      phone: '',
      first_name: '',
      last_name: '',
      middle_name: '',
      email: '',
      role: [''],
      nick_name: '',
      photo: '',
      videocard: '',
      biography: '',
      education: [
        {
          type: '',
          level: '',
          institute: '',
        },
      ],
      gender: '',
      year_of_birth: 0,
      place_of_birth: '',
      solo_shows: false,
      group_shows: false,
      collected_private_collectors: false,
      collected_major_institutions: false,
      winner_top_awards: false,
      social_networks: [{ name: '', account: '' }],
      address: '',
      style_works: [{ name: '' }],
    },
  ],
  isLoading: false,
  error: '',
};

const authorSlice = createSlice({
  name: 'author',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allAuthorAction.pending, (state: IAuthorsState) => {
        const newState = {
          ...state,
          isLoading: true,
        };
        return newState;
      })
      .addCase(allAuthorAction.fulfilled, (state: IAuthorsState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          products: action.payload,
        };
        return newState;
      })
      .addCase(allAuthorAction.rejected, (state: IAuthorsState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          error: action.error.message,
        };
        return newState;
      });
  },
});

export default authorSlice.reducer;
