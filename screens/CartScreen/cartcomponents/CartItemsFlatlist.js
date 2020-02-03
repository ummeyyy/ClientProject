import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";

import { FontAwesome } from "@expo/vector-icons";

import Count from "../cartcomponents/Count";
import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

const section = [
  {
    name: "4F FLYERS",
    category: "BRANDING DESIGN",
    price: 100,
    sale: "10% OFF",
    code: "D01",
    id: "1",
    image: require("../../../assets/home.jpg")
  },
  {
    name: "5 PAGE WEBSITE DESIGN",
    category: "WEBSITE",
    price: 250,
    sale: "35% OFF",
    code: "W01",
    id: "2",
    image: require("../../../assets/restaurant.jpg")
  },
  {
    name: "ANIMATION FOR YOUR BUSINESS",
    category: "VIDEO ANIMATION",
    price: 100,
    sale: "5% OFF",
    code: "V01",
    id: "3",
    image: require("../../../assets/home.jpg")
  }
];

class CartItemsFlatlist extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      salePrice: (section[0].price * section[0].sale) / 100,
      price: section[0].price,
      actualprice: 0,
      totalPrice: section[0].price - (section[0].price * section[0].sale) / 100
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

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "95%",
          backgroundColor: colors.blacktext,
          marginVertical: verticalScale(10),
          marginHorizontal: moderateScale(5)
        }}
      />
    );
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <SwipeListView
          renderItem={(rowData, rowMap) => (
            <View>
              <Text>I am {rowData.item.text} in a SwipeListView</Text>
            </View>
          )}
          renderHiddenItem={(rowData, rowMap) => (
            <View style={styles.rowBack}>
              <TouchableOpacity
                onPress={() => rowMap[rowData.item.key].closeRow()}
              >
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-150}
          onRowOpen={(rowKey, rowMap) => {
            setTimeout(() => {
              rowMap[rowKey].closeRow();
            }, 2000);
          }}
        ></SwipeListView> */}
        <SwipeListView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          useFlatList={true}
          keyExtractor={(item, index) => item.id}
          ItemSeparatorComponent={this.renderSeparator}
          data={section}
          renderHiddenItem={(rowData, rowMap) => (
            <View style={styles.rowBack}>
              <TouchableOpacity
                onPress={() => rowMap[rowData.item.key].closeRow()}
              >
                <View
                  style={{
                    // backgroundColor: colors.bggreen,
                    height: verticalScale(135),
                    width: scale(78),
                    paddingBottom: verticalScale(30),
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <FontAwesome
                    name="edit"
                    color={colors.bggreen}
                    size={scale(25)}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
          leftOpenValue={75}
          rightOpenValue={-75}
          onRowOpen={(rowKey, rowMap) => {
            setTimeout(() => {
              rowMap[rowKey].closeRow();
            }, 2000);
          }}
          renderItem={({ item }) => (
            // ITEMS DESIGN
            <View style={styles.itemcontainer}>
              <View
                style={{
                  flexDirection: "row",
                  marginHorizontal: moderateScale(5)
                }}
              >
                <View
                  style={{
                    flex: 1.15
                  }}
                >
                  {/* ITEM IMAGE */}
                  <Image
                    source={item.image}
                    style={styles.itemImage}
                    resizeMode="cover"
                  />
                </View>

                {/* ITEM DETAILS */}
                <View
                  style={{
                    flex: 2.15,
                    marginHorizontal: moderateScale(15),
                    paddingTop: verticalScale(3)
                  }}
                >
                  <Text style={styles.categorytext}>{item.category}</Text>
                  <Text style={styles.itemTitle}>{item.name}</Text>

                  {/* CODE AND SALE */}
                  <View style={{ flexDirection: "row" }}>
                    <View View={{ flex: 1.25 }}>
                      <Text style={styles.codeText}>CODE: {item.code}</Text>
                    </View>
                    <View style={{ flex: 0.75, marginLeft: verticalScale(5) }}>
                      {item.sale ? (
                        <View style={styles.saleContainer}>
                          <Text style={styles.saletext}>{item.sale}</Text>
                        </View>
                      ) : null}
                    </View>
                  </View>

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
                </View>

                {/* ITEM QUANTITY */}
                <View
                  style={{
                    flex: 0.65,
                    backgroundColor: colors.bgblue
                  }}
                >
                  <Count
                    plus={() => this.state.handleIncerement()}
                    startcount={this.state.count}
                    minus={() => this.state.handleDecrement()}
                  ></Count>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}
export default CartItemsFlatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(6)
  },
  itemContainer: {
    height: verticalScale(50),
    width: "100%"
  },
  itemImage: {
    marginVertical: verticalScale(2),
    width: "100%",
    height: verticalScale(105),
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
