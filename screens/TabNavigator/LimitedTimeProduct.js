import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

import { FontAwesome, AntDesign } from "@expo/vector-icons";

import Timer from "../../components/Timer";
import CategoryButton from "../../components/CategoryButton";
import TabViewBar from "../ProductScreen/pcomponents/TabViewBar";
import FlatListComponent from "../../components/FlatListComponent";
import ProductDetails from "../ProductScreen/pcomponents/ProductDetails";
import PriceTab from "../../components/PriceTab";
import ActualPriceCal from "../ProductScreen/pcomponents/ActualPriceCal";
import TotalPrice from "../ProductScreen/pcomponents/TotalPrice";

const products = [
  {
    name: "FREE VIDEO ANIMATION FOR YOUR BUSINESS",
    categoryname: "BRANDING DESIGN",
    code: "D01",
    price: 150,
    sale: 20,
    id: "1",
    description1line: "(ONE DESCRIPTION LINE - DYNAMIC)",
    image: require("../../assets/product1.png")
  },
  {
    name: "2D DRAWING",
    code: "D02",
    price: 250,
    sale: 5,
    rating: 3.3,
    description1line: "(ONE DESCRIPTION LINE - DYNAMIC)",
    id: "2",
    image: require("../../assets/restaurant.jpg")
  },
  {
    name: "3D DRAWING",
    code: "D03",
    price: 100,
    sale: 35,
    rating: 2.3,
    description1line: "(ONE DESCRIPTION LINE - DYNAMIC)",
    id: "3",
    image: require("../../assets/home.jpg")
  },
  {
    name: "INFOGRAPHICS",
    code: "D04",
    price: 250,
    rating: 4.2,
    description1line: "(ONE DESCRIPTION LINE - DYNAMIC)",
    id: "4",
    image: require("../../assets/restaurant.jpg")
  }
];

class LimitedTimeProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      salePrice: (products[0].price * products[0].sale) / 100,
      price: products[0].price,
      actualprice: 0,
      totalPrice:
        products[0].price - (products[0].price * products[0].sale) / 100
    };
  }

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

  handleOnAdd = () => {
    this.props.navigation.navigate("ViewCart");
  };

  pressOnViewAll = () => {
    this.props.navigation.navigate("BrandingDesign");
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          directionalLockEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={false}
        >
          <View style={{ flex: 1 }}>
            <Image
              source={require("../../assets/limited.jpg")}
              style={{
                height: verticalScale(200),
                width: "100%"
              }}
              resizeMode="cover"
            />
          </View>

          {/* LIMITED TIME OFFER */}
          <View style={styles.timerheadingContainer}>
            <Text style={styles.timerheadingText}>LIMITED TIME OFFER</Text>
          </View>
          <Timer />
          {/* PRODUCT HEADER, RATE BUTTON, REVIEW BUTTON */}

          <View style={styles.productHeadingContainer}>
            <Text style={styles.productHeadingText}>
              FREE VIDEO ANIMATION FOR YOUR BUSINESS
            </Text>
          </View>

          {/* PRODUCT DETAILS, PRODUCT IMAGE */}

          <ProductDetails
            code={products[0].code}
            productimage={products[0].image}
          ></ProductDetails>

          {/* PRICE TAB */}
          <PriceTab>
            <ActualPriceCal
              price={products[0].price}
              sale={products[0].sale}
              aftersale={this.state.price - this.state.salePrice}
              oneline={products[0].description1line}
            />
            <TouchableOpacity
              style={[styles.cartbuttonwrapper, { flexDirection: "row" }]}
              onPress={this.handleOnAdd}
            >
              <View
                style={{
                  flex: 1,
                  paddingVertical: scale(4),
                  justifyContent: "flex-end",
                  alignItems: "flex-end"
                }}
              >
                <Text style={styles.cartbuttontext}>ADD</Text>
              </View>

              <View
                style={{
                  flex: 0.75,
                  paddingVertical: verticalScale(5),
                  left: scale(4)
                }}
              >
                <AntDesign
                  name="pluscircle"
                  color={colors.whitetext}
                  size={scale(18)}
                />
              </View>
            </TouchableOpacity>
          </PriceTab>

          {/* TAB VIEW */}
          <View
            style={{
              marginTop: verticalScale(15),
              paddingHorizontal: moderateScale(10)
            }}
          >
            <TabViewBar />
          </View>

          {/* RELATED PRODUCTS HERE */}
          <View style={{ marginTop: verticalScale(15), flexDirection: "row" }}>
            <View>
              <Text style={styles.relatedProductsTitle}>RELATED PRODUCTS</Text>
            </View>
            <View>
              <CategoryButton
                style={styles.categorybuttonstyle}
                onPress={this.pressOnViewAll}
              >
                <Text style={styles.categorybuttonText}>VIEW ALL</Text>
              </CategoryButton>
            </View>
          </View>
          <View style={{ marginTop: verticalScale(15) }}>
            <FlatListComponent />
          </View>

          {/* Total Price Tab */}
          <PriceTab
            style={{
              backgroundColor: colors.bgblue,
              paddingVertical: verticalScale(16)
            }}
          >
            <TotalPrice
              total={this.state.totalPrice}
              oneline={products[0].description1line}
              onpress={this.handleOnAdd}
            />
          </PriceTab>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default LimitedTimeProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(15)
  },
  cartbuttonwrapper: {
    right: scale(20),
    top: scale(20),
    width: moderateScale(100),
    height: verticalScale(40),
    position: "absolute",
    backgroundColor: colors.bgyellow,
    borderWidth: scale(3.5),
    borderColor: colors.whitetext,
    paddingHorizontal: moderateScale(5)
  },
  cartbuttontext: {
    flex: 1.75,
    fontSize: scale(14),
    fontWeight: "600",
    color: colors.whitetext
  },
  categorybuttonstyle: {
    width: moderateScale(90),
    height: verticalScale(30),
    marginLeft: moderateScale(15),
    borderColor: colors.bgyellow,
    borderRadius: scale(20),
    backgroundColor: colors.whitetext,
    borderWidth: scale(3),
    alignItems: "center",
    justifyContent: "center"
  },
  categorybuttonText: {
    fontSize: scale(11),
    color: colors.bgyellow,
    fontWeight: "500"
  },
  favwrapper: {
    position: "absolute",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(50),
    height: moderateScale(50),
    paddingVertical: verticalScale(7),
    right: moderateScale(15),
    bottom: moderateScale(-15),
    backgroundColor: colors.whitetext,
    borderWidth: moderateScale(2.5),
    borderColor: colors.bgblue,
    borderRadius: moderateScale(25)
  },
  productContainer: {
    paddingBottom: scale(7),
    marginTop: scale(30),
    marginHorizontal: moderateScale(7),
    flexDirection: "column"
  },
  buttonContainer: {
    width: moderateScale(53),
    height: verticalScale(18),
    borderRadius: 0,
    marginTop: scale(5),
    backgroundColor: colors.bgyellow,
    marginRight: moderateScale(-2)
  },
  timerheadingContainer: {
    height: verticalScale(20),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(-8),
    marginHorizontal: moderateScale(15)
  },
  timerheadingText: {
    fontSize: scale(14),
    fontWeight: "bold",
    color: colors.bgblue
  },
  productHeadingContainer: {
    height: verticalScale(60),
    marginTop: verticalScale(30),
    marginHorizontal: moderateScale(10)
  },
  productHeadingText: {
    fontSize: scale(17),
    fontWeight: "bold",
    color: colors.bgyellow
  },
  ratebuttonContainer: {
    width: moderateScale(55),
    height: verticalScale(18),
    borderRadius: 0,
    marginTop: scale(5),
    backgroundColor: colors.bgyellow,
    marginRight: moderateScale(-2)
  },
  ratebuttontext: {
    fontSize: scale(7),
    fontWeight: "bold",
    color: colors.whitetext,
    paddingHorizontal: moderateScale(3)
  },
  reviewbuttonContainer: {
    width: moderateScale(68),
    height: verticalScale(18),
    borderRadius: 0,
    marginTop: scale(5),
    backgroundColor: colors.bggreen,
    marginRight: moderateScale(-2)
  },
  reviewbuttontext: {
    fontSize: scale(7),
    fontWeight: "bold",
    color: colors.whitetext,
    paddingHorizontal: moderateScale(3)
  },
  originalpricetabtext: {
    fontSize: scale(14),
    fontWeight: "400",
    color: colors.whitetext,
    textDecorationLine: "line-through"
  },
  plusiconwrapper: {
    width: moderateScale(30),
    height: moderateScale(35),
    position: "absolute",
    backgroundColor: colors.whitetext,
    padding: scale(5),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    right: scale(20),
    top: scale(20)
  },
  minusiconwrapper: {
    width: moderateScale(30),
    height: moderateScale(35),
    position: "absolute",
    backgroundColor: colors.whitetext,
    padding: scale(5),
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    right: scale(96),
    top: scale(20)
  },
  countwrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(50),
    height: moderateScale(35),
    position: "absolute",
    backgroundColor: colors.bgyellow,
    borderWidth: scale(4),
    borderColor: colors.whitetext,
    right: scale(49),
    top: scale(20),
    padding: scale(0.25)
  },
  counttext: {
    fontSize: scale(20),
    fontWeight: "bold",
    color: colors.whitetext
  },
  relatedProductsTitle: {
    fontSize: scale(18),
    fontWeight: "bold",
    color: colors.bgyellow,
    paddingHorizontal: moderateScale(15)
  }
});
