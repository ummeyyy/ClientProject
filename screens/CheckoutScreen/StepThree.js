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

import { SwipeListView } from "react-native-swipe-list-view";

import CartPriceTab from "../../components/CartPriceTab";
import PriceTab from "../../components/PriceTab";

import { FontAwesome, AntDesign } from "@expo/vector-icons";

import CategoryButton from "../../components/CategoryButton";
import SavedCard from "./checkoutcomponents/SavedCard";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

const section = [
  {
    name: "4F FLYERS",
    category: "BRANDING DESIGN",
    price: 1000,
    sale: "10% OFF",
    code: "D01",
    quantity: "10",
    id: "1",
    image: require("../../assets/home.jpg")
  },
  {
    name: "5 PAGE WEBSITE DESIGN",
    category: "WEBSITE",
    price: 2500,
    sale: "35% OFF",
    code: "W01",
    quantity: "01",
    id: "2",
    image: require("../../assets/restaurant.jpg")
  },
  {
    name: "ANIMATION FOR YOUR BUSINESS",
    category: "VIDEO ANIMATION",
    price: 1000,
    sale: "5% OFF",
    code: "V01",
    quantity: "01",
    id: "3",
    image: require("../../assets/home.jpg")
  }
];

class StepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newbuttonColor: colors.greytext,
      savedbuttonColor: colors.greytext,
      isHidden: false,
      count: 1,
      salePrice: (section[0].price * section[0].sale) / 100,
      price: section[0].price,
      actualprice: 0,
      totalPrice: section[0].price - (section[0].price * section[0].sale) / 100
    };
    // this.selectionOnPress = this.selectionOnPress.bind(this);
  }

  buttonPressed = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  handleIncerement = () => {
    this.setState({
      count: this.state.count + 1,
      actualprice: this.state.price - this.state.salePrice,
      totalPrice:
        (this.state.count + 1) * (this.state.price - this.state.salePrice)
    });
  };

  handleDecrement = () => {
    if (this.state.count <= 1) {
      return;
    } else {
      this.setState({
        count: this.state.count - 1,
        actualprice: this.state.price - this.state.salePrice,
        totalPrice:
          (this.state.count - 1) * (this.state.price - this.state.salePrice)
      });
    }
  };

  handleChange = () => {
    this.props.navigation.navigate("CheckoutCard");
  };

  handleOnEdit = () => {
    this.props.navigation.navigate("ViewCart");
  };

  handleOrderNow = () => {
    this.props.navigation.navigate("OrderNow");
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: moderateScale(320),
          backgroundColor: colors.blacktext,
          marginVertical: verticalScale(10)
        }}
      />
    );
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
                width: moderateScale(120),
                height: verticalScale(120)
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
          <View
            style={{
              marginTop: verticalScale(-10),
              alignItems: "center",
              justifyContent: "flex-start",
              paddingHorizontal: moderateScale(20)
            }}
          >
            <View style={styles.methodContainer}>
              <View>
                {/* VIEW FOR LOGO AND TEXT CONTAINER */}
                <View>
                  {/* VIEW FOR LOGO OF CARD TYPE */}
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        flex: 0.75,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <Image
                        source={require("../../assets/visa.png")}
                        style={{
                          width: moderateScale(80),
                          height: verticalScale(80)
                        }}
                        resizeMode="contain"
                      />
                    </View>
                    {/* VIEW FOR TEXT CONTAINER */}
                    <View
                      style={{
                        flex: 2,
                        justifyContent: "center",
                        paddingHorizontal: moderateScale(10)
                      }}
                    >
                      <Text style={styles.accountholdertext}>
                        ACCOUNT HOLDER NAME
                      </Text>
                      <Text style={styles.othertext}>Expiry: 2020/02</Text>
                      <Text style={styles.othertext}>
                        Card Number: 01234 5678 9876
                      </Text>
                    </View>
                  </View>
                </View>
                {/* VIEW FOR BUTTON */}
                <View
                  style={{
                    marginTop: verticalScale(-3),
                    justifyContent: "space-evenly",
                    alignItems: "flex-end"
                  }}
                >
                  <CategoryButton style={styles.changeeditContainer}>
                    <Text style={styles.changeeditText}>CHANGE</Text>
                  </CategoryButton>
                </View>
              </View>
            </View>
          </View>
          {/* SAVED ACOUNT DETAILS END */}

          {/* YOUR CART START */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              paddingVertical: verticalScale(20),
              paddingHorizontal: moderateScale(20)
            }}
          >
            {/* YOUR CART LOGO AND TEXT START*/}
            <View
              style={{
                flex: 0.5,
                flexDirection: "row",
                justifyContent: "space-evenly"
              }}
            >
              <Image
                source={require("../../assets/yourcart.png")}
                style={styles.yourcartlogo}
              />
              <Text style={styles.paymentmodeText}>YOUR CART </Text>
            </View>
            {/* YOUR CART LOGO AND TEXT END*/}

            {/* EDIT BUTTON START*/}
            <View
              style={{
                flex: 0.5,
                alignItems: "flex-end"
              }}
            >
              <CategoryButton
                style={styles.changeeditContainer}
                onPress={this.handleOnEdit}
              >
                <Text style={styles.changeeditText}>EDIT</Text>
              </CategoryButton>
            </View>
            {/* EDIT BUTTON END*/}
          </View>

          {/* DISPLAYING ITEMS THROUGH FLATLIST */}
          <View
            style={{
              alignItems: "center",
              paddingBottom: verticalScale(20)
            }}
          >
            <FlatList
              horizontal={false}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              useFlatList={true}
              keyExtractor={(item, index) => item.id}
              ItemSeparatorComponent={this.renderSeparator}
              data={section}
              renderItem={({ item }) => (
                // ITEMS DESIGN
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: verticalScale(10),
                    width: moderateScale(325)
                  }}
                >
                  {/* ITEM IMAGE */}

                  <View
                    style={{
                      flex: 0.78,
                      marginLeft: moderateScale(5)
                    }}
                  >
                    <Image
                      source={item.image}
                      style={styles.itemImage}
                      resizeMode="cover"
                    />
                  </View>
                  {/* ITEM IMAGE END*/}

                  {/* CENTER ITEM DETAIL START */}
                  <View
                    style={{
                      flex: 1.35,
                      paddingLeft: moderateScale(10),
                      paddingTop: verticalScale(3)
                    }}
                  >
                    <View>
                      <Text style={styles.categorytext}>{item.category}</Text>
                      <Text style={styles.itemTitle}>{item.name}</Text>
                    </View>
                    {/* CODE AND SALE */}
                    <View style={{ flexDirection: "row" }}>
                      <View View={{ flex: 1.25 }}>
                        <Text style={styles.codeText}>CODE: {item.code}</Text>
                      </View>
                      <View
                        style={{ flex: 0.75, marginLeft: verticalScale(5) }}
                      >
                        {item.sale ? (
                          <View style={styles.saleContainer}>
                            <Text style={styles.saletext}>{item.sale}</Text>
                          </View>
                        ) : null}
                      </View>
                    </View>
                    {/* CODE AND SALE END*/}

                    {/* ITEM PRICE */}
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontSize: scale(10),
                          fontWeight: "800",
                          color: colors.greytext,
                          lineHeight: 18
                        }}
                      >
                        AED
                      </Text>
                      <Text style={styles.priceText}> {item.price}</Text>
                    </View>
                    {/* ITEM PRICE END*/}
                  </View>
                  {/* CENTER ITEM DETAIL END */}

                  {/* ITEM QUANTITY */}
                  <View
                    style={{
                      paddingTop: verticalScale(74)
                    }}
                  >
                    <Text
                      style={{
                        color: colors.bgblue,
                        fontSize: scale(15),
                        fontWeight: "700"
                      }}
                    >
                      QTY {item.quantity}
                    </Text>
                  </View>
                </View>
              )}
            />
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

              <TouchableOpacity
                style={[
                  styles.proceedbuttonwrapper,
                  {
                    flexDirection: "row",
                    paddingHorizontal: moderateScale(5),
                    paddingTop: verticalScale(3.5)
                  }
                ]}
                onPress={this.handleOrderNow}
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
    height: verticalScale(120),
    width: moderateScale(320),
    borderBottomWidth: scale(1),
    borderBottomColor: colors.greytext
  },
  accountholdertext: {
    fontSize: scale(15),
    color: colors.bgyellow,
    fontWeight: "400"
  },
  othertext: {
    fontSize: scale(12),
    color: colors.blacktext,
    fontWeight: "300"
  },
  changeeditContainer: {
    width: moderateScale(80),
    height: verticalScale(30),
    borderRadius: moderateScale(25),
    backgroundColor: colors.bgyellow
  },
  changeeditText: {
    color: colors.whitetext,
    fontSize: scale(12),
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
  },
  // NEXT SECTION STYLE
  itemImage: {
    marginVertical: verticalScale(2),
    width: moderateScale(85),
    height: verticalScale(95),
    borderWidth: scale(2.5),
    borderColor: colors.bgblue,
    borderRadius: moderateScale(10)
  },
  categorytext: {
    fontWeight: "800",
    fontSize: scale(11),
    color: colors.greytext
  },
  saleContainer: {
    backgroundColor: colors.bgred,
    height: verticalScale(14),
    width: verticalScale(60),
    position: "absolute",
    zIndex: scale(999),
    justifyContent: "center",
    alignItems: "center"
  },
  saletext: {
    fontWeight: "800",
    fontSize: scale(9),
    color: colors.whitetext
  },
  itemTitle: {
    fontSize: scale(15),
    fontWeight: "700",
    color: colors.bgyellow
  },
  codeText: {
    fontSize: scale(11),
    fontWeight: "bold",
    color: colors.bgblue
  },
  priceText: {
    fontSize: scale(25),
    fontWeight: "800",
    color: colors.greytext,
    lineHeight: 30
  }
});
