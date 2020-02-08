import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { moderateScale, scale, verticalScale } from "../scale";
import colors from "../assets/colors";

class LogoAndName extends Component {
  render() {
    return (
      // COMPLETE CONTAINER
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            flexDirection: "row",
            position: "relative",
            padding: scale(10)
          }}
        >
          {/* Logo START*/}
          <Image
            source={require("../assets/clogo.png")}
            style={{
              width: moderateScale(60),
              height: verticalScale(60)
            }}
            resizeMode="cover"
          />
          {/* Logo END*/}
          {/* COMPANY NAME*/}
          <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
            <View
              style={{ flexDirection: "row", marginLeft: moderateScale(5) }}
            >
              <Text style={styles.nameText}>adin</Text>
              <Text style={[styles.nameText, { color: colors.bgyellow }]}>
                studios
              </Text>
            </View>
            <View style={{ marginTop: verticalScale(-8) }}>
              <Text style={styles.onelineText}>A Creative Design Company</Text>
            </View>
          </View>
          {/* COMPANY NAME END*/}
        </View>
      </View>
    );
  }
}
export default LogoAndName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  nameText: {
    color: colors.greytext,
    fontSize: scale(40),
    fontWeight: "700"
  },
  onelineText: {
    color: colors.greytext,
    fontSize: scale(10),
    fontWeight: "700"
  }
});
