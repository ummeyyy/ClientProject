import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { moderateScale, scale, verticalScale } from "./scale";
import colors from "./assets/colors";

import { FontAwesome } from "@expo/vector-icons";

import Swiper from "../../../components/Swiper";
import CategoryButton from "../../../components/CategoryButton";
import TabViewBar from "./TabViewBar";
import CButton from "../../../components/CButton";
import FlatListComponent from "../../../components/FlatListComponent";
import CategoryRateReview from "../ProductScreen/CategoryRateReview";
import ProductDetails from "../ProductScreen/ProductDetails";
import PriceTab from "../../../components/PriceTab";
import ActualPriceCal from "../ProductScreen/ActualPriceCal";
import TotalPrice from "./TotalPrice";

const products = [
  {
    name: "4F FLYERS DESIGN",
    categoryname: "BRANDING DESIGN",
    code: "D01",
    price: 150,
    sale: 20,
    id: "1",
    description1line: "(ONE DESCRIPTION LINE - DYNAMIC)",
    image: require("./assets/product1.png")
  },
  {
    name: "2D DRAWING",
    code: "D02",
    price: 250,
    sale: 5,
    rating: 3.3,
    description1line: "(ONE DESCRIPTION LINE - DYNAMIC)",
    id: "2",
    image: require("./assets/restaurant.jpg")
  },
  {
    name: "3D DRAWING",
    code: "D03",
    price: 100,
    sale: 35,
    rating: 2.3,
    description1line: "(ONE DESCRIPTION LINE - DYNAMIC)",
    id: "3",
    image: require("./assets/home.jpg")
  },
  {
    name: "INFOGRAPHICS",
    code: "D04",
    price: 250,
    rating: 4.2,
    description1line: "(ONE DESCRIPTION LINE - DYNAMIC)",
    id: "4",
    image: require("./assets/restaurant.jpg")
  }
];

class ProductScreen extends React.Component {
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

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <ScrollView
            directionalLockEnabled={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={false}
          >
            {/* CATEGORY SECTION */}

            <View style={styles.catogeryContainer}>
              <ScrollView
                directionalLockEnabled={true}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              >
                <Text style={styles.catogeryContainerTitle}>CATEGORIES</Text>

                <CategoryButton>
                  <Text style={styles.catogeryContainerText}>BRANDING</Text>
                </CategoryButton>

                <CategoryButton
                  style={{ backgroundColor: colors.inactivegreybutton }}
                >
                  <Text style={styles.catogeryContainerText}>WEBSITE</Text>
                </CategoryButton>

                <CategoryButton
                  style={{ backgroundColor: colors.inactivegreybutton }}
                >
                  <Text style={styles.catogeryContainerText}>ANIMATION</Text>
                </CategoryButton>

                <CategoryButton
                  style={{ backgroundColor: colors.inactivegreybutton }}
                >
                  <Text style={styles.catogeryContainerText}>ILLUSTRATION</Text>
                </CategoryButton>
              </ScrollView>
            </View>

            {/* SWIPER SECTION */}
            <View>
              <Swiper />
              <TouchableOpacity style={styles.favwrapper}>
                <FontAwesome
                  name="heart"
                  color={colors.bgred}
                  size={scale(30)}
                />
              </TouchableOpacity>
            </View>

            {/* Product Details & Description */}
            <View style={styles.productContainer}>
              <CategoryRateReview
                categorytitle={products[0].categoryname}
                categoryrating={4.3}
                categoryreviews={2350}
              ></CategoryRateReview>
            </View>

            {/* PRODUCT HEADER, RATE BUTTON, REVIEW BUTTON */}

            <View style={styles.productHeadingContainer}>
              <View
                style={{
                  flex: 2,
                  flexDirection: "row"
                }}
              >
                <Text style={styles.productHeadingText}>
                  {products[0].name}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  flex: 1.5,
                  justifyContent: "center"
                }}
              >
                <CategoryButton style={styles.ratebuttonContainer}>
                  <Text style={styles.ratebuttontext}>RATE US</Text>
                </CategoryButton>
                <CategoryButton style={styles.reviewbuttonContainer}>
                  <Text style={styles.reviewbuttontext}>WRITE REVIEW</Text>
                </CategoryButton>
              </View>
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
                onPress={() => this.handleIncerement()}
                style={styles.plusiconwrapper}
              >
                <FontAwesome
                  name="plus"
                  color={colors.bgyellow}
                  size={scale(23)}
                />
              </TouchableOpacity>
              <View style={styles.countwrapper}>
                <Text style={styles.counttext}>{this.state.count}</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.handleDecrement()}
                style={styles.minusiconwrapper}
              >
                <FontAwesome
                  name="minus"
                  color={colors.bgyellow}
                  size={scale(23)}
                />
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
            <View style={{ marginTop: verticalScale(15) }}>
              <CButton style={{ marginTop: verticalScale(7) }} />
              <Text style={styles.relatedProductsTitle}>RELATED PRODUCTS</Text>
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
              />
            </PriceTab>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  catogeryContainer: {
    flexDirection: "row",
    height: verticalScale(55),
    padding: scale(10),
    backgroundColor: colors.whitetext
  },
  catogeryContainerTitle: {
    color: colors.greytext,
    fontSize: scale(12),
    fontWeight: "bold",
    marginTop: scale(7),
    marginHorizontal: moderateScale(4)
  },
  catogeryContainerText: {
    color: colors.whitetext,
    fontSize: scale(11),
    fontWeight: "bold"
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
    backgroundColor: "white",
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
  productHeadingContainer: {
    flexDirection: "row",
    height: verticalScale(30),
    marginVertical: verticalScale(5),
    paddingHorizontal: moderateScale(8)
  },
  productHeadingText: {
    fontSize: scale(17.5),
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