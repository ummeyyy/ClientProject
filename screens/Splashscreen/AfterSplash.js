import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

export default class AfterSplash extends Component {
  tapOnLoginLater = () => {
    this.props.navigation.navigate("MainScreen");
  };
  // tapOnLoginLater = () => {
  //   this.props.navigation.navigate("HomeTab");
  // };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View
            style={{
              flex: 1.75,
              backgroundColor: colors.bgblue,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
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
            </View>
          </View>
          <View
            style={{
              flex: 1,
              width: scale(400),
              backgroundColor: colors.bgbluedark,
              paddingTop: verticalScale(15)
            }}
          >
            <TouchableOpacity style={{ paddingTop: verticalScale(10) }}>
              <Image
                source={require("../../assets/fb.png")}
                style={styles.button}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingTop: verticalScale(10) }}>
              <Image
                source={require("../../assets/gmail.png")}
                style={styles.button}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ paddingTop: verticalScale(10) }}>
              <Image
                source={require("../../assets/email.png")}
                style={styles.button}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingTop: verticalScale(10),
                // marginHorizontal: moderateScale(35)
                alignItems: "center",
                justifyContent: "center"
              }}
              onPress={() => this.tapOnLoginLater()}
            >
              <Text style={styles.logintext}>I'll login later</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bgblue
  },
  image: {
    height: verticalScale(175),
    width: moderateScale(175)
  },
  button: {
    height: verticalScale(50),
    width: moderateScale(340),
    marginHorizontal: moderateScale(35)
  },
  textlight: {
    fontWeight: "100",
    color: colors.whitetext,
    fontSize: scale(30)
  },
  logintext: {
    fontWeight: "400",
    color: colors.whitetext,
    fontSize: scale(15),
    textDecorationLine: "underline",
    textDecorationStyle: "dotted"
  }
});
