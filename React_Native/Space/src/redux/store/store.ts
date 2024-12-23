/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import spaceSlice from '../reducer/reducerSpace';

const store = configureStore({
  reducer: {
    spaceSlice: spaceSlice,
  },
});

export default store;
