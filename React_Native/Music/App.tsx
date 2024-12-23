/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainTabScreen, { AuthTabStack } from './src/Navbar';


const App = () => {
  const isAuthenticated = false;
  return (
      <NavigationContainer>
        {isAuthenticated ? <MainTabScreen /> : <AuthTabStack />}
      </NavigationContainer>
  );
};

export default App;
