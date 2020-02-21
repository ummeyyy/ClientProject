import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import PriceTab from "../../components/PriceTab";
import CategoryButton from "../../components/CategoryButton";
import PaymentMethodSelection from "../CheckoutScreen/checkoutcomponents/PaymentMenthodSelection";
import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

class CheckoutScreen extends Component {
  handleOnProceedToNextStep = () => {
    this.props.navigation.navigate("CheckoutCard");
  };
  handleOnDetails = () => {
    this.props.navigation.navigate("Summary");
  };

  render() {
    return (
      <View style={styles.container}>
        {/* Searchbar Alternative*/}

        {/* Checkout heading Section*/}
        <View
          style={{
            marginTop: verticalScale(50),
            flexDirection: "row",
            paddingHorizontal: moderateScale(20)
          }}
        >
          <Image
            source={require("../../assets/yourcart.png")}
            style={styles.yourcartlogo}
          />
          <Text style={styles.screenTitle}>CHECKOUT</Text>

          {/* STEP DESIGNING START */}
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              right: moderateScale(25),
              position: "absolute"
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={styles.stepText}>STEP</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <CategoryButton style={styles.stepcountContainer}>
                <Text style={styles.stepcountText}>01</Text>
              </CategoryButton>
            </View>
          </View>
          {/* STEP DESIGNING END*/}
        </View>
        {/* Checkout heading Section END*/}

        {/*WHICH PAYMENT METHOD START*/}
        <View
          style={{
            flex: 2,
            marginHorizontal: moderateScale(20),
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <PaymentMethodSelection name="CASH ON DELIVERY">
            <Image
              source={require("../../assets/cash.png")}
              style={{
                width: moderateScale(30),
                height: verticalScale(30),
                tintColor: colors.grey2
              }}
              resizeMode="contain"
            />
          </PaymentMethodSelection>

          <PaymentMethodSelection
            name="REWARD POINTS"
            balance="BALANCE: 30 AED"
          >
            <Image
              source={require("../../assets/reward.png")}
              style={{
                width: moderateScale(30),
                height: verticalScale(30),
                tintColor: colors.grey2
              }}
              resizeMode="contain"
            />
          </PaymentMethodSelection>

          <PaymentMethodSelection name="CREDIT CARD">
            <Image
              source={require("../../assets/card.png")}
              style={{
                width: moderateScale(30),
                height: verticalScale(30),
                tintColor: colors.grey2
              }}
              resizeMode="contain"
            />
          </PaymentMethodSelection>
        </View>

        {/*WHICH PAYMENT METHOD END*/}

        {/* PROCEED TO NEXT STEP BUTTON START*/}
        <View
          style={{
            flex: 0.7,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: verticalScale(50)
          }}
        >
          <CategoryButton
            style={styles.addmorebuttonContainer}
            onPress={this.handleOnProceedToNextStep}
          >
            <Text style={styles.addmoreText}>PROCEED TO NEXT STEP</Text>
          </CategoryButton>
        </View>
        {/* PROCEED TO NEXT STEP BUTTON END*/}

        {/* TOTAL PRICE TAB BOTTOM START */}
        <PriceTab
          style={{
            backgroundColor: colors.bgblue,
            flex: 0.8,
            justifyContent: "center"
            // marginTop: verticalScale(10),
          }}
        >
          <View
            style={{
              paddingVertical: moderateScale(10)
            }}
          >
            <Text style={styles.onelinetext}> TOTAL PAYABLE</Text>

            <Text style={styles.tpricetabtext}>
              AED 5,300{this.props.total}
            </Text>

            <Text style={styles.onelinetaxtext}> INCLUSIVE OF TAX</Text>

            <TouchableOpacity
              style={[
                styles.proceedbuttonwrapper,
                {
                  flexDirection: "row",
                  paddingHorizontal: moderateScale(5),
                  paddingTop: verticalScale(3.5)
                }
              ]}
              onPress={this.handleOnDetails}
            >
              <View
                style={{
                  flex: 2.2,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text style={styles.proceedbuttontext}>DETAILS</Text>
              </View>

              <View
                style={{
                  flex: 0.5,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: moderateScale(5)
                }}
              >
                <AntDesign
                  name="upcircle"
                  color={colors.whitetext}
                  size={scale(18)}
                />
              </View>
            </TouchableOpacity>
          </View>
        </PriceTab>
        {/* TOTAL PRICE TAB BOTTOM END */}
      </View>
    );
  }
}
export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: colors.blacktext
  },
  yourcartlogo: {
    height: verticalScale(25),
    width: moderateScale(26)
  },
  screenTitle: {
    marginLeft: moderateScale(21),
    fontSize: scale(20),
    fontWeight: "bold",
    color: colors.bgblue,
    marginLeft: moderateScale(12)
  },
  stepText: {
    color: colors.bgyellow,
    fontSize: scale(12),
    fontWeight: "900"
  },
  stepcountContainer: {
    width: moderateScale(31),
    height: verticalScale(34),
    borderRadius: moderateScale(15.5),
    backgroundColor: colors.bgyellow
  },
  stepcountText: {
    color: colors.whitetext,
    fontSize: scale(15),
    fontWeight: "bold"
  },
  // NEXT SECTION STYLE
  addmorebuttonContainer: {
    width: moderateScale(270),
    height: verticalScale(40),
    borderRadius: moderateScale(25),
    backgroundColor: colors.bgyellow,
    marginHorizontal: moderateScale(48)
  },
  addmoreText: {
    color: colors.whitetext,
    fontSize: scale(15),
    fontWeight: "800"
  },
  // NEXT SECTION STYLE
  tpricetabtext: {
    fontSize: scale(25),
    fontWeight: "700",
    color: colors.whitetext
  },
  proceedbuttonwrapper: {
    right: scale(5),
    top: scale(20),
    width: moderateScale(140),
    height: verticalScale(35),
    position: "absolute",
    backgroundColor: colors.bgblue,
    borderWidth: scale(3.5),
    borderColor: colors.whitetext,
    paddingHorizontal: moderateScale(5)
  },
  proceedbuttontext: {
    fontSize: scale(13),
    fontWeight: "700",
    color: colors.whitetext
  },
  onelinetext: {
    fontSize: scale(10),
    fontWeight: "600",
    color: colors.whitetext
  },
  onelinetaxtext: {
    fontSize: scale(10),
    fontWeight: "300",
    color: colors.whitetext
  }
});
