import { createAsyncThunk } from '@reduxjs/toolkit';
import postSubscribe from '../../utils/api/api';

const subcribeAction = createAsyncThunk(
  'subscribe/getsubscribe',
  async (email:string) => {
    const response = await postSubscribe(email);
    return response;
  },
);

export default subcribeAction;
