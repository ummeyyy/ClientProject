import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

import { FontAwesome } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Swiper from "../../components/Swiper";
import CategoryButton from "../../components/CategoryButton";
import FlatListComponent from "../../components/FlatListComponent";
import CardsCategory from "../HomeScreen/hcomponents/CardsCategory";
import PromotionCard from "../HomeScreen/hcomponents/PromotionCard";

class HomeScreen extends Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     console.log("naviagtion cehcking");
  //     this.props.navigation.navigate("CartScreen");
  //   }, 5000);
  // }

  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  tapOnViewAll = () => {
    this.props.navigation.navigate("BrandingDesign");
  };

  handlePromotions = () => {
    this.props.navigation.navigate("LimitedOffers");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* BODY */}
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={true}
        >
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
            <View
              style={{ marginTop: verticalScale(55), flexDirection: "row" }}
            >
              <View>
                <Text style={styles.categoryTitle}>BRANDING DESIGN</Text>
              </View>
              <View>
                <CategoryButton
                  onPress={this.tapOnViewAll}
                  style={styles.categorybuttonstyle}
                >
                  <Text style={styles.categorybuttonText}>VIEW ALL</Text>
                </CategoryButton>
              </View>
            </View>
            <View style={{ marginTop: verticalScale(17) }}>
              <FlatListComponent />
            </View>

            {/* WEBSITE DESIGN */}
            <View
              style={{ marginTop: verticalScale(35), flexDirection: "row" }}
            >
              <View>
                <Text style={styles.categoryTitle}>WEBSITE DESIGN</Text>
              </View>
              <View style={{ marginLeft: moderateScale(20) }}>
                <CategoryButton
                  style={styles.categorybuttonstyle}
                  onPress={this.tapOnViewAll}
                >
                  <Text style={styles.categorybuttonText}>VIEW ALL</Text>
                </CategoryButton>
              </View>
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
                  onPress={this.tapOnViewAll}
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
              <PromotionCard onPress={this.handlePromotions} />
            </View>

            {/* VIDEO ANIMATION */}
            <View
              style={{ marginTop: verticalScale(35), flexDirection: "row" }}
            >
              <View>
                <Text style={styles.categoryTitle}>VIDEO ANIMATION</Text>
              </View>
              <View style={{ marginLeft: moderateScale(5) }}>
                <CategoryButton
                  style={styles.categorybuttonstyle}
                  onPress={this.tapOnViewAll}
                >
                  <Text style={styles.categorybuttonText}>VIEW ALL</Text>
                </CategoryButton>
              </View>
            </View>

            <View style={{ marginTop: verticalScale(17) }}>
              <FlatListComponent />
            </View>

            {/* ILLUSTRATION  */}
            <View
              style={{ marginTop: verticalScale(35), flexDirection: "row" }}
            >
              <View>
                <Text style={styles.categoryTitle}>ILLUSTRATION</Text>
              </View>
              <View style={{ marginLeft: moderateScale(45) }}>
                <CategoryButton
                  style={styles.categorybuttonstyle}
                  onPress={this.tapOnViewAll}
                >
                  <Text style={styles.categorybuttonText}>VIEW ALL</Text>
                </CategoryButton>
              </View>
            </View>

            <View style={{ marginTop: verticalScale(17) }}>
              <FlatListComponent />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  categorybuttonstyle: {
    width: moderateScale(90),
    height: verticalScale(30),
    marginTop: verticalScale(-8),
    marginLeft: moderateScale(30),
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
  }
});
