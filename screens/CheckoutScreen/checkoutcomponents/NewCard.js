import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5
} from "@expo/vector-icons";

class NewCard extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showcardnumber: true,
      username: "",
      cardnumber: "",
      year: "",
      month: "",
      cvv: ""
    };
  }

  toggleSwitch() {
    this.setState({ showcardnumber: !this.state.showcardnumber });
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        enabled
        keyboardVerticalOffset={Platform.OS === "ios" ? scale(200) : 0}
      >
        <View style={styles.container}>
          {/* CARD HOLDER NAME START */}

          <View style={styles.methodContainer}>
            <Image
              source={require("../../../assets/user.png")}
              style={{
                width: moderateScale(25),
                height: verticalScale(25),
                position: "absolute",
                left: moderateScale(10),
                tintColor: colors.inactivegreybutton
              }}
              resizeMode="contain"
            />
            <TextInput
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              underlineColorAndroid="transparent"
              placeholder={"CARD HOLDER NAME"}
              returnKeyType="done"
              style={styles.inputContainer}
            />
          </View>
          {/* CARD HOLDER NAME END */}

          {/* CARD EXPIRY DATE START */}

          {/* year */}
          <View style={{ flexDirection: "row" }}>
            <View
              style={[
                styles.shortmethodContainer,
                { marginLeft: moderateScale(5) }
              ]}
            >
              <View style={{ position: "absolute", left: moderateScale(7) }}>
                <FontAwesome5
                  name="calendar-alt"
                  color={colors.greytext}
                  size={scale(23)}
                />
              </View>
              <TextInput
                value={this.state.year}
                underlineColorAndroid="transparent"
                onChangeText={year => this.setState({ year })}
                placeholder={"YEAR"}
                keyboardType={"numeric"}
                returnKeyType="done"
                style={styles.shortinputContainer}
              />
            </View>
            {/* month */}

            <View
              style={[
                styles.shortmethodContainer,
                { marginLeft: moderateScale(10), width: moderateScale(156) }
              ]}
            >
              <View style={{ position: "absolute", left: moderateScale(10) }}>
                <MaterialCommunityIcons
                  name="calendar-outline"
                  color={colors.greytext}
                  size={scale(23)}
                />
              </View>
              <TextInput
                value={this.state.month}
                underlineColorAndroid="transparent"
                onChangeText={month => this.setState({ month })}
                placeholder={"MONTH"}
                keyboardType={"numeric"}
                returnKeyType="done"
                style={styles.shortinputContainer}
              />
            </View>
          </View>
          {/* CARD EXPIRY DATE END */}

          {/* CARD NUMBER START */}
          <View style={{ marginTop: verticalScale(1) }}>
            <View style={styles.methodContainer}>
              <Image
                source={require("../../../assets/pwd.png")}
                style={{
                  width: moderateScale(25),
                  height: verticalScale(25),
                  position: "absolute",
                  left: moderateScale(10),
                  tintColor: colors.inactivegreybutton
                }}
                resizeMode="contain"
              />
              <TextInput
                value={this.state.cardnumber}
                secureTextEntry={this.state.showcardnumber}
                underlineColorAndroid="transparent"
                onChangeText={cardnumber => this.setState({ cardnumber })}
                placeholder={"CARD NUMBER"}
                keyboardType={"numeric"}
                returnKeyType="done"
                style={styles.inputContainer}
              />
              {/* to check if number is to be hidden or not*/}
              <View style={{ position: "absolute", right: moderateScale(20) }}>
                <TouchableOpacity onPress={this.toggleSwitch}>
                  {!this.state.showcardnumber ? (
                    <Image
                      source={require("../../../assets/eye-close.png")}
                      style={{
                        width: moderateScale(25),
                        height: verticalScale(25)
                      }}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={require("../../../assets/eye-open.png")}
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
          </View>

          {/* CARD NUMBER END */}

          {/* CVV NUMBER START */}
          <View style={{ marginTop: verticalScale(1) }}>
            <View style={styles.methodContainer}>
              <Image
                source={require("../../../assets/pwd.png")}
                style={{
                  width: moderateScale(25),
                  height: verticalScale(25),
                  position: "absolute",
                  left: moderateScale(10),
                  tintColor: colors.inactivegreybutton
                }}
                resizeMode="contain"
              />
              <TextInput
                value={this.state.cvv}
                underlineColorAndroid="transparent"
                onChangeText={cvv => this.setState({ cvv })}
                placeholder={"CVV"}
                keyboardType={"numeric"}
                returnKeyType="done"
                style={styles.inputContainer}
              />
              <View style={{ position: "absolute", right: moderateScale(20) }}>
                <TouchableOpacity>
                  <AntDesign
                    name="questioncircleo"
                    color={colors.inactivegreybutton}
                    size={scale(23)}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* CVV NUMBER END */}
        </View>
      </KeyboardAvoidingView>
    );
  }
}
export default NewCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  shortmethodContainer: {
    height: verticalScale(54),
    width: moderateScale(150),
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: scale(1),
    borderBottomColor: colors.greytext
  },
  shortinputContainer: {
    marginLeft: moderateScale(10),
    width: moderateScale(91),
    height: verticalScale(40),
    padding: scale(5),
    backgroundColor: colors.whitetext,
    color: colors.blacktext,
    fontSize: scale(18),
    fontWeight: "300"
  },
  methodContainer: {
    height: verticalScale(54),
    width: moderateScale(320),
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: scale(1),
    borderBottomColor: colors.greytext
  },
  inputContainer: {
    marginLeft: moderateScale(10),
    width: moderateScale(250),
    height: verticalScale(45),
    padding: scale(10),
    backgroundColor: colors.whitetext,
    color: colors.blacktext,
    fontSize: scale(18),
    fontWeight: "300"
  }
});
