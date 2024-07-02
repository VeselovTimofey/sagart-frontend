import { createAsyncThunk } from '@reduxjs/toolkit';

import { signInApi, signUpApi } from '../../utils/api/api';

import type {
  ICredentialsSignIn,
  ICredentialsSignUp,
  IUser,
} from '../../utils/types';

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
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Не удалось зарегистрироваться');
  }
});

export const signInUser = createAsyncThunk<
  IUser,
  ICredentialsSignIn,
  { rejectValue: string }
>('auth/signin', async (credentials, { rejectWithValue }) => {
  try {
    const response = await signInApi(credentials);
    const data = await response.json();

    // NOTE: Data structures in Response are temporary and sticked to the abilities of json-server lib.

    if (!response.ok || !data?.[0]?.id) {
      // NOTE: Here goes processing of expected errors from backend
      return rejectWithValue(data?.[0]?.message || 'Неверные учетные данные');
    }

    return data[0];
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
    return rejectWithValue('Неверные учетные данные');
  }
});
