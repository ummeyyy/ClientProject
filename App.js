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

const products = [
  {
    name: "4F FLYERS DESIGN",
    code: "D01",
    price: 100,
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
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
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
              <FontAwesome name="heart" color={colors.bgred} size="30" />
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
              <Text style={styles.catogeryContainerTitle}>BRANDING DESIGN</Text>
              <View
                style={{
                  marginHorizontal: moderateScale(68),
                  flexDirection: "row"
                }}
              >
                <Image
                  source={require("./assets/star.png")}
                  style={{
                    width: moderateScale(14),
                    height: moderateScale(14),
                    marginTop: moderateScale(7)
                  }}
                />
                <Text style={styles.ratingText}> 4.3</Text>
                <Text style={styles.reviewsText}> | 2350 Reviews</Text>
              </View>
            </View>

            <View style={styles.productHeadingContainer}>
              <Text style={styles.productHeadingText}>{products[0].name}</Text>
              <CategoryButton style={styles.ratebuttonContainer}>
                <Text style={styles.ratebuttontext}>RATE US</Text>
              </CategoryButton>
              <CategoryButton style={styles.reviewbuttonContainer}>
                <Text style={styles.reviewbuttontext}>WRITE REVIEW</Text>
              </CategoryButton>
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
                  <Text style={styles.codeText}>CODE: {products[0].code}</Text>
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
            {/* <PriceTab /> */}
            {/* <Text style={styles.originalpricetabtext}>AED{() => this.originalPrice(products[0].price)}</Text>
                            <Text style={styles.pricetabtext}>AED{() => this.salePrice(this.state.count, products[0].price)}</Text>
                            <TouchableOpacity
                                onPress={this.handleIncerement}
                                style={styles.plusiconwrapper}>
                                <FontAwesome name='plus' color='#F9CF2F' size="23" />
                            </TouchableOpacity>
                            <View style={styles.countwrapper}>
                                <Text style={styles.counttext}>{this.state.count}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={this.handleDecrement}
                                style={styles.minusiconwrapper}>
                                <FontAwesome name='minus' color='#F9CF2F' size="23" />
                            </TouchableOpacity>
                            <Text style={styles.onelinetext}>(One line) {products[0].description1line}</Text> */}
          </View>
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
    width: moderateScale(45),
    height: verticalScale(48),
    paddingVertical: verticalScale(7),
    right: scale(15),
    bottom: scale(-15),
    backgroundColor: "white",
    borderWidth: moderateScale(2.5),
    borderColor: colors.bgblue,
    borderRadius: scale(32)
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
    flex: 1,
    flexDirection: "row",
    marginBottom: verticalScale(15)
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
    marginTop: scale(-300)
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
    height: verticalScale(20),
    backgroundColor: colors.bgyellow,
    marginTop: verticalScale(-0)
  }
});
