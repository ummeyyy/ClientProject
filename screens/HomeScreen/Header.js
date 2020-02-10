import React, { Component } from "react";
import { StyleSheet, View, Text, Image, StatusBar } from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* TOP PART OF HEADER */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {/* DRAWER ICON START*/}

          <View
            style={{
              flex: 0.2,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: scale(10),
              marginTop: verticalScale(10)
            }}
          >
            <Image
              source={require("../../assets/menu-icon.png")}
              style={{
                width: moderateScale(25),
                height: verticalScale(25)
              }}
              resizeMode="contain"
            />
          </View>
          {/* DRAWER ICON END*/}
          {/* Logo START*/}
          <View
            style={{
              flex: 0.2,
              alignItems: "center",
              justifyContent: "center",
              marginTop: verticalScale(10),
              marginLeft: moderateScale(20)
            }}
          >
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: moderateScale(40),
                height: verticalScale(40)
              }}
              resizeMode="contain"
            />
          </View>

          {/* Logo END*/}

          {/* COMPANY NAME*/}
          <View
            style={{
              flex: 0.8,
              alignItems: "flex-start",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginLeft: moderateScale(5),
                marginTop: verticalScale(8)
              }}
            >
              <Text>
                <Text style={styles.whitetextbold}>
                  adin
                  <Text
                    style={[
                      styles.whitetextbold,
                      {
                        color: colors.bgyellow
                      }
                    ]}
                  >
                    studios
                  </Text>
                </Text>
              </Text>
            </View>
            {/* COMPANY TAGLINE START */}

            <View
              style={{
                marginLeft: moderateScale(40),
                marginTop: verticalScale(-5)
              }}
            >
              <Text style={styles.taglineText}>A Creative Design Company</Text>
            </View>
            {/* COMPANY TAGLINE END */}

            {/* COMPANY NAME END*/}
          </View>

          {/* OTHER ICONS STARTING */}
          <View
            style={{
              flex: 0.3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: scale(10),
              marginTop: verticalScale(10),
              marginRight: moderateScale(10)
            }}
          >
            {/* NOTIFICATION ICON START*/}
            <Image
              source={require("../../assets/notification.png")}
              style={{
                width: moderateScale(25),
                height: verticalScale(25)
              }}
              resizeMode="contain"
            />
            {/* NOTIFICATION ICON END*/}

            {/* CART ICON START*/}
            <Image
              source={require("../../assets/cart-icon.png")}
              style={{
                width: moderateScale(25),
                height: verticalScale(25)
              }}
              resizeMode="contain"
            />
            {/* CART ICON END*/}
          </View>
          {/* OTHER ICONS END */}
        </View>
      </View>
    );
  }
}
export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bgblue
  },
  taglineText: {
    color: colors.whitetext,
    fontSize: scale(6),
    fontWeight: "700"
  },
  whitetextbold: {
    color: colors.whitetext,
    fontSize: scale(22),
    fontWeight: "700"
  }
});
