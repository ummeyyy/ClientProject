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

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

const categ = [
  {
    name: "BRANDING DESIGN",
    id: "1",
    image: require("../../../assets/bdesign.png")
  },
  { name: "ADVERTISING", id: "2", image: require("../../../assets/adv.jpg") },
  {
    name: "WEBSITE CREATION",
    id: "3",
    image: require("../../../assets/webcreation.jpg")
  },
  {
    name: "VIDEO ANIMATION",
    id: "4",
    image: require("../../../assets/vanimation.jpg")
  }
];

class CardsCategory extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          keyExtractor={item => item.id}
          data={categ}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: colors.bgyellow,
                height: verticalScale(90),
                borderRadius: scale(15),
                marginBottom: verticalScale(45),
                margin: scale(10),
                marginTop: verticalScale(30)
              }}
            >
              <View style={styles.cardStyle}>
                <ImageBackground
                  source={item.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeImage: "contain",
                    opacity: 0.4,
                    backgroundColor: colors.bgyellow,
                    borderRadius: scale(30 / 2),
                    overflow: "hidden",
                    borderWidth: scale(0.2),
                    borderColor: colors.bgyellow
                  }}
                />
                <View style={styles.CardTextContainer}>
                  <Text style={styles.CardTitle}>{item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
    );
  }
}
export default CardsCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cardStyle: {
    width: moderateScale(155),
    height: verticalScale(140),
    marginBottom: scale(20),
    backgroundColor: colors.bgyellow,
    borderRadius: scale(15),
    shadowColor: colors.blacktext,
    shadowOffset: {
      width: scale(0),
      height: scale(11)
    },
    shadowOpacity: 0.57,
    shadowRadius: scale(10),
    elevation: scale(23)
  },
  CardTextContainer: {
    position: "absolute",
    right: scale(15),
    left: scale(27),
    top: scale(45),
    bottom: scale(15),
    zIndex: scale(999)
  },
  CardTitle: {
    fontSize: scale(14),
    fontWeight: "bold",
    color: colors.whitetext
  }
});
