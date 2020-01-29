import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

class CartItemsFlatlist extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>componentName</Text>
      </View>
    );
  }
}
export default CartItemsFlatlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
