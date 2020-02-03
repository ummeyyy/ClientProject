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
import { moderateScale, scale, verticalScale } from "../../scale";

import colors from "../../assets/colors";

class StepTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newbuttonColor: colors.greytext,
      savedbuttonColor: colors.greytext
    };
    // this.selectionOnPress = this.selectionOnPress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Searchbar Alternative*/}
        {/* <View
          style={{
            height: moderateScale(50),
            backgroundColor: colors.bgblue
          }}
        ></View> */}

        {/* Checkout heading Section*/}
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
                <Text style={styles.stepcountText}>02</Text>
              </CategoryButton>
            </View>
          </View>
          {/* STEP DESIGNING END*/}
        </View>

        {/* Checkout heading Section END*/}

        {/* NEW CARD / SAVED CARD START */}
        <View style={{ flexDirection: "row", marginTop: verticalScale(20) }}>
          {/* NEW CARD START */}
          <View
            style={{
              marginLeft: moderateScale(25)
            }}
          >
            <CategoryButton
              style={[
                styles.cardbuttonContainer,
                { backgroundColor: this.state.newbuttonColor }
              ]}
              onPress={() => this.setState({ newbuttonColor: colors.bgblue })}
              onPressOut={() =>
                this.setState({ newbuttonColor: colors.greytext })
              }
            >
              <Text style={styles.cardbuttonText}>NEW CARD</Text>
            </CategoryButton>
          </View>

          {/* SAVED CARD START */}

          <View style={{ position: "absolute", right: moderateScale(30) }}>
            <CategoryButton
              style={[
                styles.cardbuttonContainer,
                { backgroundColor: this.state.savedbuttonColor }
              ]}
              onPress={() => this.setState({ savedbuttonColor: colors.bgblue })}
              onPressOut={() =>
                this.setState({ savedbuttonColor: colors.greytext })
              }
            >
              <Text style={styles.cardbuttonText}>SAVED CARD</Text>
            </CategoryButton>
          </View>
        </View>

        {/* NEW CARD / SAVED CARD END */}

        {/* PROCEED TO NEXT STEP BUTTON START*/}
        <View
          style={{
            marginTop: verticalScale(115),
            marginBottom: verticalScale(30)
          }}
        >
          <CategoryButton style={styles.addmorebuttonContainer}>
            <Text style={styles.addmoreText}>PROCEED TO NEXT STEP</Text>
          </CategoryButton>
        </View>
        {/* PROCEED TO NEXT STEP BUTTON END*/}

        {/* TOTAL PRICE TAB BOTTOM START */}
        <PriceTab
          style={{
            backgroundColor: colors.bgblue,
            marginTop: verticalScale(10)
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
          </View>
        </PriceTab>
        {/* TOTAL PRICE TAB BOTTOM END */}
      </View>
    );
  }
}
export default StepTwo;

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
  cardbuttonContainer: {
    width: moderateScale(100),
    height: verticalScale(35),
    borderRadius: moderateScale(25),
    marginHorizontal: moderateScale(48)
  },
  cardbuttonText: {
    color: colors.whitetext,
    fontSize: scale(12),
    fontWeight: "500"
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
