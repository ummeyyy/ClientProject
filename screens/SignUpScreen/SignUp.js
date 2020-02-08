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

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showPassword: true,
      email: "",
      fname: "",
      password: "",
      mobilenumber: ""
    };
  }

  toggleSwitch() {
    this.setState({ showPassword: !this.state.showPassword });
  }

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
          {/* LOGO AND NAME START*/}
          <View
            style={{
              position: "absolute",
              paddingTop: verticalScale(-30),
              top: verticalScale(50),
              height: verticalScale(250),
              width: moderateScale(370),
              backgroundColor: colors.whitetext
            }}
          >
            <View
              style={{
                marginLeft: moderateScale(15),
                marginTop: verticalScale(65)
              }}
            >
              <LogoAndName />
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
          >
            <Image
              source={require("../../assets/arrow.png")}
              style={{
                width: moderateScale(17),
                height: verticalScale(19)
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          {/* BACK ARROW END*/}
          {/* LOGO AND NAME END*/}
        </View>

        {/* PROFILE PICTURE START */}
        <View style={styles.profilepictureContainer}>
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
            top: moderateScale(140),
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

            {/* Enter fullname START */}
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
                  source={require("../../assets/user.png")}
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
                  value={this.state.fname}
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({ fname: text })}
                  placeholder={"ENTER FULL NAME"}
                  placeholderTextColor={colors.whitetext}
                  returnKeyType="done"
                />
              </View>
            </View>
            {/* Enter fullname  END */}

            {/* Enter email START */}
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
            {/* Enter password  Start */}
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

            {/* Enter mobile number START */}
            <View>
              <MobileInput />
            </View>
            {/* Enter mobile number END */}

            {/* CREATE ACCOUNT BUTTON START*/}
            <View
              style={{
                marginTop: verticalScale(10),
                marginHorizontal: moderateScale(25)
              }}
            >
              <CategoryButton style={styles.createaccounttbutton}>
                <Text style={styles.createaccountbuttontext}>
                  CREATE ACCOUNT
                </Text>
              </CategoryButton>
            </View>
            {/* CREATE ACCOUNT BUTTON END*/}
            {/* ALREADY A MEMBER START*/}
            <TouchableOpacity
              style={{
                marginTop: verticalScale(30),
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={styles.alreadytext}>ALREADY A MEMBER? LOGIN</Text>
              <Entypo
                name="chevron-right"
                color={colors.whitetext}
                size={scale(15)}
              />
            </TouchableOpacity>
            {/*ALREADY A MEMBER END*/}

            {/*FINE PRINT START*/}
            <View
              style={{
                marginTop: verticalScale(30),
                marginHorizontal: moderateScale(15),
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={styles.finePrint}>
                {
                  "*By tapping on CREATE ACCOUNT you agree to our \nTerms & Conditions And Privacy Policy."
                }
              </Text>
            </View>

            {/*FINE PRINT END*/}
          </View>
          {/* ALL INPUT FIELDS END*/}
        </View>
        {/* BACKGROUND IMAGE END*/}
      </KeyboardAwareScrollView>
    );
  }
}
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blacktext
  },
  profilepictureContainer: {
    overflow: "hidden",
    zIndex: scale(9999),
    width: moderateScale(119),
    height: verticalScale(125),
    borderRadius: moderateScale(60),
    borderWidth: scale(4),
    borderColor: colors.bgblue,
    position: "relative",
    top: verticalScale(210)
  },
  methodContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(54),
    width: moderateScale(320),
    paddingLeft: moderateScale(15),
    borderRadius: moderateScale(25),
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
  createaccounttbutton: {
    backgroundColor: colors.bgblue,
    borderColor: colors.bgblue,
    height: verticalScale(54),
    width: moderateScale(320),
    borderRadius: scale(25)
  },
  createaccountbuttontext: {
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
  },
  finePrint: {
    color: colors.inactivegreybutton,
    textAlign: "center",
    fontWeight: "800",
    fontSize: scale(10),
    fontStyle: "italic"
  }
});
