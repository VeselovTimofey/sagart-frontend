import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthor } from '../../utils/types';
import { getAllAuthor } from '../../utils/api/api';

const allAuthorAction = createAsyncThunk<
  IAuthor[],
  void,
  { rejectValue: string }
>('authors/getAllAuthors', async (_, { rejectWithValue }) => {
  try {
    const response = await getAllAuthor();
    if (!response.ok) {
      return rejectWithValue('Не удалось получить информацию об авторов.');
    }
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Не удалось получить информацию об авторов.');
  }
});

export default allAuthorAction;
