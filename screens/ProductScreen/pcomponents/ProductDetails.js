import React from "react";
import { Component } from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import { FontAwesome, FontAwesme5 } from "@expo/vector-icons";

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

class ProductDetails extends React.Component {
  render() {
    return (
      <View style={styles.imageandDescriptionContainer}>
        <View style={styles.productdescription}>
          <Text style={styles.descriptionText}>
            Short Description will come here in a very stylish and sleek way. It
            can be in bullet points, BOLD, ITALIC, UNDERLINE etc
          </Text>
          <Text style={styles.descriptionText}>
            Description will come here in a very stylish and sleek
            way.Description will come here in a very stylish and sleek way..
          </Text>
          <Text style={styles.descriptionText}>
            Description can be in bullet points, BOLD, ITALIC, UNDERLINE etc
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.codeText}>CODE: {this.props.code}</Text>
            <Text style={styles.shareText}> SHARE </Text>
            {/* <FontAwesome
                    name= Platform.OS === 'ios ' ? "share-square-o"
                    color={colors.greytext}
                    size="15"
                    style={{ marginTop: scale(6) }}
                  />   */}
            <FontAwesome
              color={colors.greytext}
              size="15"
              style={{ marginTop: scale(6) }}
              {...Platform.select({
                ios: {
                  name: "share-square"
                },
                android: {
                  name: "plus"
                }
              })}
            />
          </View>
        </View>
        <Image
          source={this.props.productimage}
          style={styles.productimage}
        ></Image>
      </View>
    );
  }
}
export default ProductDetails;

const styles = StyleSheet.create({
  imageandDescriptionContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: scale(5),
    marginTop: scale(2)
  },
  productdescription: {
    flex: 2,
    paddingHorizontal: moderateScale(10),
    marginTop: verticalScale(6)
  },
  descriptionText: {
    fontSize: scale(9),
    fontWeight: "200",
    color: colors.blacktext,
    marginTop: scale(5)
  },
  codeText: {
    fontSize: scale(10),
    fontWeight: "bold",
    color: colors.bgblue,
    marginTop: scale(8)
  },
  shareText: {
    fontSize: scale(10),
    fontWeight: "bold",
    color: colors.greytext,
    marginTop: scale(8),
    marginLeft: scale(25)
  },
  productimage: {
    flex: 2,
    height: moderateScale(180),
    width: moderateScale(175),
    borderRadius: scale(10),
    marginRight: scale(10),
    marginTop: verticalScale(10)
  }
});
