import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";
import CategoryButton from "../../components/CategoryButton";

import FlatListComponent from "../../components/FlatListComponent";
import Swiper from "../../components/Swiper";
import BrandingCategoryFlatList from "../HomeScreen/hcomponents/BrandingCategoryFlatList";
import PromotionCard from "../HomeScreen/hcomponents/PromotionCard";

export default class ViewAllCategories extends React.Component {
  //onpress call back from tapping on branding flatlist for
  //navigation. we are also getting the index and item here so we can
  //also pass it to the screen we are navigating
  handleOnPress = (item, index) => {
    //  Alert.alert(item)
    // console.log(item);
    // console.log("hello");
    if (index === "1") {
      this.props.navigation.navigate("A4FlyerScreen");
      console.log(index);
    } else {
      this.props.navigation.navigate("BrochureScreen");
    }
  };

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

            {/* BRANDING DESIGN */}
            <View style={{ marginTop: verticalScale(60) }}>
              <Text style={styles.categoryTitle}>BRANDING DESIGN</Text>
            </View>
            <View style={{ marginTop: verticalScale(10) }}>
              <BrandingCategoryFlatList
                onpress={this.handleOnPress}
              ></BrandingCategoryFlatList>
            </View>

            {/* PROMOTIONS HERE */}
            {/* <View>
              <PromotionCard />
            </View> */}

            {/* RELATED PRODUCTS HERE */}
            <View
              style={{ marginTop: verticalScale(15), flexDirection: "row" }}
            >
              <View>
                <Text style={styles.relatedProductsTitle}>
                  RELATED PRODUCTS
                </Text>
              </View>
              <View>
                <CategoryButton style={styles.categorybuttonstyle}>
                  <Text style={styles.categorybuttonText}>VIEW ALL</Text>
                </CategoryButton>
              </View>
            </View>
            {/* FLATLIST */}
            <View style={{ marginTop: verticalScale(15) }}>
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
  categorybuttonstyle: {
    width: moderateScale(90),
    height: verticalScale(30),
    marginLeft: moderateScale(15),
    borderColor: colors.bgyellow,
    borderRadius: scale(20),
    backgroundColor: colors.whitetext,
    borderWidth: scale(3),
    alignItems: "center",
    justifyContent: "center"
  },
  categorybuttonText: {
    fontSize: scale(11),
    color: colors.bgyellow,
    fontWeight: "500"
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
  },
  relatedProductsTitle: {
    fontSize: scale(18),
    fontWeight: "bold",
    color: colors.bgyellow,
    paddingHorizontal: moderateScale(15)
  }
});
