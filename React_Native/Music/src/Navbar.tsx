/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {colors} from './constent/Colors';

import {fonts} from './constent/fonts';
import {mainStack, mainTab} from './constent/Navigation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const BackButton = () => {
//   const navigation = useNavigation();
//   return (
//     <TouchableOpacity
//       onPress={() => navigation.goBack()}
//       style={styles.backButton}>
//       <Image
//         source={image.BACK_ARROW}
//         style={styles.backButtonText}
//         tintColor="black"></Image>
//     </TouchableOpacity>
//   );
// };

export const AuthTabStack = () => {
  return (
    <View style={styles.auth}>
      <StatusBar
        animated={true}
        backgroundColor={colors.primaryColor}
        barStyle="light-content"
        translucent={true}
      />
      <Stack.Navigator>
        {mainStack.map((item, index) => (
          <Stack.Screen
            name={item.name}
            component={item.component}
            options={{
              headerShown: item.back === true,
            }}
            key={index}
          />
        ))}
      </Stack.Navigator>
    </View>
  );
};

export const MainTabScreen = () => {
  return (
    <View style={styles.main}>
      <StatusBar
        animated={true}
        backgroundColor={colors.primaryColor}
        barStyle="light-content"
        translucent={true}
      />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#343434',
            height: 60,
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}>
        {mainTab.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.title}
            component={item.component}
            options={{
              tabBarIcon: ({focused}) => (
                <View style={styles.iconContainer}>
                  <Image
                    source={item.src}
                    resizeMode="stretch"
                    style={{
                      ...styles.iconImg,
                      tintColor: focused ? colors.primaryColor : '#737373',
                    }}
                  />
                  <Text
                    style={{
                      ...styles.tabText,
                      color: focused ? colors.primaryColor : '#737373',
                    }}>
                    {item.title}
                  </Text>
                </View>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1, marginTop: 25},
  auth: {flex: 1},
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconImg: {
    width: 20,
    height: 20,
  },
  tabText: {
    fontSize: 12,
    width: '100%',
    textAlign: 'center',
    fontFamily: fonts.SalsaRegular,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default MainTabScreen;
