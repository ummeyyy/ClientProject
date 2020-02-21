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
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import PromotionCard from "../hcomponents/PromotionCard";
import PropTypes from "prop-types";

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";
import { Card } from "react-native-shadow-cards";

class BrandingCategoryFlatList extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          name: "4F FLYERS",
          code: "D03",
          time: 2,
          price: 100,
          sale: "10% OFF",
          rating: 4.3,
          desc:
            "Short Description will come here in a very stylish and sleek way. It can be in bullet points, BOLD, ITALIC, UNDERLINE etc",
          id: "1",
          image: require("../../../assets/home.jpg")
        },
        {
          name: "BROCHURE",
          code: "D07",
          time: 4,
          price: 250,
          sale: "35% OFF",
          rating: 3.3,
          desc:
            "Short Description will come here in a very stylish and sleek way. It can be in bullet points, BOLD, ITALIC, UNDERLINE etc",
          id: "2",
          image: require("../../../assets/restaurant.jpg")
        },
        {
          name: "Promotions"
        },
        {
          name: "POSTER",
          code: "D08",
          time: 2,
          price: 100,
          sale: "5% OFF",
          rating: 2.3,
          desc:
            "Short Description will come here in a very stylish and sleek way. It can be in bullet points, BOLD, ITALIC, UNDERLINE etc",
          id: "3",
          image: require("../../../assets/home.jpg")
        }
      ],
      liked: false,
      addcart: true
    };
  }

  addto = () => {
    this.setState({
      addcart: !this.state.addcart
    });
  };

  pressedLike = () => {
    this.setState({
      liked: !this.state.liked
    });
  };

  renderItem = (item, index) => {
    switch (item.name) {
      case "Promotions":
        return <PromotionCard onPress={this.props.onDetails} />;

      default:
        return (
          // RENDERING THE ITEMS ONE BY ONE
          <TouchableOpacity
            onPress={() => {
              this.props.onpress(item, item.id);
            }}
          >
            <Card style={styles.itemContainer}>
              <Image
                source={item.image}
                style={styles.itemImage}
                resizeMode="cover"
              />

              {/* ITEM SALE PORTION */}
              {item.sale ? (
                <View style={styles.saleContainer}>
                  <ImageBackground
                    source={require("../../../assets/saletag.png")}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Text style={styles.saletext}>{item.sale}</Text>
                  </ImageBackground>
                </View>
              ) : null}
              <View style={styles.rateContainer}>
                <Text style={styles.ratetext}>{item.rating}</Text>
              </View>

              {/* ADD CART PORTION */}
              <TouchableOpacity
                style={styles.cartContainer}
                onPress={() => {
                  this.addto();
                }}
              >
                {this.state.addcart ? (
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={scale(20)}
                    color={colors.bgyellow}
                  />
                ) : (
                  <Image
                    source={require("../../../assets/cart-view-icon.png")}
                    style={{
                      width: moderateScale(20),
                      height: verticalScale(20)
                    }}
                  />
                )}
              </TouchableOpacity>
              {/* FAVORITE PORTION */}
              <TouchableOpacity
                style={styles.favContainer}
                onPress={() => {
                  this.pressedLike();
                }}
              >
                {this.state.liked ? (
                  <MaterialCommunityIcons
                    name="heart"
                    size={scale(25)}
                    color={colors.bgred}
                  />
                ) : (
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={scale(25)}
                    color={colors.bgred}
                  />
                )}
              </TouchableOpacity>

              {/* IMAGE DESCRIPTION */}
              <View style={styles.descriptionContainer}>
                {/* TIME & PRICE */}
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.descriptionName}>{item.name}</Text>

                  <View style={styles.timeandpricecontainer}>
                    <TouchableOpacity>
                      <Image
                        source={require("../../../assets/est-icon.png")}
                        style={{
                          width: moderateScale(20),
                          height: verticalScale(20)
                        }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.timeandpricetext}>
                      {" "}
                      {item.time} DAYS{"   "}
                    </Text>
                    <TouchableOpacity>
                      <Image
                        source={require("../../../assets/price-icon.png")}
                        style={{
                          width: moderateScale(20),
                          height: verticalScale(20)
                        }}
                      />
                    </TouchableOpacity>
                    <Text style={styles.timeandpricetext}>
                      {" "}
                      {item.price} AED{" "}
                    </Text>
                  </View>
                </View>

                {/* {DESCRIPTION TEXT} */}
                <View style={{ marginTop: verticalScale(5) }}>
                  <Text style={styles.descriptionText}>{item.desc}</Text>
                </View>

                {/* SHARE AND CODE */}
                <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
                  <View>
                    <Text style={styles.codeText}>CODE: {item.code}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.shareText}> SHARE </Text>
                    <TouchableOpacity
                      style={{
                        paddingTop: verticalScale(10),
                        paddingHorizontal: moderateScale(5)
                      }}
                    >
                      <Image
                        source={require("../../../assets/share-icon.png")}
                        style={{
                          width: moderateScale(15),
                          height: verticalScale(15)
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Card>
          </TouchableOpacity>
        );
    }
  };

  render() {
    const { children, ...rest } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: colors.whitetext }}>
        <View>
          {/* FLATLIST */}
          <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            data={this.state.data}
            renderItem={({ item, index }) => this.renderItem(item, index)}
          />
        </View>
      </View>
    );
  }
}

