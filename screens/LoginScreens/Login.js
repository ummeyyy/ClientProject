import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LogoAndName from "../../components/LogoAndName";
import CategoryButton from "../../components/CategoryButton";
import MobileInput from "../../components/MobileInput";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";
import { Entypo } from "@expo/vector-icons";

class Login extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.passwordRemember = this.passwordRemember.bind(this);

    this.state = {
      showPassword: true,
      rememberPassword: true,
      email: "",
      password: ""
    };
  }

  toggleSwitch() {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  passwordRemember() {
    this.setState({
      rememberPassword: !this.state.rememberPassword
    });
  }

  tapOnBack = () => {
    this.props.navigation.navigate("AfterSplash");
  };

  tapOnLogin = () => {
    this.props.navigation.navigate("HomeTab");
  };

  tapOnRegister = () => {
    this.props.navigation.navigate("SignUpScreen");
  };

  tapOnForgotPassword = () => {
    this.props.navigation.navigate("ForgotPassword");
  };

  render() {
    return (
      <KeyboardAwareScrollView
        style={
          <ImageBackground
            source={require("../../assets/bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              opacity: 0.8,
              backgroundColor: colors.blacktext,
              overflow: "hidden"
            }}
            resizeImage="cover"
          />
        }
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
      >
        <View
          style={{
            flex: 1,
            marginTop: verticalScale(10),
            height: verticalScale(550),
            width: moderateScale(370)
          }}
        >
          {/* LOGO & TEXT START*/}
          <View
            style={{
              position: "absolute",
              top: verticalScale(55),
              height: verticalScale(350),
              width: moderateScale(370),
              backgroundColor: colors.whitetext
            }}
          >
            <View
              style={{
                marginLeft: moderateScale(15),
                marginTop: verticalScale(10)
              }}
            >
              <View
                style={{
                  marginTop: verticalScale(5),
                  alignItems: "center"
                }}
              >
                <Image
                  source={require("../../assets/logo.png")}
                  style={{
                    width: moderateScale(150),
                    height: verticalScale(152)
                  }}
                  resizeMode="contain"
                />

                <Text style={styles.welcometext}>WELCOME</Text>
              </View>

              {/* LOGO & TEXT END*/}
            </View>
          </View>
          {/* BACK ARROW START*/}
          <TouchableOpacity
            style={{
              height: verticalScale(35),
              width: moderateScale(35),
              marginTop: verticalScale(75),
              zIndex: scale(9999),
              left: moderateScale(16)
            }}
            onPress={() => this.tapOnBack()}
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
          {/* LOGO AND NAME END*/}
        </View>

        {/* PROFILE PICTURE START */}
        <View
          style={[styles.profilepictureContainer, { top: verticalScale(270) }]}
        >
          <Image
            source={require("../../assets/dp.jpg")}
            style={{
              width: moderateScale(121),
              height: verticalScale(125),
              zIndex: scale(9999)
            }}
            resizeMode="cover"
          />
        </View>
        {/* BACKGROUND IMAGE Start*/}
        <View
          style={{
            position: "relative",
            top: moderateScale(190),
            height: "100%",
            width: moderateScale(400),
            backgroundColor: colors.blacktext
          }}
        >
          <ImageBackground
            source={require("../../assets/bg.jpg")}
            style={{
              width: "100%",
              height: "100%",
              opacity: 0.4,
              backgroundColor: colors.blacktext,
              overflow: "hidden"
            }}
            resizeImage="cover"
          ></ImageBackground>

          <View style={{ position: "absolute", left: moderateScale(16) }}>
            {/* ALL INPUT FIELDS END*/}

            {/* Enter email START */}
            <View
              style={[
                styles.methodContainer,
                {
                  marginTop: verticalScale(100),
                  marginHorizontal: moderateScale(25)
                }
              ]}
            >
              <View style={{ flex: 0.25 }}>
                <Image
                  source={require("../../assets/emailicon.png")}
                  style={{
                    width: moderateScale(25),
                    height: verticalScale(25),
                    tintColor: colors.whitetext
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={{
                    marginLeft: moderateScale(-20),
                    color: colors.whitetext,
                    fontSize: scale(14),
                    fontWeight: "400"
                  }}
                  value={this.state.email}
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({ email: text })}
                  placeholder={"ENTER EMAIL ADDRESS"}
                  placeholderTextColor={colors.whitetext}
                  returnKeyType="done"
                />
              </View>
            </View>
            {/* Enter password Start */}
            <View
              style={[
                styles.methodContainer,
                {
                  marginTop: verticalScale(10),
                  marginHorizontal: moderateScale(25)
                }
              ]}
            >
              <View style={{ flex: 0.25 }}>
                <Image
                  source={require("../../assets/pwd.png")}
                  style={{
                    width: moderateScale(25),
                    height: verticalScale(25),
                    tintColor: colors.whitetext
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={{
                    marginLeft: moderateScale(-20),
                    color: colors.whitetext,
                    fontSize: scale(14),
                    fontWeight: "400"
                  }}
                  value={this.state.password}
                  secureTextEntry={this.state.showPassword}
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({ password: text })}
                  placeholder={"ENTER PASSWORD"}
                  placeholderTextColor={colors.whitetext}
                  returnKeyType="done"
                />
              </View>
              <View style={{ position: "absolute", right: moderateScale(20) }}>
                <TouchableOpacity onPress={this.toggleSwitch}>
                  {!this.state.showPassword ? (
                    <Image
                      source={require("../../assets/eye-close.png")}
                      style={{
                        width: moderateScale(25),
                        height: verticalScale(25)
                      }}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={require("../../assets/eye-open.png")}
                      style={{
                        width: moderateScale(25),
                        height: verticalScale(25)
                      }}
                      resizeMode="contain"
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            {/* Enter password END */}

            <View
              style={{
                flexDirection: "row",
                marginVertical: verticalScale(20),
                marginHorizontal: moderateScale(25)
              }}
            >
              {/* Remember Me START*/}
              <TouchableOpacity
                style={styles.rememberContainer}
                onPress={this.passwordRemember}
              >
                {!this.state.rememberPassword ? (
                  <Entypo
                    name="check"
                    color={colors.whitetext}
                    size={scale(16)}
                  />
                ) : null}
              </TouchableOpacity>
              <View
                style={{
                  marginTop: verticalScale(4),
                  marginHorizontal: moderateScale(5)
                }}
              >
                <Text style={styles.rememberText}> REMEMBER ME </Text>
              </View>

              <View
                style={{
                  marginTop: verticalScale(4),
                  marginHorizontal: moderateScale(20)
                }}
              >
                <Text
                  style={styles.forgotText}
                  onPress={() => this.tapOnForgotPassword()}
                >
                  FORGOT PASSWORD?
                </Text>
              </View>

              {/* Remember Me END*/}
            </View>

            {/* LOGIN BUTTON START*/}
            <View
              style={{
                marginTop: verticalScale(10),
                marginHorizontal: moderateScale(25)
              }}
            >
              <CategoryButton
                style={styles.loginbutton}
                onPress={() => this.tapOnLogin()}
              >
                <Text style={styles.loginbuttontext}>LOGIN</Text>
              </CategoryButton>
            </View>
            {/* LOGIN BUTTON END*/}
            {/* Dont have an account START*/}
            <TouchableOpacity
              style={{
                marginTop: verticalScale(30),
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
              onPress={() => this.tapOnRegister()}
            >
              <Text style={styles.alreadytext}>
                DON'T HAVE AN ACCOUNT? REGISTER
              </Text>
              <Entypo
                name="chevron-right"
                color={colors.whitetext}
                size={scale(15)}
              />
            </TouchableOpacity>
            {/*Dont Have an account END*/}
          </View>
          {/* ALL INPUT FIELDS END*/}
        </View>
        {/* BACKGROUND IMAGE END*/}
      </KeyboardAwareScrollView>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blacktext
  },
  welcometext: {
    color: colors.bgblue,
    fontSize: scale(24.5),
    fontWeight: "800"
  },
  profilepictureContainer: {
    overflow: "hidden",
    zIndex: scale(9999),
    width: moderateScale(119),
    height: verticalScale(125),
    borderRadius: moderateScale(60),
    borderWidth: scale(4),
    borderColor: colors.bgblue,
    position: "relative"
  },
  methodContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(54),
    width: moderateScale(320),
    paddingLeft: moderateScale(15),
    backgroundColor: colors.blacktext,
    opacity: 0.8,
    borderRadius: moderateScale(25),
    borderColor: colors.bgblue,
    borderWidth: scale(1.5)
  },
  InputTextStyle: {
    color: colors.blacktext,
    fontSize: scale(14),
    fontWeight: "400"
  },
  rememberContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(26),
    width: moderateScale(26),
    borderRadius: moderateScale(3),
    backgroundColor: colors.blacktext,
    opacity: 0.5,
    borderColor: colors.bgblue,
    borderWidth: scale(2)
  },
  rememberText: {
    color: colors.whitetext,
    fontSize: scale(13),
    fontWeight: "300"
  },
  forgotText: {
    color: colors.bgblue,
    fontSize: scale(12),
    textDecorationLine: "underline",
    fontWeight: "400"
  },
  loginbutton: {
    backgroundColor: colors.bgblue,
    borderColor: colors.bgblue,
    height: verticalScale(54),
    width: moderateScale(320),
    borderRadius: scale(25)
  },
  loginbuttontext: {
    fontSize: scale(18),
    color: colors.whitetext,
    fontWeight: "800"
  },
  alreadytext: {
    color: colors.whitetext,
    textAlign: "center",
    fontWeight: "800",
    fontSize: scale(12),
    textDecorationLine: "underline"
  }
});
