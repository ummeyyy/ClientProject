import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";

import { moderateScale, scale, verticalScale } from "./scale";
import colors from "./assets/colors";

import CategoryButton from "./components/CategoryButton";

// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import Navigation from "./Router";
// import store from "./store/Config";
// import { persistStore } from "redux-persist";

// class App extends Component {
//   render() {
//     const persistor = persistStore(store);

//     return (
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <Navigation />
//         </PersistGate>
//       </Provider>
//     );
//   }
// }
// export default App;

const products = [
  {
    name: "4F FLYERS",
    category: "BRANDING DESIGN",
    price: 100,
    sale: "10% OFF",
    code: "D01",
    image: require("./assets/home.jpg")
  },
  {
    name: "5 PAGE WENSITE DESIGN",
    category: "WEBSITE",
    price: 250,
    sale: "35% OFF",
    code: "W01",
    image: require("./assets/restaurant.jpg")
  },
  {
    name: "ANIMATION FOR YOUR BUSINESS",
    category: "VIDEO ANIMATION",
    price: 100,
    sale: "5% OFF",
    code: "V01",
    image: require("./assets/home.jpg")
  }
];

class CartScreen extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      salePrice: (products[0].price * products[0].sale) / 100,
      price: products[0].price,
      actualprice: 0,
      totalPrice:
        products[0].price - (products[0].price * products[0].sale) / 100
    };
  }

  handleIncerement = () => {
    this.setState({
      count: this.state.count + 1,
      actualprice: this.state.price - this.state.salePrice,
      totalPrice:
        (this.state.count + 1) * (this.state.price - this.state.salePrice)
    });
  };

  handleDecrement = () => {
    if (this.state.count <= 1) {
      return;
    } else {
      this.setState({
        count: this.state.count - 1,
        actualprice: this.state.price - this.state.salePrice,
        totalPrice:
          (this.state.count - 1) * (this.state.price - this.state.salePrice)
      });
    }
  };
  render() {
    return (
      //main container
      <View style={styles.container}>
        {/* Searchbar Alternative*/}
        <View
          style={{
            height: moderateScale(50),
            backgroundColor: colors.bgblue
          }}
        ></View>
        {/* Your cart heading Section*/}
        <View
          style={{
            marginTop: verticalScale(25),
            flexDirection: "row",
            paddingHorizontal: moderateScale(20)
          }}
        >
          <Image
            source={require("./assets/yourcart.png")}
            style={styles.yourcartlogo}
          />
          <Text style={styles.screenTitle}>YOUR CART</Text>
        </View>
        {/* Car items Section*/}
        <FlatList
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={products}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: colors.bggreen }}>
              <Image
                source={item.image}
                style={styles.productimage}
                resizeMode="contain"
              />
            </View>
          )}
        />
      </View>
      /*
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
                <TouchableOpacity style={styles.cartContainer}>
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={scale(20)}
                    color={colors.bgyellow}
                  />
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
                    <Ionicons
                      name="md-time"
                      size={scale(13)}
                      color={colors.greytext}
                    />
                    <Text style={styles.timeandpricetext}>
                      {" "}
                      {item.time} DAYS {"      "}
                    </Text>
                    <MaterialCommunityIcons
                      name="coin"
                      size={scale(13)}
                      color={colors.greytext}
                    />
                    <Text style={styles.timeandpricetext}>
                      {" "}
                      {item.price} AED{" "}
                    </Text>
                  </View>
                </View>
              </View>
            )} */
    );
  }
}
export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blacktext
  },
  yourcartlogo: {
    height: verticalScale(25),
    width: moderateScale(26)
  },
  screenTitle: {
    marginLeft: moderateScale(21),
    fontSize: scale(20),
    fontWeight: "bold",
    color: colors.bgblue,
    marginLeft: moderateScale(12)
  },
  productimage: {
    // flex: 2,
    height: moderateScale(80),
    width: moderateScale(75),
    borderRadius: scale(10),
    marginRight: scale(10),
    marginTop: verticalScale(10)
  }
});
