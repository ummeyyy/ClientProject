import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from "react-native";

import colors from "../../assets/colors";
import { moderateScale, scale, verticalScale } from "../../scale";

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

class BrandCheckupSchedule extends Component {
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
        {/* CONTAINER*/}

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
            <Text style={styles.screenTitle}>BRAND CHECK-UP</Text>
            <Text style={styles.descriptionText}>
              {
                "Short Description will come here in a\n very stylish and sleek way."
              }
            </Text>
          </View>
          {/* SELECT PREFERENCE*/}
          <View style={{ marginTop: verticalScale(20), flexDirection: "row" }}>
            <View
              style={{
                alignItems: "flex-start"
              }}
            >
              <Text
                style={{
                  fontSize: scale(13),
                  fontWeight: "700",
                  color: colors.bgblue
                }}
              >
                SELECT DATE AND CHOSEN TIME
              </Text>
            </View>
            <View style={{ paddingLeft: moderateScale(10) }}></View>
            <Text
              style={{
                fontSize: scale(12),
                fontWeight: "300",
                color: colors.bgred
              }}
            >
              Required*
            </Text>
          </View>
          <Text style={styles.descriptionText}>
            You can select multiple date and time.
          </Text>

          {/*DATE CONTAINER START*/}
          <View
            style={{
              marginTop: verticalScale(5)
            }}
          >
            {/*MONTH START*/}
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 1.7,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: scale(10),
                  height: verticalScale(60)
                }}
              >
                {/* Icon */}
                <Image
                  source={require("../../assets/calendar-icon.png")}
                  style={{
                    height: verticalScale(32),
                    width: moderateScale(30)
                  }}
                  resizeMode="cover"
                />
                {/* Text */}
                <View style={{ paddingLeft: moderateScale(10) }}>
                  <Text style={styles.largeText}>
                    {"SELECT MONTH\n"}
                    <Text style={styles.smallText}>
                      Short description para/line.
                    </Text>
                  </Text>
                </View>
              </View>
              {/* MONTH DROP DOWN */}
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: scale(10),
                  height: verticalScale(60)
                }}
              >
                <Text style={styles.largeText}>{"JANUARY"}</Text>
              </View>
            </View>
            {/* MONTH END */}

            {/*DAY START*/}
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 1.7,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: scale(10),
                  height: verticalScale(60)
                }}
              >
                {/* Icon */}
                <Image
                  source={require("../../assets/calendar-icon.png")}
                  style={{
                    height: verticalScale(32),
                    width: moderateScale(30)
                  }}
                  resizeMode="cover"
                />
                {/* Text */}
                <View style={{ paddingLeft: moderateScale(10) }}>
                  <Text style={styles.largeText}>
                    {"SELECT DAY\n"}
                    <Text style={styles.smallText}>
                      Short description para/line.
                    </Text>
                  </Text>
                </View>
              </View>
              {/* DAY DROP DOWN */}
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: scale(10),
                  height: verticalScale(60)
                }}
              >
                <Text style={styles.largeText}>{"SUNDAY"}</Text>
              </View>
            </View>
            {/* DAY END */}

            {/*DATE START*/}
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 1.7,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: scale(10),
                  height: verticalScale(60)
                }}
              >
                {/* Icon */}
                <Image
                  source={require("../../assets/calendar-icon.png")}
                  style={{
                    height: verticalScale(32),
                    width: moderateScale(30)
                  }}
                  resizeMode="cover"
                />
                {/* Text */}
                <View style={{ paddingLeft: moderateScale(10) }}>
                  <Text style={styles.largeText}>
                    {"SELECT DATE\n"}
                    <Text style={styles.smallText}>
                      Short description para/line.
                    </Text>
                  </Text>
                </View>
              </View>
              {/* DATE DROP DOWN */}
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: scale(10),
                  height: verticalScale(60)
                }}
              >
                <Text style={styles.largeText}>{"13"}</Text>
              </View>
            </View>
            {/* DATE END */}
          </View>
          {/*DATE CONTAINER END*/}

          {/* TIMES START*/}

          {/* TIMES END*/}
        </View>
        {/* CONTAINER END*/}

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
export default BrandCheckupSchedule;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whitetext
  },
  screenTitle: {
    fontSize: scale(23),
    fontWeight: "800",
    color: colors.bgyellow
  },
  largeText: {
    fontSize: scale(14),
    fontWeight: "700",
    color: colors.greytext
  },
  smallText: {
    fontSize: scale(10),
    fontWeight: "300",
    color: colors.greytext
  },
  descriptionText: {
    fontSize: scale(12),
    fontWeight: "300",
    color: colors.blacktext
  }
});
