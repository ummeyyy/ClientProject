import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import AddProduct from "../ProductScreen/AddProduct";
import colors from "../../assets/colors";

class MoreScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddProduct></AddProduct>
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
