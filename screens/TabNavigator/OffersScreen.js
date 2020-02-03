import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import LimitedTimeProduct from "../ProductScreen/LimitedTimeProduct";
import Brochure from "../ProductScreen/Brochure";
import BrochureCart from "../../screens/CartScreen/BrochureCart";
import BrochureCartTwo from "../ProductScreen/BrochureCartTwo";
import CheckoutScreen from "../CheckoutScreen/CheckoutScreen";
import StepTwo from "../CheckoutScreen/StepTwo";

export default class OffersScreen extends Component {
  render() {
    return (
      // <LimitedTimeProduct />
      //<Brochure></Brochure>
      //   <BrochureCart></BrochureCart>
      //   <BrochureCartTwo></BrochureCartTwo>
      // <View style={styles.container}>
      //   <Text>HELLO</Text>
      // </View>
      // <CheckoutScreen></CheckoutScreen>
      <StepTwo></StepTwo>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
