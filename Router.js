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
import MobileInput from "./components/MobileInput";
import VerifyNumber from "./screens/SignUpScreen/VerifyNumber";
import AfterSplash from "./screens/Splashscreen/AfterSplash";
import Splash from "./screens/Splashscreen/Splash";
import Login from "./screens/LoginScreens/Login";
import ForgotPassword from "./screens/LoginScreens/ForgotPassword";
import EmailSent from "./screens/LoginScreens/EmailSent";
import Password from "./screens/LoginScreens/Password";
import PasswordReset from "./screens/LoginScreens/PasswordReset";
import MainWalkthrough from "./screens/WalkthroughScreen/MainWalkthrough";
import FirstScreen from "./screens/WalkthroughScreen/FirstScreen";
import SecondScreen from "./screens/WalkthroughScreen/SecondScreen";
import ThirdScreen from "./screens/WalkthroughScreen/ThirdScreen";
import FourthScreen from "./screens/WalkthroughScreen/FourthScreen";

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
      console.log("help");
    }
    return <AppContainer></AppContainer>;
  }
}
const HomeStackNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerTintColor: "royalblue",
      headerStyle: {
        backgroundColor: colors.bgblue
      },
      tabBarVisible: false
    }
  }
});

const TabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarLabel: "HomeScreen"
      }
    },
    CartTab: {
      screen: YourCart,
      navigationOptions: {
        tabBarLabel: "CartScreen"
      }
    },
    MoreTab: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarLabel: "MoreScreen"
      }
    },
    OffersTab: {
      screen: OffersScreen,
      navigationOptions: {
        tabBarLabel: "OffersScreen"
      }
    },
    SettingsTab: {
      screen: ViewAllCategories,
      navigationOptions: {
        tabBarLabel: "SettingsScreen"
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
const AppDrawerNavigator = createDrawerNavigator({
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
});
const AuthNavigator = createStackNavigator(
  {
    AfterSplash: {
      screen: AfterSplash
      // navigationOptions: {
      //   header: null,
      //   tabBarVisible: false
      // }
    },
    SignUpScreen: { screen: SignUp },
    CountryCode: { screen: MobileInput },
    VerifyNumber: { screen: VerifyNumber },
    Login: { screen: Login },
    Password: { screen: Password },
    PasswordReset: { screen: PasswordReset },
    ForgotPassword: { screen: ForgotPassword },
    EmailSent: { screen: EmailSent }
  },
  {
    header: null,
    headerMode: "none"
  }
);

const WalkthroughStackNavigator = createStackNavigator({
  MainScreen: {
    screen: MainWalkthrough,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    }
  },

  FirstPage: {
    screen: FirstScreen,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    }
  },
  SecondPage: {
    screen: SecondScreen,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    }
  },
  ThirdPage: {
    screen: ThirdScreen,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    }
  },
  FourthPage: {
    screen: FourthScreen,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    }
  }
});

// const HomeTabNavigator = createBottomTabNavigator({
//   home: Home,
//   recipe: Recipe
// },{
//   navigationOptions: ({ navigation }) => ({
//     tabBarIcon: ({ focused, tintColor }) => {
//       const { routeName } = navigation.state;
//       let iconName;
//       if (routeName === 'home') {
//         iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//       } else if (routeName === 'recipe') {
//         iconName = `ios-options${focused ? '' : '-outline'}`;
//       }
//       return <Ionicons name={iconName} size={25} color={tintColor} />;
//     },
//   }),
//   tabBarOptions: {
//     activeTintColor: '#d2959f',
//     inactiveTintColor: 'gray',
//   },
// });

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoading: Splash,
    App: TabNavigator,
    WalkthroughStackNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: "AuthLoading"
  }
);
const AppContainer = createAppContainer(SwitchNavigator);

// export default createAppContainer( SwitchNavigator);
export default navigationRouter;
