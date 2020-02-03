import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { moderateScale, scale, verticalScale } from "../../../scale";

import colors from "../../../assets/colors";

import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

class VisaMasterCard extends Component {
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
        <View
          style={{
            marginLeft: moderateScale(20),
            flexDirection: "row"
          }}
        >
          {/* MASTER CARD */}

          <View style={{ marginTop: verticalScale(50) }}>
            {!this.state.isHidden ? (
              <TouchableOpacity onPress={this.buttonPressed}>
                <Entypo
                  name="circle"
                  color={colors.greytext}
                  size={scale(28)}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this.buttonPressed}>
                <MaterialCommunityIcons
                  name="check-circle-outline"
                  color={colors.bgblue}
                  size={scale(31)}
                />
              </TouchableOpacity>
            )}
          </View>
          <View>
            <Image
              source={require("../../../assets/master.png")}
              style={{
                width: moderateScale(140),
                height: verticalScale(140)
              }}
              resizeMode="contain"
            />
          </View>
          {/* MASTER CARD  END*/}

          {/* VISA CARD START */}

          <View style={{ marginTop: verticalScale(50) }}>
            {!this.state.isHidden ? (
              <TouchableOpacity onPress={this.buttonPressed}>
                <Entypo
                  name="circle"
                  color={colors.greytext}
                  size={scale(28)}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this.buttonPressed}>
                <MaterialCommunityIcons
                  name="check-circle-outline"
                  color={colors.bgblue}
                  size={scale(31)}
                />
              </TouchableOpacity>
            )}
          </View>
          <View>
            <Image
              source={require("../../../assets/visa.png")}
              style={{
                width: moderateScale(140),
                height: verticalScale(140)
              }}
              resizeMode="contain"
            />
          </View>
        </View>
        {/* VISA CARD END */}
      </View>
    );
  }
}
export default VisaMasterCard;

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
