import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import CartPriceTab from "../../components/CartPriceTab";
import PriceTab from "../../components/PriceTab";
import CategoryButton from "../../components/CategoryButton";
import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";
import SavedCard from "./checkoutcomponents/SavedCard";

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newbuttonColor: colors.greytext,
      savedbuttonColor: colors.greytext,
      isHidden: false
    };
    // this.selectionOnPress = this.selectionOnPress.bind(this);
  }

  buttonPressed = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          directionalLockEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={false}
        >
          {/* Searchbar Alternative*/}

          {/* <View
          style={{
            height: moderateScale(50),
            backgroundColor: colors.bgblue
          }}
        ></View> */}

          {/*  heading Section*/}
          <View
            style={{
              marginTop: verticalScale(25),
              flexDirection: "row",
              paddingHorizontal: moderateScale(20)
            }}
          >
            <Image
              source={require("../../assets/yourcart.png")}
              style={styles.yourcartlogo}
            />
            <Text style={styles.screenTitle}>SUMMARY</Text>

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
                <Text style={styles.stepText}>FINAL STEP</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <CategoryButton style={styles.stepcountContainer}>
                  <Text style={styles.stepcountText}>03</Text>
                </CategoryButton>
              </View>
            </View>
            {/* STEP DESIGNING END*/}
          </View>
          {/* heading Section END*/}

          {/* APP LOGO START*/}
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: verticalScale(15)
            }}
          >
            <Image
              source={require("../../assets/logo.png")}
              style={{
                width: moderateScale(90),
                height: verticalScale(90)
              }}
              resizeMode="contain"
            />
          </View>

          {/* APP LOGO END*/}

          {/* ORDER NUMBER BUTTON */}
          <View style={{ marginTop: verticalScale(10) }}>
            <CategoryButton style={styles.orderNumberbuttonContainer}>
              <Text style={styles.orderNumberText}>ORDER NUMBER: #1234567</Text>
            </CategoryButton>
          </View>

          {/* PAYMENT MODE */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View>
              <Image
                source={require("../../assets/pay-mode.png")}
                style={{
                  width: moderateScale(55),
                  height: verticalScale(55)
                }}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={styles.paymentmodeText}>PAYMENT MODE : </Text>
            </View>
            <View>
              <Text
                style={[styles.paymentmodeText, { color: colors.greytext }]}
              >
                CREDIT CARD
              </Text>
            </View>
          </View>
          {/* PAYMENT MODE END*/}

          {/* SAVED ACOUNT DETAILS START */}
          <View style={styles.methodContainer}>
            {/* VIEW FOR TEXTS */}
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 0.75,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Image
                  source={require("../../assets/visa.png")}
                  style={{
                    width: moderateScale(80),
                    height: verticalScale(80),
                    position: "absolute",
                    right: moderateScale(10)
                  }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1.65 }}>
                <Text style={styles.accountholdertext}>
                  ACCOUNT HOLDER NAME
                </Text>
                <Text style={styles.othertext}>Expiry: 2020/02</Text>
                <Text style={styles.othertext}>
                  Card Number: 01234 5678 9876
                </Text>
              </View>
            </View>
            <View
              style={{
                left: moderateScale(130)
              }}
            >
              <CategoryButton style={styles.changeeditContainer}>
                <Text style={styles.changeeditText}>CHANGE</Text>
              </CategoryButton>
            </View>
          </View>

          {/* SAVED ACOUNT DETAILS END */}

          {/* YOUR CART START */}
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <View
              style={{
                marginLeft: moderateScale(33),
                marginTop: verticalScale(10)
              }}
            >
              {/* <Image
                source={require("../../assets/yourcart.png")}
                style={{
                  width: moderateScale(30),
                  height: verticalScale(30)
                }}
                resizeMode="contain"
              /> */}
              <Image
                source={require("../../assets/yourcart.png")}
                style={styles.yourcartlogo}
              />
            </View>
            <View
              style={{
                marginLeft: moderateScale(10),
                marginTop: verticalScale(10)
              }}
            >
              <Text style={styles.paymentmodeText}>YOUR CART </Text>
            </View>
            <View
              style={{
                marginLeft: moderateScale(100),
                marginTop: verticalScale(2)
              }}
            >
              <CategoryButton style={styles.changeeditContainer}>
                <Text style={styles.changeeditText}>EDIT</Text>
              </CategoryButton>
            </View>
          </View>
          {/* YOUR CART END */}

          {/* TOTAL TAGS START */}
          <CartPriceTab>
            <View style={{ flex: 1.5 }}>
              <Text
                style={{
                  left: scale(25),
                  color: colors.whitetext,
                  fontSize: scale(13),
                  fontWeight: "700"
                }}
              >
                SUB TOTAL
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  left: scale(25),
                  color: colors.whitetext,
                  fontSize: scale(13),
                  fontWeight: "700"
                }}
              >
                AED 5,080
              </Text>
            </View>
          </CartPriceTab>

          {/* SERVICE CHARGES*/}
          <CartPriceTab style={{ backgroundColor: colors.grey2 }}>
            <View style={{ flex: 1.5 }}>
              <Text
                style={{
                  left: scale(25),
                  color: colors.whitetext,
                  fontSize: scale(12),
                  fontWeight: "700"
                }}
              >
                SERVICE CHARGES
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  left: scale(25),
                  color: colors.whitetext,
                  fontSize: scale(13),
                  fontWeight: "700"
                }}
              >
                AED 70
              </Text>
            </View>
          </CartPriceTab>

          {/* SAVINGS*/}
          <CartPriceTab style={{ backgroundColor: colors.inactivegreybutton }}>
            <View style={{ flex: 1.5 }}>
              <Text
                style={{
                  left: scale(25),
                  color: colors.whitetext,
                  fontSize: scale(12),
                  fontWeight: "700"
                }}
              >
                SAVINGS
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  left: scale(25),
                  color: colors.whitetext,
                  fontSize: scale(13),
                  fontWeight: "700"
                }}
              >
                AED 1,080
              </Text>
            </View>
          </CartPriceTab>
          {/* TOTAL */}
          <CartPriceTab
            style={{
              backgroundColor: colors.whitetext,
              height: verticalScale(40)
            }}
          >
            <View style={{ flex: 1.5 }}>
              <Text
                style={{
                  left: scale(25),
                  color: colors.bgblue,
                  fontSize: scale(13),
                  fontWeight: "700"
                }}
              >
                TOTAL
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  left: scale(25),
                  color: colors.bgblue,
                  fontSize: scale(13),
                  fontWeight: "700"
                }}
              >
                AED 5,150
              </Text>
            </View>
          </CartPriceTab>

          {/* TOTAL TAGS END */}

          {/* LAST PRICE TOTAL START */}

          {/* TOTAL TAB BAR*/}
          <PriceTab
            style={{
              backgroundColor: colors.bgblue,
              marginTop: verticalScale(0)
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

              <View style={styles.proceedbuttonwrapper}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: moderateScale(5),
                    paddingTop: verticalScale(3.5)
                  }}
                >
                  <View
                    style={{
                      flex: 2.2,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <Text style={styles.proceedbuttontext}>ORDER NOW</Text>
                  </View>

                  <View
                    style={{
                      flex: 0.4,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <AntDesign
                      name="rightcircle"
                      color={colors.whitetext}
                      size={scale(20)}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </PriceTab>
        </ScrollView>
      </View>
    );
  }
}
export default StepThree;

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
  //NEXT SECTION
  orderNumberbuttonContainer: {
    width: moderateScale(290),
    height: verticalScale(35),
    marginTop: scale(10),
    borderRadius: moderateScale(25),
    backgroundColor: colors.greytext,
    marginHorizontal: moderateScale(35)
  },
  orderNumberText: {
    color: colors.whitetext,
    fontSize: scale(12),
    fontWeight: "bold"
  },
  // NEXT SECTION STYLE
  paymentmodeText: {
    fontSize: scale(15),
    fontWeight: "700",
    color: colors.bgyellow
  },
  // NEXT SECTION STYLE
  methodContainer: {
    marginHorizontal: moderateScale(25),
    height: verticalScale(100),
    width: moderateScale(320),
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: scale(1),
    borderBottomColor: colors.greytext
  },
  accountholdertext: {
    fontSize: scale(13),
    color: colors.bgyellow,
    fontWeight: "300"
  },
  othertext: {
    fontSize: scale(12),
    color: colors.blacktext,
    fontWeight: "300"
  },
  // NEXT SECTION STYLE

  changeeditContainer: {
    marginVertical: verticalScale(5),
    width: moderateScale(70),
    height: verticalScale(28),
    borderRadius: moderateScale(25),
    backgroundColor: colors.bgyellow
  },
  changeeditText: {
    color: colors.whitetext,
    fontSize: scale(11),
    fontWeight: "700"
  },
  // NEXT SECTION STYLE
  tpricetabtext: {
    fontSize: scale(25),
    fontWeight: "700",
    color: colors.whitetext
  },
  proceedbuttonwrapper: {
    alignItems: "center",
    justifyContent: "center",
    top: scale(20),
    right: scale(-8),
    width: moderateScale(165),
    height: verticalScale(50),
    position: "absolute",
    backgroundColor: colors.bgyellow,
    paddingHorizontal: moderateScale(5)
  },
  proceedbuttontext: {
    fontSize: scale(15),
    fontWeight: "600",
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
