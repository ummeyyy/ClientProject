import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
// import ProductScreen from "./screens/ProductScreen/ProductScreen"
import CartScreen from "./screens/TabNavigator/CartScreen";
import MoreScreen from "./screens/TabNavigator/MoreScreen";
import OffersScreen from "./screens/TabNavigator/OffersScreen";
import SettingsScreen from "./screens/TabNavigator/SettingsScreen";
import YourCart from "./screens/CartScreen/YourCart";

import colors from "./assets/colors";
import { Ionicons } from "@expo/vector-icons";

import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

class navigationRouter extends Component {
  render() {
    {
      console.log("hellp");
    }
    return <AppContainer></AppContainer>;
  }
}
const TabNavigator = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "HomeScreen"
        // tabBarIcon: ({ tintColor }) => (
        //   <BooksCountContainer color={tintColor} type="books" />
        // )
      }
    },
    CartScreen: {
      screen: YourCart,
      navigationOptions: {
        tabBarLabel: "CartScreen"
        // tabBarIcon: ({ tintColor }) => (
        //   <BooksCountContainer color={tintColor} type="booksReading" />
        // )
      }
    },
    MoreScreen: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarLabel: "MoreScreen"
        // tabBarIcon: ({ tintColor }) => (
        //   <BooksCountContainer color={tintColor} type="booksRead" />
        // )
      }
    },
    OffersScreen: {
      screen: OffersScreen,
      navigationOptions: {
        tabBarLabel: "OffersScreen"
        // tabBarIcon: ({ tintColor }) => (
        //   <BooksCountContainer color={tintColor} type="booksRead" />
        // )
      }
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: "SettingsScreen"
        // tabBarIcon: ({ tintColor }) => (
        //   <BooksCountContainer color={tintColor} type="booksRead" />
        // )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: colors.greytext
      },
      activeTintColor: colors.bgblue,
      inactiveTintColor: colors.whitetext
    }
  }
);
const HomeStackNavigator = createStackNavigator(
  {
    HomeTabNavigator: {
      screen: TabNavigator,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Ionicons
              name="ios-menu"
              size={30}
              color={colors.whitetext}
              onPress={() => navigation.openDrawer()}
              style={{ marginLeft: 10 }}
            />
          )
        };
      }
    },
    //just an example
    CartScreen: { screen: YourCart }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.blacktext
      },
      headerTintColor: colors.inactivegreybutton
    }
  }
);
const AppDrawerNavigator = createDrawerNavigator(
  {
    HomeStackNavigator: {
      screen: HomeStackNavigator,
      navigationOptions: {
        title: "Home",
        drawerIcon: () => <Ionicons name="ios-home" size={24} />
      }
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        title: "Settings",
        drawerIcon: () => <Ionicons name="ios-settings" size={24} />
      }
    }
  }
  // {
  //   contentComponent: CustomDrawerComponent
  // }
);
const AppContainer = createAppContainer(AppDrawerNavigator);

export default navigationRouter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red"
  }
});
