import { createAsyncThunk } from '@reduxjs/toolkit';

import { getLastNews } from '../../utils/api/api';

const lastNewsAction = createAsyncThunk('lastNews/getLastNews', getLastNews);

export default lastNewsAction;
