import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import CategoryButton from "../../components/CategoryButton";

class YourCart extends Component {
  render() {
    return <View style={styles.container}></View>;
  }
}
export default YourCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whitetext
  },
  image: {
    height: verticalScale(560)
  },
  orderNumberbuttonContainer: {
    width: moderateScale(290),
    height: verticalScale(35),
    marginTop: scale(375),
    borderRadius: moderateScale(25),
    backgroundColor: colors.greytext,
    marginHorizontal: moderateScale(35)
  },
  orderNumberText: {
    color: colors.whitetext,
    fontSize: scale(12),
    fontWeight: "bold"
  },
  orderTrackingbuttonContainer: {
    width: moderateScale(290),
    height: verticalScale(40),
    borderRadius: moderateScale(25),
    marginTop: scale(10),
    backgroundColor: colors.bgyellow,
    marginHorizontal: moderateScale(35)
  },
  orderTrackingText: {
    color: colors.whitetext,
    fontSize: scale(17),
    fontWeight: "bold"
  },
  continueShoppingbuttonContainer: {
    width: moderateScale(290),
    height: verticalScale(45),
    borderRadius: moderateScale(25),
    marginTop: scale(12),
    backgroundColor: colors.bgblue,
    marginHorizontal: moderateScale(35)
  },
  continueShoppingText: {
    color: colors.whitetext,
    fontSize: scale(17),
    fontWeight: "bold"
  }
});
