import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import colors from "../../assets/colors";
import { moderateScale, scale, verticalScale } from "../../scale";

import PreferenceList from "./PreferenceList";
import PageSizesList from "./PageSizesList";
import PriceTab from "../../components/PriceTab";
import TotalPrice from "../ProductScreen/pcomponents/TotalPrice";

const products = [
  {
    name: "4F FLYERS DESIGN",
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

class BrochureType extends Component {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView />

        <View
          style={{
            marginLeft: moderateScale(15),
            marginRight: moderateScale(10)
          }}
        >
          {/* SCREEN NAME and details*/}
          <View
            style={{
              marginTop: verticalScale(20)
            }}
          >
            <Text
              style={{
                fontWeight: "800",
                fontSize: scale(11),
                color: colors.greytext
              }}
            >
              BRANDING DESIGN
            </Text>
            <Text style={styles.screenTitle}>BROCHURE</Text>
            <Text style={styles.descriptionText}>
              Short Description will come here in a very stylish and sleek way.
            </Text>
          </View>
          {/* SELECT PREFERENCE*/}
          <View style={{ marginTop: verticalScale(20), flexDirection: "row" }}>
            <Text
              style={{
                fontSize: scale(14),
                fontWeight: "700",
                color: colors.bgblue
              }}
            >
              SELECT YOUR PREFERENCE
            </Text>
            <Text
              style={{
                fontSize: scale(13),
                fontWeight: "300",
                color: colors.bgred,
                marginLeft: moderateScale(40)
              }}
            >
              Required*
            </Text>
          </View>
          <Text style={styles.descriptionText}>
            You can select multiple options.
          </Text>
          {/* PREFERENCES */}
          <PreferenceList></PreferenceList>

          {/* PAGE SIZES */}
          <View style={{ marginTop: verticalScale(35) }}>
            <View
              style={{ marginTop: verticalScale(20), flexDirection: "row" }}
            >
              <Text
                style={{
                  fontSize: scale(14),
                  fontWeight: "700",
                  color: colors.bgblue
                }}
              >
                SELECT YOUR PAGE SIZE
              </Text>
              <Text
                style={{
                  fontSize: scale(13),
                  fontWeight: "300",
                  color: colors.bgred,
                  marginLeft: moderateScale(60)
                }}
              >
                Required*
              </Text>
            </View>
            <Text style={styles.descriptionText}>
              You can select only one option.
            </Text>
            <View style={{ marginTop: verticalScale(10) }}>
              <PageSizesList />
            </View>
          </View>
        </View>
        {/* BOTTOM TOTAL PRICE TAB */}
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
    );
  }
}
export default BrochureType;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whitetext
  },
  screenTitle: {
    fontSize: scale(23),
    fontWeight: "800",
    color: colors.bgyellow
  },
  descriptionText: {
    fontSize: scale(12),
    fontWeight: "300",
    color: colors.blacktext,
    marginTop: scale(5)
  },
  filledBullet: {
    width: moderateScale(28),
    height: verticalScale(28),
    backgroundColor: colors.bgblue,
    borderRadius: moderateScale(14)
  }
});
