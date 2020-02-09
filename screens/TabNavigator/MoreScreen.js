import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import BrochureType from "../ProductScreen/BrochureType";
import colors from "../../assets/colors";

class MoreScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <BrochureType></BrochureType>
      </View>
    );
  }
}
export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whitetext
  }
});
