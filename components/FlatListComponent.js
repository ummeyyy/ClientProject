import * as React from "react";
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

import { moderateScale, scale, verticalScale } from "../scale";
import colors from "../assets/colors";

import { Card } from "react-native-shadow-cards";

const section = [
  {
    name: "4F FLYERS",
    time: 2,
    price: 100,
    sale: "10% OFF",
    rating: 4.3,
    id: "1",
    image: require("../assets/home.jpg")
  },
  {
    name: "BROCHURE",
    time: 4,
    price: 250,
    sale: "35% OFF",
    rating: 3.3,
    id: "2",
    image: require("../assets/restaurant.jpg")
  },
  {
    name: "POSTER",
    time: 2,
    price: 100,
    sale: "5% OFF",
    rating: 2.3,
    id: "3",
    image: require("../assets/home.jpg")
  },
  {
    name: "4F FLYERS",
    time: 4,
    price: 250,
    rating: 4.2,
    id: "4",
    image: require("../assets/restaurant.jpg")
  },
  {
    name: "BROCHURE",
    time: 2,
    price: 100,
    sale: "20% OFF",
    rating: 5.3,
    id: "5",
    image: require("../assets/home.jpg")
  },
  {
    name: "POSTER",
    time: 4,
    price: 250,
    rating: 6,
    id: "6",
    image: require("../assets/restaurant.jpg")
  }
];

class FlatListComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      liked: false,
      addcart: true
    };
  }

  pressedLike = () => {
    this.setState({
      liked: !this.state.liked,
      addcart: !this.state.addcart
    });
  };

  render() {
    return (
      // <View style={{ flex: 1, backgroundColor: colors.whitetext }}>
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => item.id}
          data={section}
          renderItem={({ item }) => (
            <Card style={styles.itemContainer}>
              <Image
                source={item.image}
                style={styles.itemImage}
                resizeMode="center"
              />

              {item.sale ? (
                <View style={styles.saleContainer}>
                  <ImageBackground
                    source={require("../assets/saletag.png")}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Text style={styles.saletext}>{item.sale}</Text>
                  </ImageBackground>
                </View>
              ) : null}
              <View style={styles.rateContainer}>
                <Text style={styles.ratetext}>{item.rating}</Text>
              </View>
              <TouchableOpacity
                style={styles.cartContainer}
                onPress={() => {
                  this.pressedLike();
                }}
              >
                {this.state.addcart ? (
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={scale(20)}
                    color={colors.bgyellow}
                  />
                ) : (
                  <TouchableOpacity>
                    <Image
                      source={require("../assets/cart-view-icon.png")}
                      style={{
                        width: moderateScale(15),
                        height: verticalScale(15)
                      }}
                    />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.favContainer}
                onPress={() => {
                  this.pressedLike();
                }}
              >
                {this.state.liked ? (
                  <MaterialCommunityIcons
                    name="heart"
                    size={scale(22)}
                    color={colors.bgred}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={scale(22)}
                    color={colors.bgred}
                  />
                )}
              </TouchableOpacity>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionName}>{item.name}</Text>
                <View style={styles.timeandpricecontainer}>
                  <TouchableOpacity>
                    <Image
                      source={require("../assets/est-icon.png")}
                      style={{
                        width: moderateScale(15),
                        height: verticalScale(15)
                      }}
                    />
                  </TouchableOpacity>

                  <Text style={styles.timeandpricetext}>
                    {" "}
                    {item.time} DAYS {"      "}
                  </Text>
                  <TouchableOpacity>
                    <Image
                      source={require("../assets/price-icon.png")}
                      style={{
                        width: moderateScale(15),
                        height: verticalScale(15)
                      }}
                    />
                  </TouchableOpacity>
                  <Text style={styles.timeandpricetext}>
                    {" "}
                    {item.price} AED{" "}
                  </Text>
                </View>
              </View>
            </Card>
          )}
        />
      </View>
    );
  }
}

export default FlatListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  itemImage: {
    height: verticalScale(100),
    width: "100%"
  },
  itemContainer: {
    marginBottom: verticalScale(20),
    height: verticalScale(160),
    width: moderateScale(162),
    borderRadius: scale(0),
    marginLeft: scale(20),
    backgroundColor: colors.whitetext,
    flex: 2,

    shadowColor: colors.blacktext,
    shadowOffset: { width: moderateScale(0), height: verticalScale(11) },
    shadowOpacity: 0.57,
    shadowRadius: scale(15.19),
    elevation: scale(23)
  },
  descriptionContainer: {
    flex: 1,
    paddingLeft: moderateScale(10),
    paddingTop: verticalScale(5),
    backgroundColor: colors.whitetext,
    marginBottom: verticalScale(5)
  },
  favContainer: {
    position: "absolute",
    right: scale(40),
    top: scale(80),
    zIndex: scale(999),
    height: verticalScale(28),
    width: moderateScale(28),
    borderRadius: moderateScale(15),
    backgroundColor: colors.whitetext,
    justifyContent: "center",
    alignItems: "center"
  },
  cartContainer: {
    position: "absolute",
    right: scale(5),
    top: scale(80),
    zIndex: scale(999),
    height: verticalScale(30),
    width: moderateScale(30),
    borderRadius: moderateScale(15),
    backgroundColor: colors.whitetext,
    justifyContent: "center",
    alignItems: "center"
  },
  rateContainer: {
    position: "absolute",
    right: scale(5),
    top: scale(5),
    zIndex: scale(999),
    height: verticalScale(18),
    width: moderateScale(28),
    borderRadius: moderateScale(7),
    backgroundColor: colors.bgyellow,
    justifyContent: "center",
    alignItems: "center"
  },
  ratetext: {
    fontWeight: "bold",
    fontSize: scale(12.5),
    color: colors.whitetext
  },
  saleContainer: {
    position: "absolute",
    left: scale(-14),
    top: scale(5),
    zIndex: scale(999),
    justifyContent: "center",
    alignItems: "center"
  },
  saletext: {
    fontWeight: "bold",
    fontSize: scale(12),
    color: colors.whitetext,
    padding: scale(8),
    marginBottom: moderateScale(12)
  },
  descriptionName: {
    fontWeight: "bold",
    fontSize: scale(13),
    color: colors.bgblue
  },
  timeandpricetext: {
    fontWeight: "200",
    fontSize: scale(11),
    color: colors.greytext,
    paddingRight: moderateScale(3)
  },
  timeandpricecontainer: {
    flexDirection: "row",
    flex: 2,
    marginTop: verticalScale(-5),
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: moderateScale(5)
  }
});
