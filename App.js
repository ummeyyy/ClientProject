import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "./scale";
import colors from "./assets/colors";

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
        {/* <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate> */}
      </Provider>
    );
  }
}
export default App;
