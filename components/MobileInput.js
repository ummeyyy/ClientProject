import React from "react";
import {
  View,
  Image,
  Text,
  Modal,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableOpacity
} from "react-native";

// native base imports
import { Input, Icon } from "native-base";

import { Entypo } from "@expo/vector-icons";

import data from "../Countries";
import { moderateScale, scale, verticalScale } from "../scale";
import colors from "../assets/colors";

// Default render of country flag
const defaultFlag = data.filter(obj => obj.name === "United Kingdom")[0].flag;
const defaultCode = data.filter(obj => obj.name === "United Kingdom")[0]
  .dial_code;

export default class MobileInput extends React.Component {
  state = {
    flag: defaultFlag,
    code: defaultCode,
    modalVisible: false,
    phoneNumber: ""
  };

  tapOnBack = () => {
    this.props.navigation.navigate("SignUpScreen");
  };

  onChangeText(key, value) {
    this.setState({
      [key]: value
    });
  }
  showModal() {
    this.setState({ modalVisible: true });
  }
  hideModal() {
    this.setState({ modalVisible: false });
    // Refocus on the Input field after selecting the country code
    this.refs.PhoneInput._root.focus();
  }

  async getCountry(country) {
    const countryData = await data;
    try {
      const countryCode = await countryData.filter(
        obj => obj.name === country
      )[0].dial_code;
      const countryFlag = await countryData.filter(
        obj => obj.name === country
      )[0].flag;
      // Set data from user choice of country
      this.setState({ phoneNumber: countryCode, flag: countryFlag });
      await this.hideModal();
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    let { flag } = this.state;
    let { code } = this.state;
    const countryData = data;
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.container}>
              {/* Phone input with native-base */}
              {/* phone section  */}
              <View
                style={[
                  styles.infoContainer,
                  {
                    marginTop: verticalScale(10),
                    marginHorizontal: moderateScale(25)
                  }
                ]}
              >
                <View style={{ flex: 0.15 }}>
                  <Image
                    source={require("../assets/phone.png")}
                    style={{
                      width: moderateScale(25),
                      height: verticalScale(25),
                      tintColor: colors.whitetext
                    }}
                    resizeMode="contain"
                  />
                </View>
                {/* country flag */}
                <View
                  style={{
                    marginLeft: moderateScale(5),
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: scale(30)
                    }}
                  >
                    {flag}
                  </Text>
                  <TouchableOpacity
                    onPress={() => this.showModal()}
                    style={{
                      flexDirection: "row"
                    }}
                  >
                    <Text
                      style={{
                        fontSize: scale(30),
                        color: colors.whitetext,
                        fontSize: scale(14),
                        fontWeight: "400"
                      }}
                    >
                      {code}
                    </Text>
                    <Entypo
                      color={colors.whitetext}
                      size={scale(20)}
                      name="chevron-down"
                    />
                  </TouchableOpacity>
                </View>

                <View style={{ flex: 1 }}>
                  {/* open modal */}
                  <Input
                    style={styles.input}
                    placeholder="ENTER MOBILE NUMBER"
                    placeholderTextColor={colors.whitetext}
                    keyboardType={"phone-pad"}
                    returnKeyType="done"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={false}
                    ref="PhoneInput"
                    value={this.state.phoneNumber}
                    onChangeText={val => {
                      if (this.state.phoneNumber === "") {
                        // render UK phone code by default when Modal is not open
                        this.onChangeText("phoneNumber", defaultCode + val);
                      } else {
                        // render country code based on users choice with Modal
                        this.onChangeText("phoneNumber", val);
                      }
                    }}
                  />
                  {/* Modal for country code and flag */}
                  <Modal
                    animationType="slide" // fade
                    transparent={false}
                    visible={this.state.modalVisible}
                  >
                    <View style={{ flex: 1 }}>
                      <View
                        style={{
                          flex: 10,
                          backgroundColor: "transparent"
                        }}
                      >
                        {/* BACK ARROW START*/}

                        <View
                          style={{
                            paddingTop: 10,
                            backgroundColor: "transparent",
                            backgroundColor: colors.bgblue,
                            height: verticalScale(370)
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => this.hideModalx()}
                            style={{
                              paddingTop: verticalScale(20),
                              paddingLeft: moderateScale(10)
                            }}
                          >
                            <Entypo
                              color={colors.whitetext}
                              size={scale(35)}
                              name="chevron-left"
                            />
                          </TouchableOpacity>
                          {/* BACK ARROW END*/}

                          {/* LOGO & TEXT START*/}
                          <View
                            style={{
                              marginTop: verticalScale(5),
                              alignItems: "center"
                            }}
                          >
                            <Image
                              source={require("../assets/logo.png")}
                              style={{
                                width: moderateScale(170),
                                height: verticalScale(172)
                              }}
                              resizeMode="contain"
                            />

                            <Text style={styles.textlight}>
                              creative design
                            </Text>
                            <Text style={styles.textlight}>
                              solution provider
                            </Text>
                          </View>

                          {/* LOGO & TEXT END*/}
                        </View>
                        <FlatList
                          data={countryData}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={({ item }) => (
                            <TouchableWithoutFeedback
                              onPress={() => this.getCountry(item.name)}
                            >
                              <View
                                style={[
                                  styles.countryStyle,
                                  {
                                    flexDirection: "row",
                                    alignItems: "center"
                                  }
                                ]}
                              >
                                <View
                                  style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "flex-start"
                                  }}
                                >
                                  <Text style={{ fontSize: 40 }}>
                                    {item.flag}
                                  </Text>

                                  <View
                                    style={{
                                      alignItems: "center",
                                      justifyContent: "flex-end",
                                      marginLeft: moderateScale(10)
                                    }}
                                  >
                                    <Text
                                      style={{
                                        fontSize: scale(16),
                                        fontWeight: "400",
                                        color: colors.blacktext
                                      }}
                                    >
                                      {item.name}
                                    </Text>
                                  </View>
                                </View>
                                <View
                                  style={{
                                    position: "absolute",
                                    right: moderateScale(10)
                                  }}
                                >
                                  <Text
                                    style={{
                                      fontSize: scale(16),
                                      fontWeight: "400",
                                      color: colors.bgorange
                                    }}
                                  >
                                    {item.dial_code}
                                  </Text>
                                </View>
                              </View>
                            </TouchableWithoutFeedback>
                          )}
                        />
                      </View>
                    </View>
                  </Modal>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    flexDirection: "column"
  },
  textlight: {
    fontWeight: "100",
    color: colors.whitetext,
    fontSize: scale(30)
  },
  input: {
    flex: 1,
    fontSize: scale(13),
    color: colors.whitetext,
    fontWeight: "300"
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: verticalScale(54),
    width: moderateScale(320),
    paddingLeft: moderateScale(10),
    borderRadius: moderateScale(25),
    backgroundColor: colors.blacktext,
    opacity: 0.8,
    borderRadius: moderateScale(25),
    borderColor: colors.bgblue,
    borderWidth: scale(1.5)
  },
  itemStyle: {
    marginBottom: moderateScale(10)
  },
  textStyle: {
    padding: scale(5),
    fontSize: scale(18),
    color: colors.whitetext,
    fontWeight: "800"
  },
  countryStyle: {
    flex: 1,
    backgroundColor: colors.whitetext,
    borderBottomColor: colors.inactivegreybutton,
    borderBottomWidth: 1,
    padding: scale(5),
    marginHorizontal: moderateScale(20)
  }
});
