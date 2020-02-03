import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

class PaymentMethodSelection extends Component {
  constructor() {
    super();
    this.state = { isHidden: false };
  }

  buttonPressed = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.methodContainer}>
          <View
            style={{
              marginRight: moderateScale(15),
              position: "absolute",
              left: moderateScale(20)
            }}
          >
            {this.props.children}
          </View>
          <View
            style={{
              position: "absolute",
              left: moderateScale(70)
            }}
          >
            <Text
              style={{
                color: colors.greytext,
                fontSize: scale(17),
                fontWeight: "300"
              }}
            >
              {this.props.name}
            </Text>
            {this.props.balance ? (
              <Text
                style={{
                  color: colors.bgblue,
                  fontSize: scale(8),
                  fontWeight: "500"
                }}
              >
                {this.props.balance}
              </Text>
            ) : null}
          </View>
          <View
            style={{
              marginLeft: moderateScale(20),
              position: "absolute",
              right: moderateScale(8)
            }}
          >
            {!this.state.isHidden ? (
              <TouchableOpacity onPress={this.buttonPressed}>
                <Entypo
                  name="circle"
                  color={colors.greytext}
                  size={scale(32)}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this.buttonPressed}>
                <MaterialCommunityIcons
                  name="check-circle-outline"
                  color={colors.bgblue}
                  size={scale(35)}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}
export default PaymentMethodSelection;

const styles = StyleSheet.create({
  container: {
    // alignItems: "flex-start",
    // justifyContent: "flex-start"
  },
  methodContainer: {
    height: verticalScale(60),
    width: moderateScale(320),
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: scale(1),
    borderBottomColor: colors.greytext,
    flexDirection: "row"
  }
});
