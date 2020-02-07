import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  ScrollView
} from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

import CategoryButton from "../../components/CategoryButton";

class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: false,
      email: ""
    };
  }

  buttonPressed = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enabled
        keyboardVerticalOffset={Platform.OS === "ios" ? scale(200) : 0}
      >
        {/* <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        > */}
        <View style={styles.container}>
          {/* BACK ARROW START*/}
          <TouchableOpacity
            style={{
              height: verticalScale(35),
              width: moderateScale(35),
              position: "absolute",
              top: verticalScale(15),
              left: moderateScale(5)
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
              marginTop: verticalScale(40)
            }}
          >
            <Image
              source={require("../../assets/main-icon.png")}
              style={{
                width: moderateScale(110),
                height: verticalScale(112)
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
            <Text style={styles.largetext}>{"FORGOT PASSWORD"}</Text>
            <View
              style={{
                marginTop: verticalScale(15),
                marginHorizontal: moderateScale(20)
              }}
            >
              <Text style={styles.smalltext}>
                {
                  "Enter your email address and you'll get an email\nwith the instructions to reset password."
                }
              </Text>
            </View>
          </View>
          {/* SCREEN TEXT END*/}

          {/* Enter emai START */}
          <View
            style={{
              marginTop: verticalScale(20)
            }}
          >
            <View
              style={[
                styles.methodContainer,
                { marginVertical: verticalScale(10) }
              ]}
            >
              <View style={{ flex: 0.25 }}>
                <Image
                  source={require("../../assets/emailicon.png")}
                  style={{
                    width: moderateScale(25),
                    height: verticalScale(25),
                    tintColor: colors.greytext
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={{
                    marginLeft: moderateScale(-10),
                    color: colors.greytext,
                    fontSize: scale(14),
                    fontWeight: "400"
                  }}
                  value={this.state.email}
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({ email: text })}
                  placeholder={"ENTER EMAIL ADDRESS"}
                  returnKeyType="done"
                />
              </View>
            </View>
          </View>
          {/* Enter emai  END */}

          {/* BACK TO LOGIN PAGE BUTTON START*/}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CategoryButton style={styles.submitrequestbutton}>
              <Text style={styles.submitrequestbuttontext}>SUBMIT REQUEST</Text>
            </CategoryButton>
          </View>
          {/* BACK TO LOGIN PAGE BUTTON END*/}

          {/* RESEND EMAIL START*/}

          <TouchableOpacity style={{ marginTop: verticalScale(40) }}>
            <Text style={styles.resendemailtext}>RESEND EMAIL</Text>
          </TouchableOpacity>
          {/* RESEND EMAIL END*/}
        </View>
        {/* </ScrollView> */}
      </KeyboardAvoidingView>
    );
  }
}
export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.whitetext
  },
  largetext: {
    fontSize: scale(20),
    color: colors.bgblue,
    textAlign: "center",
    fontWeight: "700"
  },
  smalltext: {
    fontSize: scale(12),
    color: colors.grey2,
    textAlign: "center",
    fontWeight: "400"
  },
  methodContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(54),
    width: moderateScale(320),
    paddingLeft: moderateScale(25),
    borderRadius: moderateScale(25),
    backgroundColor: colors.whitetext,
    borderRadius: moderateScale(25),
    borderColor: colors.bgblue,
    borderWidth: scale(1.5)
  },
  passwordText: {
    color: colors.blacktext,
    fontSize: scale(14),
    fontWeight: "400"
  },
  submitrequestbutton: {
    backgroundColor: colors.bgblue,
    borderColor: colors.whitetext,
    height: verticalScale(54),
    width: moderateScale(320),
    borderRadius: scale(50)
  },
  submitrequestbuttontext: {
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
