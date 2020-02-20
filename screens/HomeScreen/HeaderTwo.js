import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

import { withNavigation } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

class HeaderTwo extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.state = {
      showicon: true,
      search: ""
    };
  }

  toggleSearch() {
    this.setState({ showicon: !this.state.showicon });
  }

  tap = () => {
    this.props.navigation.navigate("BrandingDesign");
  };
  notification = () => {
    this.props.navigation.navigate("LimitedOffers");
  };

  cart = () => {
    this.props.navigation.navigate("ViewCart");
  };

  searchbar = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.bgblue,
          paddingTop: verticalScale(3),
          height: verticalScale(50)
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            padding: scale(5),
            marginHorizontal: moderateScale(10),
            marginBottom: verticalScale(5),
            backgroundColor: colors.whitetext,
            width: moderateScale(300),
            height: verticalScale(40)
          }}
        >
          <Image
            source={require("../../assets/searchicon.png")}
            style={{
              width: moderateScale(25),
              height: verticalScale(25)
            }}
            resizeMode="contain"
          />
          <TextInput
            style={{
              marginLeft: moderateScale(-20),
              color: colors.blacktext,
              fontSize: scale(14),
              fontWeight: "400"
            }}
            value={this.state.search}
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ search: text })}
            placeholder={"What are you looking for?"}
            placeholderTextColor={colors.inactivegreybutton}
            returnKeyType="done"
          />
          <FontAwesome
            name="microphone"
            color={colors.inactivegreybutton}
            size={scale(20)}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* TOP PART OF HEADER */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          {/* DRAWER ICON START*/}

          <TouchableOpacity
            style={{
              flex: 0.2,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: scale(30),
              marginTop: verticalScale(2)
            }}
            onPress={this.tap}
          >
            <Image
              source={require("../../assets/menu-icon.png")}
              style={{
                width: moderateScale(25),
                height: verticalScale(25)
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          {/* DRAWER ICON END*/}
          {/* Logo START*/}
          <View
            style={{
              flex: 0.2,
              alignItems: "center",
              justifyContent: "center",
              marginLeft: moderateScale(10)
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
                marginLeft: moderateScale(5)
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
              flex: 0.4,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: scale(10),
              marginRight: moderateScale(10)
            }}
          >
            {/* SEARCH ICON START*/}
            <TouchableOpacity onPress={this.toggleSearch}>
              <Image
                source={require("../../assets/searchicon.png")}
                style={{
                  width: moderateScale(25),
                  height: verticalScale(25),
                  tintColor: colors.whitetext,
                  marginRight: scale(5),
                  marginLeft: scale(-5)
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            {/* SEARCH ICON END*/}

            {/* NOTIFICATION ICON START*/}
            <TouchableOpacity onPress={this.notification}>
              <Image
                source={require("../../assets/notification.png")}
                style={{
                  width: moderateScale(25),
                  height: verticalScale(25)
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {/* NOTIFICATION ICON END*/}

            {/* CART ICON START*/}
            <TouchableOpacity onPress={this.cart}>
              <Image
                source={require("../../assets/cart-icon.png")}
                style={{
                  width: moderateScale(25),
                  height: verticalScale(25)
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {/* CART ICON END*/}
          </View>
          {/* OTHER ICONS END */}
        </View>
        {!this.state.showicon ? <this.searchbar /> : null}
      </SafeAreaView>
    );
  }
}
export default withNavigation(HeaderTwo);

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
