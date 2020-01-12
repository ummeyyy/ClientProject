import React from "react";
import { Component } from "react";

import { View, Image, Text, StyleSheet } from "react-native";

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

class CategoryRateReview extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: scale(5),
          marginVertical: verticalScale(5)
        }}
      >
        <View
          style={{
            flex: 2,
            alignItems: "flex-start",
            justifyContent: "center"
          }}
        >
          <Text style={styles.catogeryContainerTitle}>
            {this.props.categorytitle}
          </Text>
        </View>
        <View
          style={{
            flex: 1.5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../assets/star.png")}
            style={{
              width: moderateScale(14),
              height: moderateScale(14)
            }}
          />
          <Text style={styles.ratingText}> {this.props.categoryrating} </Text>
          <Text style={styles.reviewsText}>
            {" "}
            | {this.props.categoryreviews} Reviews
          </Text>
        </View>
      </View>
    );
  }
}
export default CategoryRateReview;

const styles = StyleSheet.create({
  catogeryContainerTitle: {
    color: colors.greytext,
    fontSize: scale(12),
    fontWeight: "bold",
    marginTop: scale(7),
    marginHorizontal: moderateScale(4)
  },
  ratingText: {
    fontSize: scale(14),
    fontWeight: "bold",
    color: colors.bgyellow,
    marginTop: verticalScale(5)
  },
  reviewsText: {
    fontSize: scale(11),
    fontWeight: "200",
    color: colors.blacktext,
    marginTop: moderateScale(8)
  }
});
