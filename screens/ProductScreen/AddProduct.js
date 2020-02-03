import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import colors from "../../assets/colors";
import { moderateScale, scale, verticalScale } from "../../scale";

import PreferenceList from "./PreferenceList";
import PageSizesList from "./PageSizesList";

class AddProduct extends Component {
  render() {
    return (
      <View
        style={{
          marginLeft: moderateScale(15),
          marginRight: moderateScale(10)
        }}
      >
        <SafeAreaView />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* SCREEN NAME and details*/}
          <View
            style={{
              marginTop: verticalScale(20)
            }}
          >
            <Text
              style={{
                fontWeight: "800",
                fontSize: scale(11),
                color: colors.greytext
              }}
            >
              BRANDING DESIGN
            </Text>
            <Text style={styles.screenTitle}>BROCHURE</Text>
            <Text style={styles.descriptionText}>
              Short Description will come here in a very stylish and sleek way.
            </Text>
          </View>
          {/* SELECT PREFERENCE*/}
          <View style={{ marginTop: verticalScale(20), flexDirection: "row" }}>
            <Text
              style={{
                fontSize: scale(14),
                fontWeight: "700",
                color: colors.bgblue
              }}
            >
              SELECT YOUR PREFERENCE
            </Text>
            <Text
              style={{
                fontSize: scale(13),
                fontWeight: "300",
                color: colors.bgred,
                marginLeft: moderateScale(40)
              }}
            >
              Required*
            </Text>
          </View>
          <Text style={styles.descriptionText}>
            You can select multiple options.
          </Text>
          {/* PREFERENCES */}
          <PreferenceList></PreferenceList>

          {/* PAGE SIZES */}
          <View style={{ marginTop: verticalScale(35) }}>
            <View
              style={{ marginTop: verticalScale(20), flexDirection: "row" }}
            >
              <Text
                style={{
                  fontSize: scale(14),
                  fontWeight: "700",
                  color: colors.bgblue
                }}
              >
                SELECT YOUR PAGE SIZE
              </Text>
              <Text
                style={{
                  fontSize: scale(13),
                  fontWeight: "300",
                  color: colors.bgred,
                  marginLeft: moderateScale(60)
                }}
              >
                Required*
              </Text>
            </View>
            <Text style={styles.descriptionText}>
              You can select only one option.
            </Text>
            <View style={{ marginTop: verticalScale(10) }}>
              <PageSizesList />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default AddProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whitetext
  },
  screenTitle: {
    fontSize: scale(23),
    fontWeight: "800",
    color: colors.bgyellow
  },
  descriptionText: {
    fontSize: scale(12),
    fontWeight: "300",
    color: colors.blacktext,
    marginTop: scale(5)
  },
  filledBullet: {
    width: moderateScale(28),
    height: verticalScale(28),
    backgroundColor: colors.bgblue,
    borderRadius: moderateScale(14)
  }
});