export default BrandingCategoryFlatList;

const styles = StyleSheet.create({
  itemContainer: {
    height: verticalScale(270),
    width: moderateScale(302),
    marginHorizontal: moderateScale(30),
    marginVertical: verticalScale(15),
    backgroundColor: colors.whitetext,
    borderRadius: scale(0),
    flex: 2,
    shadowColor: colors.blacktext,
    shadowOffset: {
      width: scale(0),
      height: moderateScale(11)
    },
    shadowOpacity: scale(0.57),
    shadowRadius: scale(10),
    elevation: scale(23)
  },
  itemImage: {
    height: verticalScale(150),
    width: "100%"
  },
  descriptionContainer: {
    flex: 1,
    paddingLeft: moderateScale(20),
    paddingTop: verticalScale(18),
    backgroundColor: colors.whitetext,
    marginBottom: verticalScale(5)
  },
  favContainer: {
    position: "absolute",
    right: scale(50),
    top: scale(120),
    zIndex: scale(999),
    height: verticalScale(38),
    width: moderateScale(38),
    borderRadius: moderateScale(19),
    backgroundColor: colors.whitetext,
    justifyContent: "center",
    alignItems: "center"
  },
  cartContainer: {
    position: "absolute",
    right: scale(5),
    top: scale(120),
    zIndex: scale(999),
    height: verticalScale(38),
    width: moderateScale(38),
    borderRadius: moderateScale(19),
    backgroundColor: colors.whitetext,
    justifyContent: "center",
    alignItems: "center"
  },
  rateContainer: {
    position: "absolute",
    right: scale(5),
    top: scale(15),
    zIndex: scale(999),
    height: verticalScale(22),
    width: moderateScale(32),
    borderRadius: moderateScale(11.5),
    backgroundColor: colors.bgyellow,
    justifyContent: "center",
    alignItems: "center"
  },
  ratetext: {
    fontWeight: "bold",
    fontSize: scale(13),
    color: colors.whitetext
  },
  saleContainer: {
    position: "absolute",
    left: scale(-14),
    top: scale(15),
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
    fontWeight: "700",
    fontSize: scale(17),
    color: colors.bgblue
  },
  descriptionText: {
    fontSize: scale(9),
    fontWeight: "200",
    color: colors.blacktext
  },
  timeandpricetext: {
    fontWeight: "700",
    fontSize: scale(11),
    color: colors.greytext
  },
  timeandpricecontainer: {
    flexDirection: "row",
    position: "absolute",
    zIndex: scale(999),
    alignItems: "center",
    justifyContent: "flex-end",
    right: scale(5),
    top: scale(3)
  },
  codeText: {
    fontSize: scale(12),
    fontWeight: "bold",
    color: colors.bgblue,
    marginTop: scale(8)
  },
  shareText: {
    fontSize: scale(12),
    fontWeight: "bold",
    color: colors.greytext,
    marginTop: scale(8),
    marginLeft: scale(115)
  }
});
