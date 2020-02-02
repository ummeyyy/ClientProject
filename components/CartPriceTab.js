import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../assets/colors";
import { moderateScale, scale, verticalScale } from "../scale";

const CartPriceTab = ({ children, style }) => (
  <View style={[styles.tabstyle, style]}>{children}</View>
);
export default CartPriceTab;

const styles = StyleSheet.create({
  tabstyle: {
    height: verticalScale(38),
    width: moderateScale(380),
    alignItems: "flex-start",
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(8),
    backgroundColor: colors.greytext,
    flexDirection: "row"
  }
});
