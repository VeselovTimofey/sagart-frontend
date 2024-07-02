import { createAsyncThunk } from '@reduxjs/toolkit';

import { signUpApi } from '../../utils/api/api';

import type { ICredentialsSignUp, IUser } from '../../utils/types';

export const signUpUser = createAsyncThunk<
  IUser,
  ICredentialsSignUp,
  { rejectValue: string }
>('auth/signup', async (credentials, { rejectWithValue }) => {
  try {
    const response = await signUpApi(credentials);
    const data = await response.json();

    if (!response.ok) {
      return rejectWithValue(data.message || 'Не удалось зарегистрироваться');
    }

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return rejectWithValue(error.message || 'Не удалось зарегистрироваться');
  }
});
