import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView
} from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

import { FontAwesome } from "@expo/vector-icons";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CategoryButton from "../../components/CategoryButton";
import ProfileMbInput from "../ProfileScreen/ProfileComponents/ProfileMbInput";

class SavedCards extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showPassword: true,
      email: "",
      fname: "",
      password: "",
      mobilenumber: "",
      country: "",
      address: ""
    };
  }

  toggleSwitch() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.container}
          scrollEnabled={true}
        >
          {/* ACCOUNT DETAILS SCROLLBAR START*/}
          <View style={styles.catogeryContainer}>
            <ScrollView
              directionalLockEnabled={true}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <Text
                style={[
                  styles.catogeryContainerTitle,
                  { paddingTop: verticalScale(5) }
                ]}
              >
                ACCOUNT DETAILS
              </Text>

              <CategoryButton>
                <Text style={styles.catogeryContainerText}>PROFILE</Text>
              </CategoryButton>

              <CategoryButton
                style={{ backgroundColor: colors.inactivegreybutton }}
              >
                <Text style={styles.catogeryContainerText}>MY ORDERS</Text>
              </CategoryButton>

              <CategoryButton
                style={{ backgroundColor: colors.inactivegreybutton }}
              >
                <Text style={styles.catogeryContainerText}>FAVOURITES</Text>
              </CategoryButton>

              <CategoryButton
                style={{ backgroundColor: colors.inactivegreybutton }}
              >
                <Text style={styles.catogeryContainerText}>SAVED CARDS</Text>
              </CategoryButton>

              <CategoryButton
                style={{ backgroundColor: colors.inactivegreybutton }}
              >
                <Text style={styles.catogeryContainerText}>SETTINGS</Text>
              </CategoryButton>
            </ScrollView>
          </View>
          {/* ACCOUNT DETAILS SCROLLBAR END*/}

          {/* ACCOUNT PROFILE PICTURE START*/}
          <View
            style={{
              paddingVertical: verticalScale(20),
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <View style={styles.profilepictureContainer}>
              <Image
                source={require("../../assets/dp.jpg")}
                style={{
                  width: moderateScale(141),
                  height: verticalScale(145)
                }}
                resizeMode="cover"
              />
            </View>
          </View>
          {/* ACCOUNT PROFILE PICTURE END*/}

          {/* ALL INPUT FIELDS START*/}
          <View
            style={{
              flex: 1,
              alignItems: "center",
              paddingTop: verticalScale(15)
            }}
          >
            {/* Enter fullname START */}
            <View style={styles.methodContainer}>
              <View style={{ flex: 0.25 }}>
                <Image
                  source={require("../../assets/user.png")}
                  style={{
                    width: moderateScale(25),
                    height: verticalScale(25),
                    tintColor: colors.inactivegreybutton
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={{
                    marginLeft: moderateScale(-20),
                    color: colors.greytext,
                    fontSize: scale(14),
                    fontWeight: "400"
                  }}
                  value={this.state.fname}
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({ fname: text })}
                  placeholder={"ENTER FULL NAME"}
                  placeholderTextColor={colors.greytext}
                  returnKeyType="done"
                />
              </View>
            </View>
            {/* Enter fullname  END */}

            {/* Enter email START */}
            <View style={styles.methodContainer}>
              <View style={{ flex: 0.25 }}>
                <Image
                  source={require("../../assets/emailicon.png")}
                  style={{
                    width: moderateScale(25),
                    height: verticalScale(25),
                    tintColor: colors.inactivegreybutton
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={{
                    marginLeft: moderateScale(-20),
                    color: colors.greytext,
                    fontSize: scale(14),
                    fontWeight: "400"
                  }}
                  value={this.state.email}
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({ email: text })}
                  placeholder={"ENTER EMAIL ADDRESS"}
                  placeholderTextColor={colors.greytext}
                  returnKeyType="done"
                />
              </View>
            </View>
            {/* Enter mobile number START */}
            <View>
              <ProfileMbInput />
            </View>
            {/* Enter mobile number END */}

            {/* Enter password  Start */}
            <View style={styles.methodContainer}>
              <View style={{ flex: 0.25 }}>
                <Image
                  source={require("../../assets/pwd.png")}
                  style={{
                    width: moderateScale(25),
                    height: verticalScale(25),
                    tintColor: colors.inactivegreybutton
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={{
                    marginLeft: moderateScale(-20),
                    color: colors.greytext,
                    fontSize: scale(14),
                    fontWeight: "400"
                  }}
                  value={this.state.password}
                  secureTextEntry={this.state.showPassword}
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({ password: text })}
                  placeholder={"ENTER PASSWORD"}
                  placeholderTextColor={colors.greytext}
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

            {/* Enter Address START */}
            <View style={styles.methodContainer}>
              <View style={{ flex: 0.25 }}>
                <FontAwesome
                  color={colors.inactivegreybutton}
                  size={scale(28)}
                  name="home"
                />
              </View>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={{
                    marginLeft: moderateScale(-20),
                    color: colors.greytext,
                    fontSize: scale(14),
                    fontWeight: "400"
                  }}
                  value={this.state.address}
                  underlineColorAndroid="transparent"
                  onChangeText={text => this.setState({ address: text })}
                  placeholder={"ENTER ADDRESS"}
                  placeholderTextColor={colors.greytext}
                  returnKeyType="done"
                />
              </View>
            </View>
            {/* Enter Address  END */}
            {/* COUNTRY AND UPDATE BUTTON START */}
            <View
              style={{
                alignItems: "flex-start",
                width: moderateScale(320)
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {/* Enter Country START */}
                <View
                  style={[
                    styles.methodContainer,
                    {
                      width: moderateScale(150)
                    }
                  ]}
                >
                  <View style={{ flex: 0.25 }}>
                    <FontAwesome
                      color={colors.inactivegreybutton}
                      size={scale(28)}
                      name="building"
                    />
                  </View>
                  <View style={{ flex: 1 }}>
                    <TextInput
                      style={{
                        marginLeft: moderateScale(10),
                        color: colors.greytext,
                        fontSize: scale(14),
                        fontWeight: "400"
                      }}
                      value={this.state.country}
                      underlineColorAndroid="transparent"
                      onChangeText={text => this.setState({ country: text })}
                      placeholder={"COUNTRY"}
                      placeholderTextColor={colors.greytext}
                      returnKeyType="done"
                    />
                  </View>
                </View>
                {/* Enter Country  END */}
                {/* UPDATE BUTTON  START */}
                <View
                  style={{
                    paddingLeft: moderateScale(60),
                    paddingTop: verticalScale(15)
                  }}
                >
                  <CategoryButton style={styles.createaccounttbutton}>
                    <Text style={styles.createaccountbuttontext}>UPDATE</Text>
                  </CategoryButton>
                </View>
                {/* UPDATE BUTTON  END */}
              </View>
            </View>
            {/* COUNTRY AND UPDATE BUTTON END */}
          </View>
          {/* ALL INPUT FIELDS END*/}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
export default SavedCards;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  catogeryContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    height: verticalScale(60),
    padding: scale(10),
    backgroundColor: colors.whitetext,
    borderBottomWidth: scale(1.5),
    borderBottomColor: colors.greytext
  },
  catogeryContainerTitle: {
    color: colors.greytext,
    fontSize: scale(12),
    fontWeight: "bold"
  },
  catogeryContainerText: {
    color: colors.whitetext,
    fontSize: scale(10),
    fontWeight: "bold"
  },

  profilepictureContainer: {
    overflow: "hidden",
    width: moderateScale(139),
    height: verticalScale(145),
    borderRadius: moderateScale(70),
    borderWidth: scale(4),
    borderColor: colors.bgblue
  },

  methodContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(54),
    width: moderateScale(320),
    paddingLeft: moderateScale(15),
    paddingVertical: verticalScale(10),
    borderBottomColor: colors.blacktext,
    borderBottomWidth: scale(1.5)
  },
  InputTextStyle: {
    color: colors.blacktext,
    fontSize: scale(14),
    fontWeight: "400"
  },

  createaccounttbutton: {
    backgroundColor: colors.bgblue,
    borderColor: colors.bgblue,
    height: verticalScale(42),
    width: moderateScale(105),
    borderRadius: scale(25)
  },
  createaccountbuttontext: {
    fontSize: scale(15),
    color: colors.whitetext,
    fontWeight: "700"
  }
});
