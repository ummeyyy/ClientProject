import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

import CategoryButton from "../../components/CategoryButton";

export default class EmptyFavorites extends Component {
  tapOnGetStarted = () => {
    this.props.navigation.navigate("ListFavourites");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* ICON START*/}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Image
              source={require("../../assets/F2-24.png")}
              style={{
                width: moderateScale(200),
                height: verticalScale(200)
              }}
              resizeMode="contain"
            />
            <Text style={styles.noitemtext}>
              {
                "It seems you have not selected any item\nin your Favourites, start adding items!"
              }
            </Text>
          </View>
          {/* ICON END*/}
          {/* GET STARTED BUTTON START */}
          <View
            style={{
              paddingVertical: verticalScale(30),
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <CategoryButton
              style={styles.createaccounttbutton}
              onPress={this.props.onPress}
            >
              <Text style={styles.createaccountbuttontext}>GET STARTED</Text>
            </CategoryButton>
          </View>
          {/* GET STARTED BUTTON END */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  createaccounttbutton: {
    backgroundColor: colors.bgblue,
    borderColor: colors.bgblue,
    height: verticalScale(54),
    width: moderateScale(320),
    borderRadius: scale(25)
  },
  createaccountbuttontext: {
    fontSize: scale(18),
    color: colors.whitetext,
    fontWeight: "800"
  },
  noitemtext: {
    fontSize: scale(16),
    textAlign: "center",
    color: colors.tabbarbackground,
    fontWeight: "400"
  }
});
