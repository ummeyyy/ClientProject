import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import colors from "../assets/colors";
import { moderateScale, scale, verticalScale } from "../scale";

const CategoryButton = ({ children, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.buttonstyle, style]}>{children}</View>
  </TouchableOpacity>
);
export default CategoryButton;

const styles = StyleSheet.create({
  buttonstyle: {
    width: moderateScale(105),
    height: verticalScale(30),
    backgroundColor: colors.bgblue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: scale(15),
    marginHorizontal: scale(4)
  }
});
