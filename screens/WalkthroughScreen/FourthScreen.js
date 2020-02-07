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

class FourthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* BACKGROUND IMAGE */}
        <ImageBackground
          source={require("../../assets/walk_4.png")}
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
            top: verticalScale(10),
            right: moderateScale(20)
          }}
        >
          <CategoryButton style={styles.skipbutton}>
            <Text style={styles.skipbuttontext}>SKIP</Text>
          </CategoryButton>
        </View>
        {/* SKIP BUTTON END */}

        {/* SCREEN TEXT START*/}
        <View style={styles.centerTextView}>
          <Text style={styles.largetext}>
            {"Empower Your Business,\nMobilize Your Life!"}
          </Text>
          <View style={{ marginTop: verticalScale(8) }}>
            <Text style={styles.smalltext}>
              {
                "Reach-out the ever expanding mobile\naudiences at large scale to gather useful linking\ndata from mobile users which Significantly\nimproves your digital marketing strategy and\nmakes it peerless to Stand out amongst your\ncompetitors and to Understand treads, and\nimprove performance."
              }
            </Text>
          </View>
          <View style={{ marginTop: verticalScale(8) }}>
            <Text style={styles.smalltext}>
              {"Generate new income streams and maximize\nyour market reach."}
            </Text>
          </View>
        </View>
        {/* SCREEN TEXT END*/}

        {/* QUICK TOUR BUTTON START*/}
        <View
          style={{
            marginTop: verticalScale(10),
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            bottom: verticalScale(20)
          }}
        >
          <CategoryButton style={styles.nextbutton}>
            <Text style={styles.nextbuttontext}>NEXT</Text>
          </CategoryButton>
        </View>

        {/* QUICK TOUR BUTTON END*/}
      </View>
    );
  }
}
export default FourthScreen;

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
    top: verticalScale(300),
    alignItems: "center",
    justifyContent: "center"
  },
  largetext: {
    fontSize: scale(16),
    color: colors.bgyellow,
    textAlign: "center",
    fontWeight: "800"
  },
  smalltext: {
    fontSize: scale(10),
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
