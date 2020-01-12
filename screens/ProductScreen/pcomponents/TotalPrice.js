import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

class TotalPrice extends Component {
  render() {
    return (
      <View>
        <Text style={styles.tpricetabtext}>AED {this.props.total}</Text>
        <Text style={styles.onelinetext}>{this.props.oneline}</Text>
        <View style={styles.cartbuttonwrapper}>
          <TouchableOpacity style={{ flexDirection: "row" }}>
            <View style={{ flex: 1.75, padding: scale(4) }}>
              <Text style={styles.cartbuttontext}>VIEW CART</Text>
            </View>

            <View style={{ flex: 0.5, padding: scale(3) }}>
              <AntDesign
                name="rightcircle"
                color={colors.whitetext}
                size={scale(18)}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default TotalPrice;

const styles = StyleSheet.create({
  tpricetabtext: {
    fontSize: scale(30),
    fontWeight: "700",
    color: colors.whitetext
  },
  cartbuttonwrapper: {
    right: scale(5),
    top: scale(5),
    width: moderateScale(150),
    height: verticalScale(35),
    position: "absolute",
    backgroundColor: colors.bgblue,
    borderWidth: scale(3.5),
    borderColor: colors.whitetext,
    paddingHorizontal: moderateScale(5)
  },
  cartbuttontext: {
    flex: 1.75,
    fontSize: scale(14),
    fontWeight: "600",
    color: colors.whitetext
  },
  onelinetext: {
    fontSize: scale(8),
    fontWeight: "400",
    color: colors.whitetext,
    top: scale(3)
  }
});
