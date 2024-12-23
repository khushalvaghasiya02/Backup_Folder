// import { NavigationContainer } from '@react-navigation/native';
// import React from 'react';
// import { View } from 'react-native';
// import AuthStack from '../../screens/Onboarding/Navigator/AuthStack';
// import HomeScreen from '../../screens/Main/home';
// import UserDrawer from '../../screens/Main/navigation';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const RootStack = () => {
//   return (
//     <View style={{flex:1}}>
//       <NavigationContainer>
//         {/* <AuthStack /> */}
//         <UserDrawer />
//       </NavigationContainer>
//     </View>
//   );
// };

// export default RootStack;

import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import UserDrawer from '../../screens/Main/navigation';
import AuthStack from '../../screens/Onboarding/Navigator/AuthStack';

const RootStack = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default RootStack;

