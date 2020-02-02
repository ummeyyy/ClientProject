import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";
import { FontAwesome } from "@expo/vector-icons";

class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "column" }}>
          {/* MINUS */}
          <TouchableOpacity
            onPress={() => this.props.minus}
            style={styles.minusiconwrapper}
          >
            <FontAwesome
              name="minus"
              color={colors.whitetext}
              size={scale(23)}
            />
          </TouchableOpacity>

          {/* COUNT */}
          <View style={styles.countwrapper}>
            <Text style={styles.counttext}>{this.props.startcount}</Text>
          </View>

          {/* PLUS */}
          <TouchableOpacity
            onPress={() => this.props.plus}
            style={styles.plusiconwrapper}
          >
            <FontAwesome
              name="plus"
              color={colors.whitetext}
              size={scale(23)}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  plusiconwrapper: {
    width: moderateScale(40),
    height: moderateScale(30),
    backgroundColor: colors.bgblue,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  minusiconwrapper: {
    width: moderateScale(40),
    height: moderateScale(30),
    backgroundColor: colors.bgblue,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  countwrapper: {
    backgroundColor: colors.whitetext,
    borderWidth: scale(4),
    borderColor: colors.whitetext,
    padding: scale(0.25),
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  counttext: {
    fontSize: scale(20),
    fontWeight: "bold",
    color: colors.bgblue
  }
});
