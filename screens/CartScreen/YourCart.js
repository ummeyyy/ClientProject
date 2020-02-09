import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";

import colors from "../../assets/colors";
import { moderateScale, scale, verticalScale } from "../../scale";
import { Entypo, AntDesign } from "@expo/vector-icons";

import PriceTab from "../../components/PriceTab";
import CartPriceTab from "../../components/CartPriceTab";
import CartItemsFlatlist from "../CartScreen/cartcomponents/CartItemsFlatlist";
import CategoryButton from "../../components/CategoryButton";

class YourCart extends Component {
  constructor() {
    super();

    this.state = {
      promoadded: false,

      addpromodata: "",
      promos: []
    };
  }

  addpromo = promo => {
    this.setState(
      (state, props) => ({
        promos: [...state.promos, promo],
        promoadded: true
      }),
      () => {}
    );
  };

  deletepromo = (promo, index) => {
    let newList = this.state.promos.filter(function(promos) {
      return promos !== promo;
    });
    this.setState(prevState => ({
      promos: newList,
      promoadded: false
    }));
  };

  renderItem = (item, index) => (
    <View
      style={{
        flexDirection: "row",
        width: moderateScale(260),
        height: verticalScale(35),
        paddingLeft: moderateScale(25),
        borderRadius: moderateScale(15.5),
        backgroundColor: colors.inactivegreybutton,
        marginTop: verticalScale(10),
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <View style={{ flex: 1.75 }}>
        <Text
          style={{
            color: colors.greytext,
            fontSize: scale(15),
            fontWeight: "800"
          }}
        >
          {item}
        </Text>
      </View>

      <View style={{ flex: 0.25 }}>
        <TouchableOpacity onPress={() => this.deletepromo(item, index)}>
          <Entypo name="cross" size={scale(25)} color={colors.greytext} />
        </TouchableOpacity>
      </View>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />

        {/* BODY */}
        <ScrollView>
          {/* LOGO AND SCREEN NAME */}
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
            <Text style={styles.screenTitle}>YOUR CART</Text>
          </View>

          {/* ITEMS TO ADD OR DELETE IN THE CART */}
          <View
            style={{
              paddingVertical: verticalScale(20)
            }}
          >
            <CartItemsFlatlist></CartItemsFlatlist>
          </View>

          {/* CONTINUE TO ADD MORE ITEMS BUTTON */}
          <CategoryButton style={styles.addmorebuttonContainer}>
            <Text style={styles.addmoreText}>CONTINUE TO ADD MORE</Text>
          </CategoryButton>

          {/* //APPLY PROMO CODE SECTION */}
          <View
            style={{
              marginTop: verticalScale(20),
              paddingVertical: verticalScale(20),
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={styles.promoText}>APPLY PROMO CODE HERE</Text>
            {/* ADDING PROMOS HERE */}
            <View
              style={{
                flexDirection: "row",
                marginTop: verticalScale(10),
                paddingHorizontal: moderateScale(35)
              }}
            >
              <TextInput
                style={styles.PromoInputContainer}
                placeholder="ENTER CODE"
                onChangeText={text => this.setState({ addpromodata: text })}
              />
              <CategoryButton
                style={styles.applypromoContainer}
                onPress={() => this.addpromo(this.state.addpromodata)}
              >
                <Text style={styles.applypromoText}>APPLY</Text>
              </CategoryButton>
            </View>

            {/* DISPLAYING PROMOS */}
            <FlatList
              data={this.state.promos}
              renderItem={({ item }, index) => this.renderItem(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          {/* CALCULATIONS */}
          <View style={{ marginTop: verticalScale(35) }}>
            {/* SUB TOTAL */}
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
            <CartPriceTab
              style={{ backgroundColor: colors.inactivegreybutton }}
            >
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
          </View>

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
                    <Text style={styles.proceedbuttontext}>PROCEED</Text>
                  </View>

                  <View
                    style={{
                      flex: 0.8,
                      alignItems: "center",
                      justifyContent: "center",
                      paddingLeft: moderateScale(5)
                    }}
                  >
                    <AntDesign
                      name="rightcircle"
                      color={colors.whitetext}
                      size={scale(18)}
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
export default YourCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whitetext
  },
  image: {
    height: verticalScale(560)
  },
  yourcartlogo: {
    height: verticalScale(25),
    width: moderateScale(26)
  },
  screenTitle: {
    fontSize: scale(20),
    fontWeight: "bold",
    color: colors.bgblue,
    marginLeft: moderateScale(12)
  },
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
  promoText: {
    color: colors.blacktext,
    fontSize: scale(14),
    fontWeight: "400"
  },
  PromoInputContainer: {
    width: moderateScale(270),
    height: verticalScale(45),
    paddingLeft: moderateScale(25),
    borderRadius: moderateScale(25),
    backgroundColor: colors.whitetext,
    borderColor: colors.bgblue,
    borderWidth: scale(3),
    color: colors.greytext,
    fontSize: scale(14),
    fontWeight: "800"
  },
  applypromoContainer: {
    width: moderateScale(90),
    height: verticalScale(34.5),
    position: "absolute",
    right: scale(0.4),
    marginVertical: verticalScale(5),
    borderRadius: moderateScale(25),
    backgroundColor: colors.bgblue
  },
  applypromoText: {
    color: colors.whitetext,
    fontSize: scale(14),
    fontWeight: "800"
  },
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
