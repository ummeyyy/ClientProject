import * as React from "react";
import { View, StyleSheet, Text } from "react-native";

import CardDetails from "../CheckoutScreen/checkoutcomponents/CardDetails";
import Profile from "../ProfileScreen/Profile";

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <Profile />
      // <CardDetails />
      // <View style={styles.container}>
      //   <Text>Settings Screen</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
