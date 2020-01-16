// import React, { Component } from "react";
// import { View, Text, StyleSheet } from "react-native";

// import CountDown from "react-native-countdown-component";
// import { moderateScale, scale, verticalScale } from "./scale";
// import colors from "./assets/colors";

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         {console.log("debugging ")}
//         <Navigation />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     marginHorizontal: moderateScale(10)
//   }
// });

import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "./Router";
import store from "./store/Config";
import { persistStore } from "redux-persist";

  class App extends Component {
  render() {
    const persistor = persistStore(store);

    return (
      
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
     
    );
  }
}
export default   App