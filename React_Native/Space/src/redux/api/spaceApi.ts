/* eslint-disable prettier/prettier */
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL} from '../../constent/constents';

export const get_space_api = createAsyncThunk('getSpaceDdta', async () => {
  return await axios
    .get(URL.BASE_URL + URL.GET_DATA_API)
    .then(res => {
        console.log(res);
    //   const data = res.data;
    //   if (res.status === 200) {
    //     return {data};
    //   } else {
    //     console.log(res.err);
    //   }
    })
    .catch(err => {
      console.log(err);
    });
});
