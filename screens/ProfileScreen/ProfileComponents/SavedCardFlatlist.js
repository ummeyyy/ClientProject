import React, { Component } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";

import { SwipeListView } from "react-native-swipe-list-view";

import {
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
  Octicons
} from "@expo/vector-icons";

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

const card = [
  {
    id: 1,
    accountholdername: "ACCOUNT HOLDER NAME",
    accountexpiry: "2020/02",
    accountnumber: "01234 5678 9876",
    image: require("../../../assets/visa.png")
  },
  {
    id: 2,
    accountholdername: "ACCOUNT HOLDER NAME",
    accountexpiry: "2019/02",
    accountnumber: "01234 5678 9876",
    image: require("../../../assets/visa.png")
  },
  {
    id: 3,
    accountholdername: "ACCOUNT HOLDER NAME",
    accountexpiry: "2020/02",
    accountnumber: "01234 5678 9876",
    image: require("../../../assets/master.png")
  }
];

class SavedCardFlatlist extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: false
    };
  }

  buttonPressed = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  };

  render() {
    return (
      <SwipeListView
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        useFlatList={true}
        keyExtractor={(item, index) => item.id}
        data={card}
        renderHiddenItem={(rowData, rowMap) => (
          <View style={styles.rowBack}>
            <View
              style={{
                alignItems: "flex-start",
                backgroundColor: colors.bggreen,
                flex: 1,
                height: verticalScale(150),
                paddingVertical: verticalScale(35),
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
                paddingVertical: verticalScale(35),
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
          <View style={styles.rowFront}>
            {/* <View style={styles.methodContainer}> */}
            {/* VIEW FOR TEXTS */}
            <View style={{ flex: 2 }}>
              <Text style={styles.accountholdertext}>
                {item.accountholdername}
              </Text>
              <Text style={styles.othertext}>Expiry: {item.accountexpiry}</Text>
              <Text style={styles.othertext}>
                Card Number: {item.accountnumber}
              </Text>
            </View>
            {/* VIEW FOR TEXTS END*/}

            {/* VIEW TO CHOOSE ONE OF THE CARD */}

            <View
              style={{
                flex: 0.7,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {!this.state.isHidden ? (
                <TouchableOpacity onPress={this.buttonPressed}>
                  <Entypo
                    name="circle"
                    color={colors.greytext}
                    size={scale(25)}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={this.buttonPressed}>
                  <MaterialCommunityIcons
                    name="check-circle-outline"
                    color={colors.bgblue}
                    size={scale(27)}
                  />
                </TouchableOpacity>
              )}
            </View>
            {/* VIEW TO CHOOSE ONE OF THE CARD END */}
            {/* VIEW FOR CARD IMAGE */}

            <View
              style={{
                flex: 0.4,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={item.image}
                style={styles.itemImage}
                resizeMode="contain"
              />
            </View>
            {/* VIEW FOR CARD IMAGE END */}
          </View>
        )}
      />
    );
  }
}
export default SavedCardFlatlist;

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
    marginHorizontal: moderateScale(6),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.whitetext,
    height: verticalScale(100),
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
    width: moderateScale(85),
    height: verticalScale(85)
  },
  accountholdertext: {
    fontSize: scale(13),
    color: colors.bgyellow,
    fontWeight: "300"
  },
  othertext: {
    fontSize: scale(12),
    color: colors.blacktext,
    fontWeight: "300"
  }
});
