import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

import Swiper from "../../components/Swiper";
import CButton from "../../components/CButton";
import FlatListComponent from "../../components/FlatListComponent";
import CardsCategory from "../HomeScreen/hcomponents/CardsCategory";
import PromotionCard from "../HomeScreen/hcomponents/PromotionCard";

export default class App extends React.Component {
  componentDidMount(){
    setTimeout(() => {
      console.log("naviagtion cehcking")
      this.props.navigation.navigate('CartScreen')
    }, 5000);
  }
  render() {
    
    return (
      // HEADER
      <View style={{ flex: 1 }}>
        <SafeAreaView />

        {/* BODY */}
        <ScrollView>
          <View style={{ flex: 1 }}>
            <Swiper />
            <TouchableOpacity>
              <Image
                source={require("../../assets/icon-layout.png")}
                style={{
                  width: moderateScale(30),
                  height: verticalScale(30),
                  position: "absolute",
                  top: scale(3),
                  right: scale(15)
                }}
              />
            </TouchableOpacity>

            <View style={{ marginTop: verticalScale(55) }}>
              <CButton />
              <Text style={styles.categoryTitle}>BRANDING DESIGN</Text>
            </View>
            <View style={{ marginTop: verticalScale(17) }}>
              <FlatListComponent />
            </View>

            <View style={{ marginTop: verticalScale(35) }}>
              <CButton />
              <Text style={styles.categoryTitle}>WEBSITE DESIGN</Text>
            </View>
            <View
              style={{
                marginTop: verticalScale(15)
              }}
            >
              <FlatListComponent />
            </View>

            {/* CARD CATEOGRIES HERE */}

            <View style={styles.cardContainer}>
              <View style={{ marginTop: verticalScale(9) }}>
                <Text style={styles.cardTitle}>BROWSE BY CATEGORIES </Text>
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    right: scale(7),
                    top: scale(-5)
                  }}
                >
                  <View style={styles.buttonContainer}>
                    <Text style={styles.cbuttonText}>VIEW ALL</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <CardsCategory />
            </View>

            {/* PROMOTIONS HERE */}
            <View>
              <PromotionCard />
            </View>

            <View style={{ marginTop: verticalScale(35) }}>
              <CButton />
              <Text style={styles.categoryTitle}>VIDEO ANIMATION</Text>
            </View>
            <View style={{ marginTop: verticalScale(17) }}>
              <FlatListComponent />
            </View>

            <View style={{ marginTop: verticalScale(35) }}>
              <CButton />
              <Text style={styles.categoryTitle}>ILLUSTRATION</Text>
            </View>
            <View style={{ marginTop: verticalScale(17) }}>
              <FlatListComponent />
            </View>
          </View>
        </ScrollView>
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whitetext,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    fontSize: scale(15),
    color: colors.bgyellow
  },
  categoryTitle: {
    marginLeft: moderateScale(21),
    marginTop: verticalScale(-8),
    fontSize: scale(20),
    fontWeight: "bold",
    color: colors.bgyellow
  },
  cardContainer: {
    backgroundColor: colors.bgblue,
    height: verticalScale(415),
    width: "100%",
    marginTop: verticalScale(35),
    padding: scale(10)
  },
  cardTitle: {
    marginLeft: moderateScale(5),
    fontSize: scale(16),
    fontWeight: "800",
    color: colors.whitetext
  },
  buttonContainer: {
    flex: 2,
    width: moderateScale(90),
    height: verticalScale(30),
    borderStyle: "solid",
    borderColor: colors.whitetext,
    borderRadius: scale(20),
    backgroundColor: "transparent",
    borderWidth: scale(3),
    alignItems: "center",
    justifyContent: "center"
  },
  cbuttonText: {
    fontSize: scale(12),
    color: colors.whitetext,
    fontWeight: "500"
  }
});
