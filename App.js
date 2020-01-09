import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image
} from "react-native";

import { moderateScale, scale, verticalScale } from "./scale";
import colors from "./assets/colors";

import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import Swiper from "./components/Swiper";
import CategoryButton from "./components/CategoryButton";
import TabViewBar from "./components/TabViewBar";
import CButton from "./components/CButton";
import FlatListComponent from "./components/FlatListComponent";

const products = [
  {
    name: "4F FLYERS DESIGN",
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

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      salePrice: (products[0].price * products[0].sale) / 100,
      totalPrice: products[0].price
    };
  }

  handleIncerement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handleDecrement = () => {
    if (this.state.count < 1) {
      this.setState({
        count: 0
      });
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  handlesaleprice = (price, sale) => {
    this.setState({
      salePrice: this.state.salePrice * ((price * sale) / 100)
    });
  };

  handletotalprice = (count, orignalprice) => {
    this.setState({
      totalPrice: this.state.totalPrice + count * price
    });
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
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: scale(5),
                  marginVertical: verticalScale(5),
                  backgroundColor: colors.bggreen
                }}
              >
                <View
                  style={{
                    flex: 2,
                    backgroundColor: "red",
                    alignItems: "flex-start",
                    justifyContent: "center"
                  }}
                >
                  <Text style={styles.catogeryContainerTitle}>
                    BRANDING DESIGN
                  </Text>
                </View>

                <View
                  style={{
                    flex: 1.5,
                    flexDirection: "row",
                    backgroundColor: colors.bgred,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Image
                    source={require("./assets/star.png")}
                    style={{
                      width: moderateScale(14),
                      height: moderateScale(14)
                    }}
                  />
                  <Text style={styles.ratingText}> 4.3</Text>
                  <Text style={styles.reviewsText}> | 2350 Reviews</Text>
                </View>
              </View>

              {/* for productheader  */}
              <View style={styles.productHeadingContainer}>
                <View
                  style={{
                    flex: 2,
                    flexDirection: "row",
                    backgroundColor: "red"
                  }}
                >
                  <Text style={styles.productHeadingText}>
                    {products[0].name}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: colors.bgred,
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

              <View style={styles.imageandDescriptionContainer}>
                <View style={styles.productdescription}>
                  <Text style={styles.descriptionText}>
                    Short Description will come here in a very stylish and sleek
                    way. It can be in bullet points, BOLD, ITALIC, UNDERLINE etc
                  </Text>
                  <Text style={styles.descriptionText}>
                    Description will come here in a very stylish and sleek
                    way.Description will come here in a very stylish and sleek
                    way..
                  </Text>
                  <Text style={styles.descriptionText}>
                    Description can be in bullet points, BOLD, ITALIC, UNDERLINE
                    etc
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.codeText}>
                      CODE: {products[0].code}
                    </Text>
                    <Text style={styles.shareText}>SHARE </Text>
                    <FontAwesome5
                      name="share-square"
                      color={colors.greytext}
                      size="15"
                      style={{ marginTop: scale(6) }}
                    />
                  </View>
                </View>
                <Image
                  source={products[0].image}
                  style={styles.productimage}
                ></Image>
              </View>
            </View>

            {/* Price Tab */}
            <View style={styles.pricetabWrapper}>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: verticalScale(10)
                }}
              >
                <Text style={styles.originalpricetabtext}>
                  AED {products[0].price}
                </Text>
                <View
                  style={{
                    height: verticalScale(16),
                    width: 60,
                    borderRadius: scale(3),
                    backgroundColor: colors.bgred,
                    color: colors.whitetext,
                    marginLeft: moderateScale(2),
                    marginTop: verticalScale(3),
                    paddingHorizontal: moderateScale(3),
                    paddingTop: moderateScale(1)
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "800",
                      fontSize: scale(9),
                      color: colors.whitetext
                    }}
                  >
                    {products[0].sale} % OFF
                  </Text>
                </View>
              </View>

              <Text style={styles.pricetabtext}>
                AED {this.state.totalPrice - this.state.salePrice}
              </Text>
              <TouchableOpacity
                onPress={this.handleIncerement}
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
                onPress={this.handleDecrement}
                style={styles.minusiconwrapper}
              >
                <FontAwesome
                  name="minus"
                  color={colors.bgyellow}
                  size={scale(23)}
                />
              </TouchableOpacity>
              <Text style={styles.onelinetext}>
                {products[0].description1line}
              </Text>
            </View>
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
            <View style={styles.totalpricetabWrapper}>
              <Text style={styles.tpricetabtext}>
                AED {this.state.totalPrice}
              </Text>
              <Text style={styles.onelinetext}>
                {products[0].description1line}
              </Text>
              <View style={styles.cartbuttonwrapper}>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1.75, padding: scale(4) }}>
                    <Text style={styles.cartbuttontext}>VIEW CART</Text>
                  </View>

                  <View style={{ flex: 0.5, padding: scale(3) }}>
                    <AntDesign
                      name="rightcircle"
                      color={colors.whitetext}
                      size={scale(18)}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

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
    height: verticalScale(250),
    marginTop: scale(30),
    marginHorizontal: moderateScale(7),
    flexDirection: "column",
    backgroundColor: colors.bgblue
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
    backgroundColor: colors.greytext,
    height: verticalScale(30),
    marginHorizontal: scale(5),
    marginVertical: verticalScale(5)
  },
  productHeadingText: {
    fontSize: scale(18),
    fontWeight: "bold",
    color: colors.bgyellow,
    paddingHorizontal: moderateScale(8)
  },
  ratingText: {
    fontSize: scale(14),
    fontWeight: "bold",
    color: colors.bgyellow,
    marginTop: verticalScale(5)
  },
  reviewsText: {
    fontSize: scale(11),
    fontWeight: "200",
    color: colors.blacktext,
    marginTop: moderateScale(8)
    // marginTop: verticalScale(8)
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
  imageandDescriptionContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: scale(5),
    marginTop: scale(2)
  },
  productdescription: {
    flex: 2,
    paddingHorizontal: moderateScale(10),
    marginTop: verticalScale(6)
  },
  descriptionText: {
    fontSize: scale(9),
    fontWeight: "200",
    color: colors.blacktext,
    marginTop: scale(5)
  },
  codeText: {
    fontSize: scale(10),
    fontWeight: "bold",
    color: colors.bgblue,
    marginTop: scale(8)
  },
  shareText: {
    fontSize: scale(10),
    fontWeight: "bold",
    color: colors.greytext,
    marginTop: scale(8),
    marginLeft: scale(25)
  },
  productimage: {
    flex: 2,
    height: verticalScale(190),
    width: moderateScale(190),
    borderRadius: scale(10),
    marginRight: scale(10),
    marginTop: verticalScale(10)
  },
  pricetabWrapper: {
    height: verticalScale(90),
    backgroundColor: colors.bgyellow,
    marginTop: verticalScale(40),
    paddingHorizontal: moderateScale(20)
  },
  totalpricetabWrapper: {
    height: verticalScale(90),
    backgroundColor: colors.bgblue,
    marginTop: verticalScale(40),
    paddingHorizontal: moderateScale(20)
  },
  originalpricetabtext: {
    fontSize: scale(14),
    fontWeight: "400",
    color: colors.whitetext,
    textDecorationLine: "line-through"
  },
  pricetabtext: {
    fontSize: scale(20),
    fontWeight: "bold",
    color: colors.whitetext
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
  onelinetext: {
    fontSize: scale(8),
    fontWeight: "400",
    color: colors.whitetext,
    top: scale(3)
  },
  relatedProductsTitle: {
    fontSize: scale(18),
    fontWeight: "bold",
    color: colors.bgyellow,
    paddingHorizontal: moderateScale(15)
  },
  totalpricetabWrapper: {
    height: verticalScale(90),
    backgroundColor: colors.bgblue,
    marginTop: verticalScale(40),
    paddingHorizontal: moderateScale(20),
    paddingVertical: verticalScale(18)
  },
  tpricetabtext: {
    fontSize: scale(30),
    fontWeight: "700",
    color: colors.whitetext
  },
  cartbuttonwrapper: {
    right: scale(15),
    top: scale(22),
    width: moderateScale(150),
    height: verticalScale(35),
    position: "absolute",
    backgroundColor: colors.bgblue,
    borderWidth: scale(3.5),
    borderColor: colors.whitetext,
    paddingHorizontal: moderateScale(5)
  },
  cartbuttontext: {
    flex: 1.75,
    fontSize: scale(14),
    fontWeight: "600",
    color: colors.whitetext
  }
});
