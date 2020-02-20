import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import MoreScreen from "./screens/TabNavigator/MoreScreen";
import OffersScreen from "./screens/TabNavigator/OffersScreen";
import SettingsScreen from "./screens/TabNavigator/SettingsScreen";

import AfterSplash from "./screens/Splashscreen/AfterSplash";
import Splash from "./screens/Splashscreen/Splash";

import SignUp from "./screens/SignUpScreen/SignUp";
import MobileInput from "./components/MobileInput";
import VerifyNumber from "./screens/SignUpScreen/VerifyNumber";

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

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import Profile from "./screens/ProfileScreen/Profile";
import MyOrders from "./screens/ProfileScreen/MyOrders";
import Favourites from "./screens/ProfileScreen/Favourites";
import EmptyFavorites from "./screens/ProfileScreen/EmptyFavorites";
import FavouritsFlatList from "./screens/ProfileScreen/ProfileComponents/FavouritsFlatList";
import SavedCards from "./screens/ProfileScreen/SavedCards";

import ViewAllCategories from "./screens/HomeScreen/ViewAllCategories";

import ProductScreen from "./screens/ProductScreen/ProductScreen";
import YourCart from "./screens/CartScreen/YourCart";

import Brochure from "./screens/ProductScreen/Brochure";
import BrochureType from "./screens/ProductScreen/BrochureType";
import BrochureCart from "./screens/CartScreen/BrochureCart";
import BrandCheckupSchedule from "./screens/ProductScreen/BrandCheckupSchedule";
import BrandCheckupCart from "./screens/CartScreen/BrandCheckupCart";

import CheckoutScreen from "./screens/CheckoutScreen/CheckoutScreen";
import StepTwo from "./screens/CheckoutScreen/StepTwo";

import StepThree from "./screens/CheckoutScreen/StepThree";
import ThankyouScreens from "./screens/PlaceOrderScreens/ThankyouScreen";

import LimitedTimeProduct from "./screens/TabNavigator/LimitedTimeProduct";

import Header from "./screens/HomeScreen/Header";
import HeaderTwo from "./screens/HomeScreen/HeaderTwo";

