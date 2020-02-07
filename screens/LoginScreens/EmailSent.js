import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

import CategoryButton from "../../components/CategoryButton";

class EmailSent extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* BACK ARROW START*/}
        <TouchableOpacity
          style={{
            height: verticalScale(35),
            width: moderateScale(35),
            position: "absolute",
            top: verticalScale(15),
            left: moderateScale(15)
          }}
        >
          <Image
            source={require("../../assets/arrow.png")}
            style={{
              width: moderateScale(30),
              height: verticalScale(32)
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* BACK ARROW END*/}

        {/* LOGO START*/}
        <View
          style={{
            marginTop: verticalScale(50)
          }}
        >
          <Image
            source={require("../../assets/email-sent.png")}
            style={{
              width: moderateScale(150),
              height: verticalScale(152)
            }}
            resizeMode="contain"
          />
        </View>
        {/* LOGO END*/}

        {/* SCREEN TEXT START*/}
        <View
          style={{
            marginTop: verticalScale(10)
          }}
        >
          <Text style={styles.largetext}>{"WE'VE SEND\nYOU AN EMAIL"}</Text>
          <View style={{ marginTop: verticalScale(15) }}>
            <Text style={styles.smalltext}>
              {
                "We've send you an email with a link\nto change your account password."
              }
            </Text>
          </View>
        </View>
        {/* SCREEN TEXT END*/}

        {/* BACK TO LOGIN PAGE BUTTON START*/}
        <View
          style={{
            marginTop: verticalScale(30),
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <CategoryButton style={styles.backtologinbutton}>
            <Text style={styles.backtologinbuttontext}>BACK TO LOGIN PAGE</Text>
          </CategoryButton>
        </View>
        {/* BACK TO LOGIN PAGE BUTTON END*/}

        {/* RESEND EMAIL START*/}

        <TouchableOpacity style={{ marginTop: verticalScale(30) }}>
          <Text style={styles.resendemailtext}>RESEND EMAIL</Text>
        </TouchableOpacity>
        {/* RESEND EMAIL END*/}
      </View>
    );
  }
}
export default EmailSent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.whitetext
  },
  largetext: {
    fontSize: scale(30),
    color: colors.bgblue,
    textAlign: "center",
    fontWeight: "700"
  },
  smalltext: {
    fontSize: scale(16),
    color: colors.grey2,
    textAlign: "center",
    fontWeight: "500"
  },
  backtologinbutton: {
    backgroundColor: colors.bgblue,
    borderColor: colors.whitetext,
    height: verticalScale(50),
    width: moderateScale(250),
    borderRadius: scale(50)
  },
  backtologinbuttontext: {
    fontSize: scale(14),
    color: colors.whitetext,
    fontWeight: "800"
  },
  resendemailtext: {
    color: colors.grey2,
    textAlign: "center",
    fontWeight: "800",
    fontSize: scale(12),
    textDecorationLine: "underline"
  }
});
