import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { Card } from "react-native-shadow-cards";

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

class PromotionCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.cardStyle}>
          <View style={{ flex: 2, flexDirection: "row" }}>
            <Image
              source={require("../../../assets/promo.png")}
              resizeMode="cover"
              style={{
                width: moderateScale(150),
                height: verticalScale(143),
                borderRadius: scale(14)
              }}
            />
            <View
              style={{
                paddingHorizontal: moderateScale(6),
                flex: 2,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start"
              }}
            >
              <Text style={styles.promoText}>
                AMAZING 30% OFF ON YOUR FIRST ANIMATION
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: scale(10),
              bottom: scale(8)
            }}
            onPress={this.props.onPress}
          >
            <View style={styles.promobuttonContainer}>
              <Text style={styles.promobuttonText}> DETAILS </Text>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}
export default PromotionCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cardStyle: {
    width: moderateScale(325),
    height: verticalScale(142),
    margin: scale(30),
    borderColor: colors.whitetext,
    borderRadius: scale(15),
    shadowColor: colors.blacktext,
    shadowOffset: { width: moderateScale(0), height: verticalScale(11) },
    shadowOpacity: 0.57,
    shadowRadius: scale(15.19),
    elevation: scale(23)
  },
  promoText: {
    fontSize: scale(15),
    fontWeight: "bold",
    color: colors.promotext
  },
  promobuttonContainer: {
    width: moderateScale(78),
    height: verticalScale(28),
    borderStyle: "solid",
    borderRadius: scale(20),
    backgroundColor: colors.bgblue,
    alignItems: "center",
    justifyContent: "center"
  },
  promobuttonText: {
    fontSize: scale(11.5),
    color: colors.whitetext,
    fontWeight: "600"
  }
});
