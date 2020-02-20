import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView
} from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CategoryButton from "../../../components/CategoryButton";

import { FontAwesome, AntDesign, Octicons } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

const cart = [
  {
    name: "Logo Design Package",
    date: "08 June 2019",
    price: 150,
    orderid: "AD123456",
    id: "1",
    image: require("../../../assets/logodesigncom.jpg")
  },
  {
    name: "Website Design Package",
    date: "10 Aug 2019",
    price: 2500,
    orderid: "AD654321",
    id: "2",
    image: require("../../../assets/webdesigncom.jpg")
  },
  {
    name: "Video Animation",
    date: "10 Sept 2019",
    price: 3550,
    orderid: "AD987575w",
    id: "3",
    image: require("../../../assets/videodesigncom.jpg")
  }
];

export default class FavouritsFlatList extends Component {
  tapOnProfile = () => {
    this.props.navigation.navigate("Profile");
  };

  tapOnMyOrders = () => {
    this.props.navigation.navigate("MyOrders");
  };

  tapOnFavoruties = () => {
    this.props.navigation.navigate("Favourites");
  };

  tapOnSavedCards = () => {
    this.props.navigation.navigate("SavedCards");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.container}
          scrollEnabled={true}
        >
          {/* ACCOUNT DETAILS SCROLLBAR START*/}
          <View style={styles.catogeryContainer}>
            <ScrollView
              directionalLockEnabled={true}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <Text
                style={[
                  styles.catogeryContainerTitle,
                  { paddingTop: verticalScale(5) }
                ]}
              >
                ACCOUNT DETAILS
              </Text>
              <CategoryButton
                onPress={this.tapOnProfile}
                style={{ backgroundColor: colors.inactivegreybutton }}
              >
                <Text style={styles.catogeryContainerText}>PROFILE</Text>
              </CategoryButton>
              <CategoryButton
                onPress={this.tapOnMyOrders}
                style={{ backgroundColor: colors.inactivegreybutton }}
              >
                <Text style={styles.catogeryContainerText}>MY ORDERS</Text>
              </CategoryButton>
              <CategoryButton onPress={this.tapOnFavoruties}>
                <Text style={styles.catogeryContainerText}>FAVOURITES</Text>
              </CategoryButton>
              <CategoryButton
                style={{ backgroundColor: colors.inactivegreybutton }}
                onPress={this.tapOnSavedCards}
              >
                <Text style={styles.catogeryContainerText}>SAVED CARDS</Text>
              </CategoryButton>
              <CategoryButton
                style={{ backgroundColor: colors.inactivegreybutton }}
              >
                <Text style={styles.catogeryContainerText}>SETTINGS</Text>
              </CategoryButton>
            </ScrollView>
          </View>
          {/* ACCOUNT DETAILS SCROLLBAR END*/}

          {/* FLATLIST TO DISPLAY ORDERS START*/}
          <View
            style={{
              flex: 1
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
                  <View
                    style={{
                      alignItems: "flex-start",
                      // justifyContent: "center",
                      backgroundColor: colors.bggreen,
                      flex: 1,
                      height: verticalScale(150),
                      paddingVertical: verticalScale(45),
                      paddingHorizontal: moderateScale(25)
                    }}
                  >
                    <FontAwesome
                      name="edit"
                      color={colors.whitetext}
                      size={scale(30)}
                    />
                  </View>

                  <View
                    style={{
                      alignItems: "flex-end",
                      backgroundColor: colors.bgyellow,
                      flex: 1,
                      height: verticalScale(150),
                      paddingVertical: verticalScale(45),
                      paddingHorizontal: moderateScale(25)
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
              leftOpenValue={80}
              rightOpenValue={-80}
              onRowOpen={(rowKey, rowMap) => {
                setTimeout(() => {
                  rowMap[rowKey].closeRow();
                }, 2000);
              }}
              renderItem={({ item, index }) => (
                // ITEMS DESIGN
                <View style={styles.rowFront}>
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
                      flex: 2.2,
                      paddingLeft: moderateScale(10),
                      marginBottom: verticalScale(5)
                    }}
                  >
                    <Text style={styles.itemTitle}>{item.name}</Text>
                    <Text style={styles.itemDetails}>Date: {item.date}</Text>
                    <Text style={styles.itemDetails}>
                      Order Id: {item.orderid}
                    </Text>
                    <Text style={styles.itemDetails}>
                      {"\n"}
                      Price: {item.price} AED
                      {"\n"}
                    </Text>
                  </View>
                  {/* PLUS BUTTON START */}
                  <View
                    style={{
                      flex: 0.7,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <TouchableOpacity>
                      <View style={{ paddingLeft: moderateScale(5) }}>
                        <AntDesign
                          name="pluscircle"
                          color={colors.bgblue}
                          size={scale(25)}
                        />
                      </View>
                      <Text style={styles.Addbuttontext}>ADD</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
          {/* FLATLIST TO DISPLAY ORDERS END*/}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  catogeryContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    height: verticalScale(60),
    padding: scale(10),
    backgroundColor: colors.whitetext,
    borderBottomWidth: scale(1.5),
    borderBottomColor: colors.greytext
  },
  catogeryContainerTitle: {
    color: colors.greytext,
    fontSize: scale(12),
    fontWeight: "bold"
  },
  catogeryContainerText: {
    color: colors.whitetext,
    fontSize: scale(10),
    fontWeight: "bold"
  },
  itemContainer: {
    height: verticalScale(50),
    width: "100%"
  },
  rowFront: {
    marginHorizontal: moderateScale(6),
    backgroundColor: colors.whitetext,
    height: verticalScale(130),
    flexDirection: "row",
    paddingVertical: verticalScale(5),
    paddingHorizontal: moderateScale(20),
    borderBottomColor: colors.blacktext,
    borderBottomWidth: scale(1)
  },
  rowBack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: moderateScale(6),
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
  Addbutton: {
    backgroundColor: colors.bgblue,
    borderColor: colors.bgblue,
    height: verticalScale(30),
    width: moderateScale(70),
    borderRadius: scale(50)
  },
  Addbuttontext: {
    fontSize: scale(13),
    color: colors.bgblue,
    fontWeight: "600"
  }
});
