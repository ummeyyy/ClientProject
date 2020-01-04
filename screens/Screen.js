import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import {
    createAppContainer,
    createNavigationContainer,
    createSwitchNavigator,
} from 'react-navigation';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { FontAwesome5, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import OffersScreen from './screens/TabNavigator/OffersScreen';
import SettingsScreen from './screens/TabNavigator/SettingsScreen';
import CartScreen from './screens/TabNavigator/CartScreen';
import MoreScreen from './screens/TabNavigator/MoreScreen'

const Screen = () => <AppContainer />;

const LoginStackNavigator = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
            tabBarLabel: 'HOME',
            tabBarIcon: ({ tintColor }) => (<FontAwesome5 name="home" size={24}
                color={tintColor} />)
        }
    },
    SignUpScreen: {
        screen: SignUpScreen,
        navigationOptions: {}
    }
});



// const OffersStackNavigator = createStackNavigator({
//   OffersScreen
// });

// const SettingsStackNavigator = createStackNavigator({
//   SettingsScreen
// });
// const CartStackNavigator = createStackNavigator({
//   CartScreen
// });
// const MoreStackNavigator = createStackNavigator({
//   MoreScreen
// });


const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'HOME',
                tabBarIcon: ({ tintColor }) => (<FontAwesome5 name="home" size={24}
                    color={tintColor} />)
            }
        },
        Offers: {
            screen: OffersScreen,
            navigationOptions: {
                tabBarLabel: 'OFFERS',
                tabBarIcon: ({ tintColor }) => (<FontAwesome5 name="tags" size={24}
                    color={tintColor} />)
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                tabBarLabel: 'SETTINGS',
                tabBarIcon: ({ tintColor }) => (<MaterialIcons name="settings" size={24}
                    color={tintColor} />)
            }
        },
        Cart: {
            screen: CartScreen,
            navigationOptions: {
                tabBarLabel: 'CART',
                tabBarIcon: ({ tintColor }) => (<MaterialCommunityIcons name="cart" size={24}
                    color={tintColor} />)
            }
        },
        More: {
            screen: MoreScreen,
            navigationOptions: {
                tabBarLabel: 'MORE',
                tabBarIcon: ({ tintColor }) => (<MaterialCommunityIcons name="plus-circle-outline" size={24}
                    color={tintColor} />)
            }
        }
    }, {
    initialRouteName: "Home",
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        tabBarVisible: true,
        showLabel: true,
        showIcon: true,
    }
});

const HomeStackNavigator = createStackNavigator({
    TabNavigator
})

const AppDrawerNavigator = createDrawerNavigator(
    {
        HomeStackNavigator: {
            screen: HomeStackNavigator,
            navigationOptions: {
                title: 'Home',
                drawerIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} />
            }
        },
        Offers: {
            screen: OffersScreen,
            navigationOptions: {
                title: 'Offers',
                drawerIcon: ({ tintColor }) => (<FontAwesome5 name="tags" size={24}
                    color={tintColor} />)
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                title: 'Settings',
                drawerIcon: ({ tintColor }) => (<MaterialIcons name="settings" size={24}
                    color={tintColor} />)
            }
        },
        Cart: {
            screen: CartScreen,
            navigationOptions: {
                title: 'Cart',
                drawerIcon: ({ tintColor }) => (<MaterialCommunityIcons name="cart" size={24}
                    color={tintColor} />)
            }
        },
        More: {
            screen: MoreScreen,
            navigationOptions: {
                title: 'More',
                drawerIcon: ({ tintColor }) => (<MaterialCommunityIcons name="plus-circle-outline" size={24}
                    color={tintColor} />)
            }
        },
    });


const AppSwitchNavigator = createSwitchNavigator({
    // LoadingScreen,
    LoginStackNavigator,
    AppDrawerNavigator


    // OffersStackNavigator,
    // SettingsStackNavigator,
    // CartStackNavigator,
    // MoreStackNavigator,
});
const AppContainer = createAppContainer(AppSwitchNavigator);

export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});