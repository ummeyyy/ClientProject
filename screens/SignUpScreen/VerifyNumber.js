import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

import CategoryButton from "../../components/CategoryButton";
import ConfirmationCode from "../SignUpScreen/SignUpComponents/ConfirmationCode";

class VerifyNumber extends Component {
  tapOnBack = () => {
    this.props.navigation.navigate("SignUpScreen");
  };

  tapOnVerifyNow = () => {
    this.props.navigation.navigate("Login");
  };

  render() {
    return (
      <View style={styles.container}>
        {/* BACK ARROW START*/}
        <TouchableOpacity
          style={{
            height: verticalScale(35),
            width: moderateScale(35),
            position: "absolute",
            top: verticalScale(15),
            left: moderateScale(15),
            backgroundColor: colors.whitetext
          }}
        >
          <Image
            source={require("../../assets/arrow.png")}
            style={{
              width: moderateScale(30),
              height: verticalScale(32)
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* BACK ARROW END*/}

        {/* LOGO START*/}
        <View
          style={{
            flex: 1.5,
            alignItems: "center",
            justifyContent: "flex-end"
          }}
        >
          <Image
            source={require("../../assets/mobilenumber.png")}
            style={{
              width: moderateScale(180),
              height: verticalScale(182)
            }}
            resizeMode="contain"
          />
        </View>
        {/* LOGO END*/}

        {/* SCREEN TEXT START*/}
        <View
          style={{
            flex: 1.3
          }}
        >
          <Text style={styles.largetext}>{"VERIFY YOUR NUMBER"}</Text>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text>
              <Text style={styles.smalltext}>
                {
                  "Waiting to automaticallyy detect an SMS sent to \n+971 50 1234567."
                }

                <Text
                  style={[
                    styles.smalltext,
                    {
                      color: colors.bgblue,
                      fontWeight: "800"
                    }
                  ]}
                  onPress={() => this.tapOnBack()}
                >
                  {" Wrong Number?"}
                </Text>
              </Text>
            </Text>
          </View>

          {/* CELLS FOR CODE CONFIRMATION START*/}
          <View
            style={{
              flex: 1.5
            }}
          >
            <ConfirmationCode />
          </View>
          {/* CELLS FOR CODE CONFIRMATION END*/}
        </View>
        {/* SCREEN TEXT END*/}

        {/* Didnt get code START */}
        <View
          style={{
            flex: 0.3,
            flexDirection: "row",
            alignItems: "flex-start",
            marginHorizontal: moderateScale(30),
            marginTop: verticalScale(-20)
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "flex-start",
              justifyContent: "center"
            }}
          >
            <Text style={styles.smalltext}>{"Enter 6-digit code"}</Text>
          </View>

          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "center"
            }}
          >
            <Text
              style={[
                styles.smalltext,
                {
                  color: colors.bgblue,
                  fontWeight: "800"
                }
              ]}
              onPress={() => this.tapOnBack()}
            >
              {" Didnt get code?"}
            </Text>
          </View>
        </View>

        {/* Didnt get code END */}

        {/* VERIFY NOW BUTTON START*/}
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: verticalScale(10)
          }}
        >
          <CategoryButton
            style={styles.verifybutton}
            onPress={() => this.tapOnVerifyNow()}
          >
            <Text style={styles.verifybuttonbuttontext}>VERIFY NOW</Text>
          </CategoryButton>
        </View>
        {/* VERIFY NOW BUTTON END*/}
      </View>
    );
  }
}
export default VerifyNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.whitetext
  },
  largetext: {
    fontSize: scale(20),
    color: colors.bgblue,
    textAlign: "center",
    fontWeight: "800"
  },
  smalltext: {
    fontSize: scale(12),
    color: colors.grey2,
    textAlign: "center",
    fontWeight: "500"
  },
  verifybutton: {
    backgroundColor: colors.bgblue,
    borderColor: colors.whitetext,
    height: verticalScale(54),
    width: moderateScale(300),
    borderRadius: scale(50)
  },
  verifybuttonbuttontext: {
    fontSize: scale(18),
    color: colors.whitetext,
    fontWeight: "800"
  }
});
