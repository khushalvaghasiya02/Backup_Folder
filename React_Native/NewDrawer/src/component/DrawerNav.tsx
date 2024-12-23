// src/Drow.tsx or src/Drow.js
/* eslint-disable prettier/prettier */
import React from 'react';
import {enableScreens} from 'react-native-screens';
enableScreens();

import {View, Button, Image, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import CustomDrawer from './CustomDrawer';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function Drow() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Home"
      screenOptions={{drawerLabelStyle: {marginLeft: -25},
      drawerActiveBackgroundColor:'#D7D9B1',
      drawerActiveTintColor:'#fff',
      }}>
      <Drawer.Screen
        name="Home"
        component={MyStack}
        options={{
          drawerIcon: ({color}) => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{backgroundColor:'#B48EAE',padding:5,borderRadius:10}}>
              <Image
                source={require('../assets/home.png')}
                style={{width: 20, height: 20, tintColor: color,}}
              />
              </View>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          drawerIcon: ({color}) => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{backgroundColor:'#98CBB4',padding:5,borderRadius:10}}>

              <Image
                source={require('../assets/bell.png')}
                style={{width: 20, height: 20, tintColor: color}}
              />
              </View>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default Drow;
