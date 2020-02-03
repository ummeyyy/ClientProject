import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";

import { CheckBox } from "react-native-elements";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

const section = [
  {
    name: " SINGLE PAGE",
    desc: '(A4 - 8.5" x 11" )',
    price: 100,
    id: "1"
  },
  {
    name: "BI - FOLD",
    desc: '(11" x 17")',
    price: 350,
    id: "2"
  },
  {
    name: "TRI - FOLD",
    desc: '(8.5" x 11" Folded, double sided)',
    price: 450,
    id: "3"
  },
  {
    name: "QUAD FOLD/CATALOG",
    desc: '(8.5" x 11" Folded, 11" x 17" flat, double sided)',
    price: 550,
    sale: "20% OFF",
    id: "4"
  },
  {
    name: "PRESENTATION FOLDER",
    desc: '18"x12"(9x12 folded) with 4" Pocket Flap and business card die cut',
    price: 750,
    id: "5"
  }
];

class PreferenceList extends Component {
  constructor() {
    super();
    this.state = {
      indexChecked: "0",
      count: 1,
      pressed: false,
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

  buttonPressed = () => {
    this.setState({
      pressed: !this.state.pressed
    });
  };

  render() {
    return (
      // RENDERING PREFERENCES
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        extraData={this.state.indexChecked}
        data={section}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 2,
                flexDirection: "column"
              }}
            >
              {/* CHECKBOX FOR UNORDERED LIST*/}

              <CheckBox
                containerStyle={{
                  backgroundColor: colors.whitetext,
                  marginLeft: moderateScale(-11),
                  borderWidth: scale(0)
                }}
                title={item.name}
                iconType="material-community"
                uncheckedIcon="circle-outline"
                checkedIcon="circle-slice-8"
                checkedColor={colors.bgblue}
                checked={this.state.checked}
                onPress={() =>
                  this.setState({
                    checked: !this.state.checked,
                    indexChecked: item.id
                  })
                }
              />

              {/* PREFERENCE DESCRIPTION */}
              <View
                style={{
                  marginTop: verticalScale(-16),
                  marginLeft: moderateScale(25)
                }}
              >
                <Text
                  style={{
                    fontSize: scale(10),
                    fontWeight: "200",
                    color: colors.blacktext
                  }}
                >
                  {item.desc}
                  {this.state.indexChecked === item.id}
                </Text>
              </View>
            </View>

            {/* PREFERENCE HELP/INFO ? */}
            <View
              style={{
                flex: 0.3,
                paddingTop: verticalScale(20),
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <AntDesign
                name="questioncircle"
                color={colors.greytext}
                size={scale(18)}
              />
            </View>

            {/* PREFERENCE ADD + */}
            <View
              style={{
                flex: 0.95,
                marginBottom: verticalScale(6),
                marginTop: verticalScale(8)
              }}
            >
              {item.sale ? (
                <View style={{ flexDirection: "column" }}>
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.originalpriceText}>
                        AED {item.price}
                      </Text>
                    </View>
                    <View style={{ flex: 0.97 }}>
                      <View style={styles.saleContainer}>
                        <Text style={styles.saletext}>{item.sale}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={{ alignItems: "flex-end" }}>
                    <Text style={styles.priceText}>AED 500</Text>
                  </View>
                </View>
              ) : (
                <View style={{ alignItems: "flex-end" }}>
                  <Text style={styles.priceText}>AED {item.price}</Text>
                </View>
              )}

              {/* PLUS MINUS */}

              {this.state.pressed !== "false" ? (
                <TouchableOpacity
                  onPress={this.buttonPressed}
                  style={styles.addbutton}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <Text
                        style={{
                          fontWeight: "600",
                          fontSize: scale(13),
                          color: colors.greytext
                        }}
                      >
                        ADD
                      </Text>
                    </View>
                    <View
                      style={{
                        marginHorizontal: moderateScale(5),
                        width: moderateScale(18),
                        height: verticalScale(20),
                        borderRadius: moderateScale(9),
                        backgroundColor: colors.greytext,
                        justifyContent: "center",
                        alignItems: "center"
                      }}
                    >
                      <FontAwesome
                        name="plus"
                        color={colors.whitetext}
                        size={scale(12)}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              ) : (
                <View
                  style={{
                    flexDirection: "row",
                    backgroundColor: colors.greytext,
                    height: verticalScale(42),
                    marginBottom: verticalScale(4),
                    paddingVertical: verticalScale(4)
                  }}
                >
                  <TouchableOpacity
                    onPress={() => this.handleIncerement()}
                    style={styles.plusiconwrapper}
                  ></TouchableOpacity>

                  <View style={styles.countwrapper}>
                    <Text style={styles.counttext}>{this.state.count}</Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => this.handleDecrement()}
                    style={styles.minusiconwrapper}
                  >
                    <FontAwesome
                      name="minus"
                      color={colors.whitetext}
                      size={scale(15)}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        )}
      />
    );
  }
}
export default PreferenceList;

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    paddingHorizontal: moderateScale(2),
    height: verticalScale(14),
    position: "absolute",
    zIndex: scale(999),
    justifyContent: "center",
    alignItems: "center"
  },
  saletext: {
    fontWeight: "700",
    fontSize: scale(8),
    color: colors.whitetext
  },
  originalpriceText: {
    textDecorationLine: "line-through",
    fontSize: scale(9),
    fontWeight: "300",
    color: colors.greytext
  },
  priceText: {
    fontSize: scale(13.5),
    fontWeight: "500",
    color: colors.greytext
  },
  addbutton: {
    marginLeft: moderateScale(10),
    width: moderateScale(88),
    height: moderateScale(32),
    backgroundColor: colors.whitetext,
    borderColor: colors.greytext,
    borderWidth: scale(3),
    alignItems: "center",
    justifyContent: "center"
  },
  plusiconwrapper: {
    width: moderateScale(30),
    height: moderateScale(35),
    backgroundColor: colors.greytext,
    padding: scale(5),
    alignItems: "center",
    justifyContent: "center"
  },
  minusiconwrapper: {
    width: moderateScale(30),
    height: moderateScale(35),
    backgroundColor: colors.greytext,
    padding: scale(5),
    alignItems: "center",
    justifyContent: "center"
  },
  countwrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(40),
    height: moderateScale(32),
    backgroundColor: colors.whitetext,
    borderWidth: scale(4),
    borderColor: colors.whitetext,
    padding: scale(0.25)
  },
  counttext: {
    fontSize: scale(15),
    fontWeight: "bold",
    color: colors.greytext
  }
});
