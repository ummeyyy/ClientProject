import React, { Component } from "react";
import { StyleSheet, View, Text, Image, StatusBar } from "react-native";

import { Images } from "./appConfigurations/Images";
import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";
import { SplashScreen } from "expo";

class Splash extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <View
          style={{
            paddingHorizontal: moderateScale(30),
            paddingTop: verticalScale(15)
          }}
        >
          <Text style={styles.textlight}>creative design</Text>
          <Text style={styles.textlight}>solution provider</Text>

          <View style={{ paddingTop: verticalScale(15) }}>
            <Text style={styles.textbold}>we create.</Text>
            <Text style={styles.textbold}>reinvent.</Text>
            <Text style={styles.textbold}>rediscover.</Text>
            <Text style={styles.textbold}>brands!</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bgblue
  },
  image: {
    height: verticalScale(200),
    width: moderateScale(200)
  },
  textlight: {
    fontWeight: "100",
    color: colors.whitetext,
    fontSize: scale(30)
  },
  textbold: {
    fontWeight: "700",
    color: colors.whitetext,
    fontSize: scale(22)
  }
});
