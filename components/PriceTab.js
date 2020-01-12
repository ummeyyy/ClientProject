import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { moderateScale, scale, verticalScale } from "../scale";
import colors from "../assets/colors";

const PriceTab = ({ children, style }) => (
  <View style={[styles.pricetabWrapper, style]}>{children}</View>
);
export default PriceTab;

const styles = StyleSheet.create({
  pricetabWrapper: {
    height: verticalScale(90),
    backgroundColor: colors.bgyellow,
    marginTop: verticalScale(25),
    paddingHorizontal: moderateScale(20)
  }
});
