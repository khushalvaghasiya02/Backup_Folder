import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../../components/Header';
import { UserDrawerNav, UserStackNav } from '../../../constants/navigation';
import Typography from '../../../components/common/Typography';
import { colors } from '../../../constants/colors';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const UserStack = () => (
    <Stack.Navigator >
        {UserStackNav.map((item, index) => {
            return (
                <Stack.Screen
                    name={item.name}
                    component={item.component}
                    options={{
                        headerShown: false,
                        // header: () => <Header />
                    }}
                    key={index}
                />
            );
        })}
    </Stack.Navigator>

);


const UserDrawer = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: { width: 250 },
            }}
        >
            {UserDrawerNav.map((item, index) => {
                if (item.isShow == false) {
                    return (
                        <Drawer.Screen
                            key={index}
                            name={item.title}
                            component={item.component}
                            options={{
                                drawerLabel: () => null,
                                title: null,
                                drawerIcon: () => null,
                                swipeEnabled: item.isShow !== false,
                                gestureEnabled: item.isShow !== false,
                            }}

                        />
                    );
                } else {
                    return (
                        <Drawer.Screen
                            key={index}
                            name={item.title}
                            component={item.component}
                        />
                    );
                }
                return null;
            })}
        </Drawer.Navigator>
    );
};


export const styles = StyleSheet.create({
    iconImg: {
        width: 20,
        height: 20,
    },
    tebText: {
        fontSize: 12,
        width: '100%',
        textAlign: 'center',
    },
})

export default UserDrawer;