import { moderateScale, scale, verticalScale } from "./scale";
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
      headerBackTitle: null,
      header: <Header />
    }
  },
  BrandingDesign: {
    screen: ViewAllCategories,
    navigationOptions: {
      tabBarVisible: false,
      headerBackTitle: null,
      header: <HeaderTwo />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  LimitedOffers: {
    screen: LimitedTimeProduct,
    navigationOptions: {
      tabBarVisible: false,
      header: <Header />,
      headerBackTitle: null,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  A4FlyerScreen: {
    screen: ProductScreen,
    navigationOptions: {
      tabBarVisible: false,
      headerBackTitle: null,
      header: <HeaderTwo />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  BrochureScreen: {
    screen: Brochure,
    navigationOptions: {
      tabBarVisible: false,
      headerBackTitle: null,
      header: <HeaderTwo />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  ViewCart: {
    screen: YourCart,
    navigationOptions: {
      tabBarVisible: false,
      headerBackTitle: null,
      header: <HeaderTwo />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  BrochureSpecs: {
    screen: BrochureType,
    navigationOptions: {
      tabBarVisible: false,
      headerBackTitle: null,
      header: <HeaderTwo />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  Brochurecart: {
    screen: BrochureCart,
    navigationOptions: {
      tabBarVisible: false,
      headerBackTitle: null,
      header: <HeaderTwo />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  BrandSpecs: {
    screen: BrandCheckupSchedule,
    navigationOptions: {
      tabBarVisible: false,
      headerBackTitle: null,
      header: <HeaderTwo />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  BrandCart: {
    screen: BrandCheckupCart,
    navigationOptions: {
      tabBarVisible: false,
      headerBackTitle: null,
      header: <HeaderTwo />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  CheckoutMain: {
    screen: CheckoutScreen,
    navigationOptions: {
      tabBarVisible: false,
      headerBackTitle: null,
      header: <HeaderTwo />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  CheckoutCard: {
    screen: StepTwo,
    navigationOptions: {
      tabBarVisible: false,
      headerBackTitle: null,
      header: <HeaderTwo />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  Summary: {
    screen: StepThree,
    navigationOptions: {
      tabBarVisible: false,
      headerBackTitle: null,
      header: <HeaderTwo />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  OrderNow: {
    screen: ThankyouScreens,
    navigationOptions: {
      tabBarVisible: false,
      headerBackTitle: null,
      header: <HeaderTwo />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  }
});

const ProfileStackNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerBackTitle: null,
      header: <Header />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  MyOrders: {
    screen: MyOrders,
    navigationOptions: {
      headerBackTitle: null,
      tabBarVisible: false,
      header: <Header />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  Favourites: {
    screen: Favourites,
    navigationOptions: {
      headerBackTitle: null,
      tabBarVisible: false,
      header: <Header />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  NoFavourites: {
    screen: EmptyFavorites,
    navigationOptions: {
      headerBackTitle: null,
      tabBarVisible: false,
      header: <Header />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },
  ListFavourites: {
    screen: FavouritsFlatList,
    navigationOptions: {
      headerBackTitle: null,
      tabBarVisible: false,
      header: <Header />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  },

  SavedCards: {
    screen: SavedCards,
    navigationOptions: {
      headerBackTitle: null,
      tabBarVisible: false,
      header: <Header />,
      headerBackImage: (
        <View
          style={{
            marginLeft: scale(5)
          }}
        >
          <Image
            source={require("./assets/back-arrow-icon.png")}
            style={{
              width: moderateScale(20),
              height: verticalScale(20),
              tintColor: colors.whitetext
            }}
            resizeMode="contain"
          />
        </View>
      )
    }
  }
});

// const CartStackNavigator = createStackNavigator({
//   BrochureScreen: {
//     screen: Brochure,
//     navigationOptions: {
//       tabBarVisible: false,
//       headerBackTitle: null,
//       headerBackground: <HeaderTwo />,
//       headerBackImage: (
//         <View
//           style={{
//             marginLeft: scale(5)
//           }}
//         >
//           <Image
//             source={require("./assets/back-arrow-icon.png")}
//             style={{
//               width: moderateScale(20),
//               height: verticalScale(20),
//               tintColor: colors.whitetext
//             }}
//             resizeMode="contain"
//           />
//         </View>
//       )
//     }
//   },

//   ViewCart: {
//     screen: YourCart,
//     navigationOptions: {
//       tabBarVisible: false,
//       headerBackTitle: null,
//       headerBackground: <HeaderTwo />,
//       headerBackImage: (
//         <View
//           style={{
//             marginLeft: scale(5)
//           }}
//         >
//           <Image
//             source={require("./assets/back-arrow-icon.png")}
//             style={{
//               width: moderateScale(20),
//               height: verticalScale(20),
//               tintColor: colors.whitetext
//             }}
//             resizeMode="contain"
//           />
//         </View>
//       )
//     }
//   },

//   BrochureSpecs: {
//     screen: BrochureType,
//     navigationOptions: {
//       tabBarVisible: false,
//       headerBackTitle: null,
//       headerBackground: <HeaderTwo />,
//       headerBackImage: (
//         <View
//           style={{
//             marginLeft: scale(5)
//           }}
//         >
//           <Image
//             source={require("./assets/back-arrow-icon.png")}
//             style={{
//               width: moderateScale(20),
//               height: verticalScale(20),
//               tintColor: colors.whitetext
//             }}
//             resizeMode="contain"
//           />
//         </View>
//       )
//     }
//   },

//   Brochurecart: {
//     screen: BrochureCart,
//     navigationOptions: {
//       tabBarVisible: false,
//       headerBackTitle: null,
//       headerBackground: <HeaderTwo />,
//       headerBackImage: (
//         <View
//           style={{
//             marginLeft: scale(5)
//           }}
//         >
//           <Image
//             source={require("./assets/back-arrow-icon.png")}
//             style={{
//               width: moderateScale(20),
//               height: verticalScale(20),
//               tintColor: colors.whitetext
//             }}
//             resizeMode="contain"
//           />
//         </View>
//       )
//     }
//   },

//   BrandSpecs: {
//     screen: BrandCheckupSchedule,
//     navigationOptions: {
//       tabBarVisible: false,
//       headerBackTitle: null,
//       headerBackground: <HeaderTwo />,
//       headerBackImage: (
//         <View
//           style={{
//             marginLeft: scale(5)
//           }}
//         >
//           <Image
//             source={require("./assets/back-arrow-icon.png")}
//             style={{
//               width: moderateScale(20),
//               height: verticalScale(20),
//               tintColor: colors.whitetext
//             }}
//             resizeMode="contain"
//           />
//         </View>
//       )
//     }
//   },

//   BrandCart: {
//     screen: BrandCheckupCart,
//     navigationOptions: {
//       tabBarVisible: false,
//       headerBackTitle: null,
//       headerBackground: <HeaderTwo />,
//       headerBackImage: (
//         <View
//           style={{
//             marginLeft: scale(5)
//           }}
//         >
//           <Image
//             source={require("./assets/back-arrow-icon.png")}
//             style={{
//               width: moderateScale(20),
//               height: verticalScale(20),
//               tintColor: colors.whitetext
//             }}
//             resizeMode="contain"
//           />
//         </View>
//       )
//     }
//   },

//   CheckoutMain: {
//     screen: CheckoutScreen,
//     navigationOptions: {
//       tabBarVisible: false,
//       headerBackTitle: null,
//       headerBackground: <HeaderTwo />,
//       headerBackImage: (
//         <View
//           style={{
//             marginLeft: scale(5)
//           }}
//         >
//           <Image
//             source={require("./assets/back-arrow-icon.png")}
//             style={{
//               width: moderateScale(20),
//               height: verticalScale(20),
//               tintColor: colors.whitetext
//             }}
//             resizeMode="contain"
//           />
//         </View>
//       )
//     }
//   },

//   CheckoutCard: {
//     screen: StepTwo,
//     navigationOptions: {
//       tabBarVisible: false,
//       headerBackTitle: null,
//       headerBackground: <HeaderTwo />,
//       headerBackImage: (
//         <View
//           style={{
//             marginLeft: scale(5)
//           }}
//         >
//           <Image
//             source={require("./assets/back-arrow-icon.png")}
//             style={{
//               width: moderateScale(20),
//               height: verticalScale(20),
//               tintColor: colors.whitetext
//             }}
//             resizeMode="contain"
//           />
//         </View>
//       )
//     }
//   },

//   Summary: {
//     screen: StepThree,
//     navigationOptions: {
//       tabBarVisible: false,
//       headerBackTitle: null,
//       headerBackground: <HeaderTwo />,
//       headerBackImage: (
//         <View
//           style={{
//             marginLeft: scale(5)
//           }}
//         >
//           <Image
//             source={require("./assets/back-arrow-icon.png")}
//             style={{
//               width: moderateScale(20),
//               height: verticalScale(20),
//               tintColor: colors.whitetext
//             }}
//             resizeMode="contain"
//           />
//         </View>
//       )
//     }
//   },

//   OrderNow: {
//     screen: ThankyouScreens,
//     navigationOptions: {
//       tabBarVisible: false,
//       headerBackTitle: null,
//       headerBackground: <HeaderTwo />,
//       headerBackImage: (
//         <View
//           style={{
//             marginLeft: scale(5)
//           }}
//         >
//           <Image
//             source={require("./assets/back-arrow-icon.png")}
//             style={{
//               width: moderateScale(20),
//               height: verticalScale(20),
//               tintColor: colors.whitetext
//             }}
//             resizeMode="contain"
//           />
//         </View>
//       )
//     }
//   }
// });

// const focused =(
//   <labelStyle style={{color: focused ? colors.bgblue : colors.whitetext}}/>
// )

const TabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarLabel: "HOME"
      }
    },
    OffersTab: {
      screen: LimitedTimeProduct,
      navigationOptions: {
        tabBarLabel: "OFFERS"
      }
    },
    SettingsTab: {
      screen: ProfileStackNavigator,
      navigationOptions: {
        tabBarLabel: "SETTINGS"
      }
    },
    CartTab: {
      screen: YourCart,
      navigationOptions: {
        tabBarLabel: "CART"
      }
    },
    MoreTab: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarLabel: "MORE"
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "HomeTab") {
          return (
            <Image
              source={require("./assets/menu-icon-1.png")}
              style={{ height: 25, width: 25 }}
            />
          );
        } else if (routeName === "OffersTab") {
          return (
            <Image
              source={require("./assets/menu-icon-2.png")}
              style={{ height: 25, width: 25, tintColor: colors.whitetext }}
            />
          );
        } else if (routeName === "SettingsTab") {
          return (
            <Image
              source={require("./assets/menu-icon-3.png")}
              style={{ height: 25, width: 25, tintColor: colors.whitetext }}
            />
          );
        } else if (routeName === "CartTab") {
          return (
            <Image
              source={require("./assets/menu-icon-4.png")}
              style={{ height: 25, width: 25, tintColor: colors.whitetext }}
            />
          );
        } else if (routeName === "MoreTab") {
          return (
            <Image
              source={require("./assets/menu-icon-5.png")}
              style={{ height: 25, width: 25, tintColor: colors.whitetext }}
            />
          );
        }
      }
    }),
    tabBarOptions: {
      labelStyle: {
        fontWeight: "800",
        fontSize: scale(10),
        textAlign: "center"
      },
      activeTintColor: colors.bgblue,
      inactiveTintColor: colors.whitetext,
      style: {
        backgroundColor: colors.tabbarbackground
      }
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  HomeStackNavigator: {
    screen: HomeStackNavigator,
    navigationOptions: {
      title: "Home",
      drawerIcon: () => <Ionicons name="ios-home" size={24} />
    }
  },
  SettingsScreen: {
    screen: Profile,
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

// const OffersStackNavigator = createStackNavigator({
//   LimitedOffers: {
//     screen: LimitedTimeProduct,
//     navigationOptions: {
//       headerBackground: <Header />,
//       headerBackTitle: null,
//       headerBackImage: (
//         <View
//           style={{
//             marginLeft: scale(5)
//           }}
//         >
//           <Image
//             source={require("./assets/back-arrow-icon.png")}
//             style={{
//               width: moderateScale(20),
//               height: verticalScale(20),
//               tintColor: colors.whitetext
//             }}
//             resizeMode="contain"
//           />
//         </View>
//       )
//     }
//   },
//   BrandingDesign: {
//     screen: ViewAllCategories,
//     navigationOptions: {
//       tabBarVisible: false,
//       headerBackTitle: null,
//       headerBackground: <HeaderTwo />,
//       headerBackImage: (
//         <View
//           style={{
//             marginLeft: scale(5)
//           }}
//         >
//           <Image
//             source={require("./assets/back-arrow-icon.png")}
//             style={{
//               width: moderateScale(20),
//               height: verticalScale(20),
//               tintColor: colors.whitetext
//             }}
//             resizeMode="contain"
//           />
//         </View>
//       )
//     }
//   },
//   ViewCart: {
//     screen: YourCart,
//     navigationOptions: {
//       tabBarVisible: false,
//       headerBackTitle: null,
//       headerBackground: <HeaderTwo />,
//       headerBackImage: (
//         <View
//           style={{
//             marginLeft: scale(5)
//           }}
//         >
//           <Image
//             source={require("./assets/back-arrow-icon.png")}
//             style={{
//               width: moderateScale(20),
//               height: verticalScale(20),
//               tintColor: colors.whitetext
//             }}
//             resizeMode="contain"
//           />
//         </View>
//       )
//     }
//   }
// });

// const CheckOutStackNavigator = createStackNavigator({
//   MainScreen: {
//     screen: MainWalkthrough,
//     navigationOptions: {
//       header: null,
//       tabBarVisible: false
//     }
//   },

//   FirstPage: {
//     screen: FirstScreen,
//     navigationOptions: {
//       header: null,
//       tabBarVisible: false
//     }
//   }
// });
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
    HomeStackNavigator,
    Auth: AuthNavigator
  },
  {
    initialRouteName: "AuthLoading"
  }
);
const AppContainer = createAppContainer(SwitchNavigator);

// export default createAppContainer( SwitchNavigator);
export default navigationRouter;
