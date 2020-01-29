import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import CategoryButton from "../../components/CategoryButton";
import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

class ThankyouScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: moderateScale(50),
            backgroundColor: colors.bgblue
          }}
        ></View>
        <View
          style={{
            paddingHorizontal: moderateScale(8)
          }}
        >
          <Image
            source={require("./assets/thanks.png")}
            style={styles.image}
            resizeMode="cover"
          />
          <View
            style={{
              position: "absolute",
              zIndex: scale(999)
            }}
          >
            <CategoryButton style={styles.orderNumberbuttonContainer}>
              <Text style={styles.orderNumberText}>ORDER NUMBER: #1234567</Text>
            </CategoryButton>
            <CategoryButton style={styles.orderTrackingbuttonContainer}>
              <Text style={styles.orderTrackingText}>ORDER TRACKING</Text>
            </CategoryButton>
            <CategoryButton style={styles.continueShoppingbuttonContainer}>
              <Text style={styles.continueShoppingText}>CONTINUE SHOPPING</Text>
            </CategoryButton>
          </View>
        </View>
      </View>
    );
  }
}
export default ThankyouScreen;

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
