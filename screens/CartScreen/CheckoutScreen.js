import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import CategoryButton from "../../components/CategoryButton";
import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

class CheckoutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Searchbar Alternative*/}
        <View
          style={{
            height: moderateScale(50),
            backgroundColor: colors.bgblue
          }}
        ></View>

        {/* Checkout heading Section*/}
        <View
          style={{
            marginTop: verticalScale(25),
            flexDirection: "row",
            paddingHorizontal: moderateScale(20)
          }}
        >
          <Image
            source={require("./assets/yourcart.png")}
            style={styles.yourcartlogo}
          />
          <Text style={styles.screenTitle}>YOUR CART</Text>

          <Text style={styles.stepText}>STEP</Text>
          <CategoryButton style={styles.stepcountContainer}>
            <Text style={styles.stepcountText}>01</Text>
          </CategoryButton>
        </View>
      </View>
    );
  }
}
export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blacktext
  },
  yourcartlogo: {
    height: verticalScale(25),
    width: moderateScale(26)
  },
  screenTitle: {
    marginLeft: moderateScale(21),
    fontSize: scale(20),
    fontWeight: "bold",
    color: colors.bgblue,
    marginLeft: moderateScale(12)
  },
  stepText: {
    color: colors.bgyellow,
    fontSize: scale(15),
    fontWeight: "600",
    left: scale(57),
    marginTop: verticalScale(5)
  },
  stepcountContainer: {
    width: moderateScale(34),
    height: verticalScale(37),
    borderRadius: moderateScale(17),
    backgroundColor: colors.bgyellow,
    left: scale(60)
  },
  stepcountText: {
    color: colors.whitetext,
    fontSize: scale(15),
    fontWeight: "bold"
  }
});
