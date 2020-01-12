import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

class ActualPriceCal extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            marginTop: verticalScale(10)
          }}
        >
          <Text style={styles.originalpricetabtext}>
            AED {this.props.price}
          </Text>
          <View
            style={{
              height: verticalScale(16),
              width: 60,
              borderRadius: scale(3),
              backgroundColor: colors.bgred,
              color: colors.whitetext,
              marginLeft: moderateScale(2),
              marginTop: verticalScale(3),
              paddingHorizontal: moderateScale(3),
              paddingTop: moderateScale(1)
            }}
          >
            <Text
              style={{
                fontWeight: "800",
                fontSize: scale(9),
                color: colors.whitetext
              }}
            >
              {this.props.sale} % OFF
            </Text>
          </View>
        </View>

        <Text style={styles.pricetabtext}>AED {this.props.aftersale}</Text>

        <Text style={styles.onelinetext}>{this.props.oneline}</Text>
      </View>
    );
  }
}
export default ActualPriceCal;

const styles = StyleSheet.create({
  originalpricetabtext: {
    fontSize: scale(14),
    fontWeight: "400",
    color: colors.whitetext,
    textDecorationLine: "line-through"
  },
  onelinetext: {
    fontSize: scale(8),
    fontWeight: "400",
    color: colors.whitetext,
    top: scale(3)
  },
  pricetabtext: {
    fontSize: scale(20),
    fontWeight: "bold",
    color: colors.whitetext
  }
});
