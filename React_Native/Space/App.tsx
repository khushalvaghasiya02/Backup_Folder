/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_space_api } from './src/redux/api/spaceApi';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state:any) => state.spaceSlice.space);

  useEffect(() => {
    dispatch(get_space_api());
  }, []);
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App