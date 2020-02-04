import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { moderateScale, scale, verticalScale } from "../../../scale";

import colors from "../../../assets/colors";

import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

class VisaMasterCard extends Component {
  constructor() {
    super();
    this.state = { isHidden: false, visa: false, master: false };
  }

  buttonPressed = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  visabuttonPressed = () => {
    this.setState({
      visa: !this.state.visa
    });
  };

  masterbuttonPressed = () => {
    this.setState({
      master: !this.state.master
    });
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

          <View
            style={{
              marginTop: verticalScale(50),
              marginRight: moderateScale(-5)
            }}
          >
            {!this.state.master ? (
              <TouchableOpacity onPress={this.masterbuttonPressed}>
                <Entypo
                  name="circle"
                  color={colors.greytext}
                  size={scale(28)}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this.masterbuttonPressed}>
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
          <View
            style={{
              marginTop: verticalScale(50),
              marginRight: moderateScale(-7)
            }}
          >
            {!this.state.visa ? (
              <TouchableOpacity onPress={this.visabuttonPressed}>
                <Entypo
                  name="circle"
                  color={colors.greytext}
                  size={scale(28)}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this.visabuttonPressed}>
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
