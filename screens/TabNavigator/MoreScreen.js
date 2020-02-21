import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import BrochureType from "../ProductScreen/BrochureType";
import colors from "../../assets/colors";

import StepThree from "../CheckoutScreen/StepThree";

class MoreScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>More Screen</Text>
      </View>
    );
  }
}
export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.whitetext
  }
});
