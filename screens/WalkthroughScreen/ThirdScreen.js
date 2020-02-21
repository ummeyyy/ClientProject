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

class ThirdScreen extends Component {
  tapOnSkip = () => {
    this.props.navigation.navigate("SignUpScreen");
  };

  tapOnNext = () => {
    this.props.navigation.navigate("FourthPage");
  };

  render() {
    return (
      <View style={styles.container}>
        {/* BACKGROUND IMAGE */}
        <ImageBackground
          source={require("../../assets/walk_3.png")}
          style={{
            width: "100%",
            height: "100%",
            resizeImage: "contain"
          }}
        ></ImageBackground>
        {/* SKIP BUTTON START */}
        <View
          style={{
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

        {/* SCREEN TEXT START*/}
        <View style={styles.centerTextView}>
          <Text style={styles.largetext}>
            {
              "Website Design & Development\nDomain & Hosting Registration\nEcommerce | Web Portals\nBi-Lingual Website\nScripting & Animation\nSearch Engine Optimization\nUpdates & Maintenance"
            }
          </Text>
          <View style={{ marginTop: verticalScale(8) }}>
            <Text style={styles.smalltext}>
              {
                "Website Design & Development can tailor your\nidentity on the webto what you want your\nclient to see, and how you want to be found."
              }
            </Text>
          </View>
        </View>
        {/* SCREEN TEXT END*/}

        {/* NEXT BUTTON START*/}
        <View
          style={{
            marginTop: verticalScale(10),
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: verticalScale(35)
          }}
        >
          <CategoryButton
            style={styles.nextbutton}
            onPress={() => this.tapOnNext()}
          >
            <Text style={styles.nextbuttontext}>NEXT</Text>
          </CategoryButton>
        </View>

        {/* NEXT BUTTON END*/}
      </View>
    );
  }
}
export default ThirdScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  skipbutton: {
    backgroundColor: "transparent",
    borderColor: colors.whitetext,
    borderWidth: scale(3),
    height: verticalScale(35),
    width: moderateScale(60),
    borderRadius: scale(50)
  },
  skipbuttontext: {
    fontSize: scale(13),
    color: colors.whitetext,
    fontWeight: "900"
  },
  centerTextView: {
    flex: 1,
    position: "absolute",
    top: verticalScale(310),
    alignItems: "center",
    justifyContent: "center"
  },
  largetext: {
    fontSize: scale(16),
    color: colors.walkthroughdarkblue,
    textAlign: "center",
    fontWeight: "800"
  },
  smalltext: {
    fontSize: scale(12),
    color: colors.grey2,
    textAlign: "center",
    fontWeight: "500"
  },
  nextbutton: {
    backgroundColor: colors.bgblue,
    borderColor: colors.whitetext,
    height: verticalScale(40),
    width: moderateScale(100),
    borderRadius: scale(50)
  },
  nextbuttontext: {
    fontSize: scale(15),
    color: colors.whitetext,
    fontWeight: "600"
  }
});
