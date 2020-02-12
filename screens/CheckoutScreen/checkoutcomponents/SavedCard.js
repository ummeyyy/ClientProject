import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

class SavedCard extends Component {
  constructor() {
    super();
    this.state = { isHidden: false };
  }

  buttonPressed = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* SAVED CARD DETAILS  START */}
        <View style={styles.methodContainer}>
          {/* VIEW FOR TEXTS */}
          <View style={{ flex: 1.8 }}>
            <Text style={styles.accountholdertext}>
              {this.props.accountholdername}
            </Text>
            <Text style={styles.othertext}>
              Expiry: {this.props.accountexpiry}
            </Text>
            <Text style={styles.othertext}>
              Card Number: {this.props.accountnumber}
            </Text>
          </View>
          <View
            style={{
              flex: 0.3,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {!this.state.isHidden ? (
              <TouchableOpacity onPress={this.buttonPressed}>
                <Entypo
                  name="circle"
                  color={colors.greytext}
                  size={scale(25)}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={this.buttonPressed}>
                <MaterialCommunityIcons
                  name="check-circle-outline"
                  color={colors.bgblue}
                  size={scale(27)}
                />
              </TouchableOpacity>
            )}
          </View>
          <View
            style={{
              flex: 0.75,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {this.props.children}
          </View>
        </View>
        {/* SAVED CARD DETAILS END */}
      </View>
    );
  }
}
export default SavedCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
    // backgroundColor: colors.bgblue
  },
  methodContainer: {
    flexDirection: "row",
    height: verticalScale(75),
    width: moderateScale(320),
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: scale(1),
    borderBottomColor: colors.greytext
  },
  accountholdertext: {
    fontSize: scale(13),
    color: colors.bgyellow,
    fontWeight: "300"
  },
  othertext: {
    fontSize: scale(12),
    color: colors.blacktext,
    fontWeight: "300"
  }
});
