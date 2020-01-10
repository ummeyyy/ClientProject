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
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ height: 150 }}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            data={section}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
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
                <TouchableOpacity style={styles.cartContainer}>
                  <MaterialIcons
                    name="add-shopping-cart"
                    size={20}
                    color="#F9CF2F"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.favContainer}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={22}
                    color="#FF0000"
                  />
                </TouchableOpacity>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.descriptionName}>{item.name}</Text>
                  <View style={styles.timeandpricecontainer}>
                    <Ionicons name="md-time" size={13} color="#5D5D5D" />
                    <Text style={styles.timeandpricetext}>
                      {" "}
                      {item.time} DAYS{" "}
                    </Text>
                    <MaterialCommunityIcons
                      name="coin"
                      size={13}
                      color="#5D5D5D"
                    />
                    <Text style={styles.timeandpricetext}>
                      {" "}
                      {item.price} AED{" "}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

export default FlatListComponent;

const styles = StyleSheet.create({
  itemImage: {
    height: 100,
    width: "100%"
  },
  itemContainer: {
    height: 160,
    width: 162,
    marginLeft: 20,
    backgroundColor: "white",
    flex: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11
    },
    shadowOpacity: 0.57,
    shadowRadius: 10,
    elevation: 23
  },
  descriptionContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 5,
    backgroundColor: "white",
    marginBottom: 5
  },
  favContainer: {
    position: "absolute",
    right: 40,
    top: 85,
    zIndex: 999,
    height: 28,
    width: 28,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  rateContainer: {
    position: "absolute",
    right: 5,
    top: 5,
    zIndex: 999,
    height: 16,
    width: 27,
    borderRadius: 7,
    backgroundColor: "#F9CF2F",
    justifyContent: "center",
    alignItems: "center"
  },
  ratetext: {
    fontWeight: "bold",
    fontSize: 13,
    color: "white"
  },
  saleContainer: {
    position: "absolute",
    left: -16.5,
    top: 5,
    zIndex: 999,
    justifyContent: "center",
    alignItems: "center"
  },
  saletext: {
    fontWeight: "bold",
    fontSize: 12,
    color: "white",
    padding: 8,
    marginBottom: 9
  },
  cartContainer: {
    position: "absolute",
    right: 5,
    top: 85,
    zIndex: 999,
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },
  descriptionName: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#21C7D8"
  },
  timeandpricetext: {
    fontWeight: "200",
    fontSize: 11,
    color: "#5D5D5D",
    paddingRight: 5
  },
  timeandpricecontainer: {
    flexDirection: "row",
    flex: 2,
    marginTop: -5,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingRight: 5
  }
});
