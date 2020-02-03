import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { CheckBox } from "react-native-elements";
// import { SwipeListView } from "react-native-swipe-list-view";

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

const paymenttype = [
  {
    name: "CASH ON DELIVERY",
    id: "1"
  },
  {
    name: "REWARD POINTS",
    balance: 30,
    id: "2"
  },
  {
    name: "CREDIT CARD",
    id: "3"
  }
];

class PaymentMethodSelection extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  titleStyling = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.blacktext,
          marginVertical: verticalScale(10)
        }}
      >
        <Text
          style={{
            color: colors.greytext,
            fontSize: scale(15),
            fontWeight: "400"
          }}
        >
          {paymenttype.name[index]}
        </Text>
      </View>
    );
  };
  render() {
    return (
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        extraData={this.state.indexChecked}
        data={paymenttype}
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
                iconRight
                title={this.titleStyling}
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
            </View>
          </View>
        )}
      />
    );
  }
}
export default PaymentMethodSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
