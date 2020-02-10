import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import { Entypo } from "@expo/vector-icons";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

import CategoryButton from "../../components/CategoryButton";

class MainWalkthrough extends Component {
  tapOnSkip = () => {
    this.props.navigation.navigate("SignUpScreen");
  };

  tapOnStartTour = () => {
    this.props.navigation.navigate("FirstPage");
  };

  render() {
    return (
      <View style={styles.container}>
        {/* BACKGROUND IMAGE */}
        <ImageBackground
          source={require("../../assets/bg.jpg")}
          style={{
            width: "100%",
            height: "100%",
            resizeImage: "contain",
            opacity: 0.4,
            backgroundColor: colors.blacktext,
            overflow: "hidden"
          }}
        ></ImageBackground>
        {/* SKIP BUTTON START */}
        <View
          style={{
            marginTop: verticalScale(10),
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: verticalScale(30),
            right: moderateScale(20)
          }}
        >
          <CategoryButton
            style={styles.skipbutton}
            onPress={() => this.tapOnSkip()}
          >
            <Text style={styles.skipbuttontext}>SKIP</Text>
          </CategoryButton>
        </View>
        {/* SKIP BUTTON END */}

        {/* CENTER YELLOW CIRCL START */}
        <View style={styles.newFeatureYellowRound}>
          <Image
            source={require("../../assets/prize.png")}
            style={{
              width: moderateScale(60),
              height: verticalScale(60),
              position: "absolute",
              top: moderateScale(25),
              tintColor: colors.whitetext,
              marginVertical: verticalScale(10)
            }}
            resizeMode="contain"
          />
          <View
            style={{
              marginTop: verticalScale(80)
            }}
          >
            <Text style={styles.smalltext}>{"introducing\n the all new"}</Text>
            <Text style={styles.largetext}>{"features"}</Text>
          </View>

          <TouchableOpacity
            style={{
              marginVertical: verticalScale(-5)
            }}
          >
            <Entypo
              name="chevron-down"
              color={colors.bgblue}
              size={scale(45)}
            />
          </TouchableOpacity>
        </View>

        {/* CENTER YELLOW CIRCL END */}

        {/* QUICK TOUR BUTTON START*/}
        <View
          style={{
            marginTop: verticalScale(10),
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: verticalScale(160)
          }}
        >
          <CategoryButton
            style={styles.quicktourbutton}
            onPress={() => this.tapOnStartTour()}
          >
            <Text style={styles.quicktourbuttontext}>Start the quick tour</Text>
          </CategoryButton>
        </View>

        {/* QUICK TOUR BUTTON END*/}
      </View>
    );
  }
}
export default MainWalkthrough;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blacktext
  },
  skipbutton: {
    backgroundColor: "transparent",
    borderColor: colors.whitetext,
    borderWidth: scale(3),
    height: verticalScale(40),
    width: moderateScale(70),
    borderRadius: scale(50)
  },
  skipbuttontext: {
    fontSize: scale(14),
    color: colors.whitetext,
    fontWeight: "900"
  },
  smalltext: {
    fontSize: scale(18),
    color: colors.whitetext,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "500"
  },
  largetext: {
    fontSize: scale(40),
    color: colors.blacktext,
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "900"
  },
  newFeatureYellowRound: {
    width: moderateScale(270),
    height: verticalScale(285),
    backgroundColor: colors.bgyellow,
    borderRadius: scale(165),
    borderWidth: scale(0.2),
    borderColor: colors.bgyellow,
    position: "absolute",
    top: verticalScale(150),
    alignItems: "center",
    justifyContent: "center"
  },
  quicktourbutton: {
    backgroundColor: "transparent",
    borderColor: colors.whitetext,
    borderWidth: scale(3),
    height: verticalScale(45),
    width: moderateScale(200),
    borderRadius: scale(50)
  },
  quicktourbuttontext: {
    fontSize: scale(15),
    color: colors.whitetext,
    fontWeight: "700"
  }
});
