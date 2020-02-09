import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import MoreScreen from "./screens/TabNavigator/MoreScreen";
import OffersScreen from "./screens/TabNavigator/OffersScreen";
import SettingsScreen from "./screens/TabNavigator/SettingsScreen";
import YourCart from "./screens/CartScreen/YourCart";
import ProductScreen from "./screens/ProductScreen/ProductScreen";
import CheckoutScreen from "./screens/CheckoutScreen/CheckoutScreen";
import ViewAllCategories from "./screens/HomeScreen/ViewAllCategories";
import StepTwo from "./screens/CheckoutScreen/StepTwo";
import SignUp from "./screens/SignUpScreen/SignUp";
import VerifyNumber from "./screens/SignUpScreen/VerifyNumber";
import AfterSplash from "./screens/Splashscreen/AfterSplash";
import Splash from "./screens/Splashscreen/Splash";
import Login from "./screens/LoginScreens/Login";
import ForgotPassword from "./screens/LoginScreens/ForgotPassword";
import EmailSent from "./screens/LoginScreens/EmailSent";
import Password from "./screens/LoginScreens/Password";
import PasswordReset from "./screens/LoginScreens/PasswordReset";

import colors from "./assets/colors";
import { Ionicons } from "@expo/vector-icons";

import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  NavigationActions
} from "react-navigation";

class navigationRouter extends Component {
  render() {
    {
      console.log("hellp");
    }
    return <AppContainer></AppContainer>;
  }
}
const HomeStackNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen }
});
const TabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarLabel: "HomeScreen"
        // tabBarIcon: ({ tintColor }) => (
        //   <BooksCountContainer color={tintColor} type="books" />
        // )
      }
    },
    CartTab: {
      screen: YourCart,
      navigationOptions: {
        tabBarLabel: "CartScreen"
        // tabBarIcon: ({ tintColor }) => (
        //   <BooksCountContainer color={tintColor} type="booksReading" />
        // )
      }
    },
    MoreTab: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarLabel: "MoreScreen"
        // tabBarIcon: ({ tintColor }) => (
        //   <BooksCountContainer color={tintColor} type="booksRead" />
        // )
      }
    },
    OffersTab: {
      screen: OffersScreen,
      navigationOptions: {
        tabBarLabel: "OffersScreen"
        // tabBarIcon: ({ tintColor }) => (
        //   <BooksCountContainer color={tintColor} type="booksRead" />
        // )
      }
    },
    SettingsTab: {
      screen: ViewAllCategories,
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

// const HomeStackNavigator = createStackNavigator(
//   {
//     HomeScreen: {
//       screen: HomeScreen,
//       navigationOptions: ({ navigation }) => {
//         return {
//           headerLeft: (
//             <Ionicons
//               name="ios-menu"
//               size={30}
//               color={colors.whitetext}
//               onPress={() => navigation.openDrawer()}
//               style={{ marginLeft: 10 }}
//             />
//           )
//         };
//       }
//     }

// //just an example
// CartScreen: {
//   screen: YourCart
// },
// // ProductScreen: {
// //   screen: ProductScreen
// // },
// checkout: {
//   screen: CheckoutScreen
// },
// View: {
//   screen: ViewAllCategories
// },
// item: {
//   screen: ProductScreen
// },
// steptwo: {
//   screen: StepTwo
// }
//}

// {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: colors.blacktext
//     },
//     headerTintColor: colors.inactivegreybutton
//   }
// }
//);
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
const AuthNavigator = createStackNavigator(
  {
    AfterSplash: { screen: AfterSplash },
    SignUpScreen: { screen: SignUp },
    VerifyNumber: { screen: VerifyNumber },
    Login: { screen: Login },
    Password: { screen: Password },
    PasswordReset: { screen: PasswordReset },
    ForgotPassword: { screen: ForgotPassword },
    EmailSent: { screen: EmailSent }
  },
  {
    mode: "modal",
    header: null,
     
  }
);
 
const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: Splash,
    App: TabNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: "AuthLoading"
  }
);
const AppContainer = createAppContainer(SwitchNavigator);

// export default createAppContainer( SwitchNavigator);
export default navigationRouter;
 