import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class navigationRouter extends Component {
  render() {
    {
      console.log("hellp");
    }
    return (
      <View style={styles.container}>
        <Text>navigationRouter</Text>
      </View>
    );
  }
}
export default navigationRouter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
