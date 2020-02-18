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

import { FontAwesome, Octicons } from "@expo/vector-icons";

import CategoryButton from "../../../components/CategoryButton";

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

const cart = [
  {
    name: "Logo Design Package",
    date: "08 June 2019",
    price: 150,
    orderid: "AD123456",
    status: "BOUGHT",
    id: "1",
    image: require("../../../assets/logodesigncom.jpg")
  },
  {
    name: "Website Design Package",
    date: "10 Aug 2019",
    price: 2500,
    orderid: "AD123456",
    status: "PENDING",
    id: "2",
    image: require("../../../assets/webdesigncom.jpg")
  }
];

class MyOrderFlatlist extends Component {
  constructor() {
    super();
    this.state = {
      price: cart[0].price
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            paddingTop: verticalScale(15)
          }}
        >
          <SwipeListView
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            useFlatList={true}
            keyExtractor={(item, index) => item.id}
            data={cart}
            renderHiddenItem={(rowData, rowMap) => (
              <View style={styles.rowBack}>
                {/* <View
                style={{
                  alignItems: "flex-start",
                  justifyContent: "center",
                  backgroundColor: colors.bggreen,
                  flex: 1,
                  height: verticalScale(160),
                  padding: scale(22)
                }}
              >
                <FontAwesome
                  name="edit"
                  color={colors.whitetext}
                  size={scale(30)}
                />
              </View> */}

                <View
                  style={{
                    alignItems: "flex-end",
                    justifyContent: "center",
                    backgroundColor: colors.bgyellow,
                    flex: 1,
                    height: verticalScale(157),
                    padding: scale(25)
                  }}
                >
                  <Octicons
                    name="trashcan"
                    color={colors.whitetext}
                    size={scale(30)}
                  />
                </View>
              </View>
            )}
            //   leftOpenValue={75}
            rightOpenValue={-75}
            onRowOpen={(rowKey, rowMap) => {
              setTimeout(() => {
                rowMap[rowKey].closeRow();
              }, 2000);
            }}
            renderItem={({ item, index }) => (
              // ITEMS DESIGN
              <View style={styles.rowFront}>
                <View
                  style={{
                    paddingVertical: verticalScale(10),
                    paddingHorizontal: moderateScale(10),
                    borderBottomColor: colors.blacktext,
                    borderBottomWidth: scale(1)
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row"
                    }}
                  >
                    {/* IMAGE VIEW */}
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <Image
                        source={item.image}
                        style={styles.itemImage}
                        resizeMode="cover"
                      />
                    </View>
                    {/* DETAILS VIEW */}
                    <View
                      style={{
                        flex: 2,
                        paddingLeft: moderateScale(10)
                      }}
                    >
                      <Text style={styles.itemTitle}>{item.name}</Text>
                      <Text style={styles.itemDetails}>Date: {item.date}</Text>
                      <Text style={styles.itemDetails}>
                        Order Id: {item.orderid}
                      </Text>

                      {/* DETAILS BUTTON & PRICE VIEW */}

                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "flex-end",
                          justifyContent: "flex-start"
                        }}
                      >
                        {/* PRICE TEXT START */}
                        <View
                          style={{
                            flex: 0.8
                          }}
                        >
                          <Text style={styles.itemDetails}>
                            Price: {item.price} AED
                          </Text>
                        </View>
                        {/* DETAILS BUTTON START */}
                        <View
                          style={{
                            flex: 0.2,
                            alignItems: "flex-end",
                            paddingTop: verticalScale(5),
                            marginTop: verticalScale(10)
                          }}
                        >
                          <CategoryButton style={styles.detailsbutton}>
                            <Text style={styles.detailsbuttontext}>
                              DETAILS
                            </Text>
                          </CategoryButton>
                        </View>
                      </View>
                    </View>
                  </View>
                  {/* STATUS VIEW */}
                  <View
                    style={{
                      padding: scale(5),
                      justifyContent: "center"
                    }}
                  >
                    {item.status == "BOUGHT" ? (
                      <Text
                        style={[styles.itemStatus, { color: colors.bggreen }]}
                      >
                        {item.status}
                      </Text>
                    ) : (
                      <Text
                        style={[styles.itemStatus, { color: colors.bgred }]}
                      >
                        {item.status}
                      </Text>
                    )}
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}
export default MyOrderFlatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(6)
  },
  itemContainer: {
    height: verticalScale(50),
    width: "100%"
  },
  rowFront: {
    backgroundColor: colors.whitetext,
    height: verticalScale(180)
  },
  rowBack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.whitetext
  },
  itemImage: {
    width: "100%",
    height: verticalScale(105),
    borderWidth: scale(1.5),
    borderColor: colors.bgblue,
    borderRadius: moderateScale(10)
  },
  itemTitle: {
    fontSize: scale(14.5),
    fontWeight: "600",
    color: colors.bgyellow
  },
  itemDetails: {
    fontSize: scale(13),
    fontWeight: "400",
    color: colors.greytext
  },
  itemStatus: {
    fontSize: scale(14),
    fontWeight: "800"
  },
  detailsbutton: {
    backgroundColor: colors.bgblue,
    borderColor: colors.bgblue,
    height: verticalScale(30),
    width: moderateScale(70),
    borderRadius: scale(50)
  },
  detailsbuttontext: {
    fontSize: scale(10),
    color: colors.whitetext,
    fontWeight: "700"
  }
});
