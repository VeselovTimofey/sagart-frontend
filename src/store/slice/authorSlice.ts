import { createSlice } from '@reduxjs/toolkit';
import IAuthorsState, { IAuthor } from '../../utils/types/authorsState';
import allAuthorAction from '../actions/allAuthorAction';
import mockAuthors from '../../utils/mock/authors.json';

const initialState: IAuthorsState = {
  authors: [
    {
      id: -1,
      phone: '',
      first_name: '',
      last_name: '',
      middle_name: '',
      email: '',
      role: ['author'],
      nick_name: '',
      photo: '',
      videocard: '',
      biography: '',
      education: [
        {
          type: '',
          level: 'Высшее',
          institute: '',
        },
      ],
      gender: null,
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
          authors: action.payload,
        };
        return newState;
      })
      .addCase(allAuthorAction.rejected, (state: IAuthorsState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          error: action.error.message,
        };
        if (action.error.message === 'Rejected') {
          newState.authors = mockAuthors as IAuthor[];
        }
        return newState;
      });
  },
});

export default authorSlice.reducer;
