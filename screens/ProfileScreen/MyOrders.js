import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  SafeAreaView
} from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CategoryButton from "../../components/CategoryButton";
import MyOrderFlatlist from "./ProfileComponents/MyOrderFlatlist";

class MyOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: true
    };
  }

  tapOnProfile = () => {
    this.props.navigation.navigate("Profile");
  };

  tapOnMyOrders = () => {
    this.props.navigation.navigate("MyOrders");
  };

  tapOnFavoruties = () => {
    this.props.navigation.navigate("Favourites");
  };

  tapOnSavedCards = () => {
    this.props.navigation.navigate("SavedCards");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.container}
          scrollEnabled={true}
          enableOnAndroid={true}
        >
          {/* ACCOUNT DETAILS SCROLLBAR START*/}
          <View style={styles.catogeryContainer}>
            <ScrollView
              directionalLockEnabled={true}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <Text
                style={[
                  styles.catogeryContainerTitle,
                  { paddingTop: verticalScale(5) }
                ]}
              >
                ACCOUNT DETAILS
              </Text>
              <CategoryButton
                onPress={this.tapOnProfile}
                style={{ backgroundColor: colors.inactivegreybutton }}
              >
                <Text style={styles.catogeryContainerText}>PROFILE</Text>
              </CategoryButton>
              <CategoryButton onPress={this.tapOnMyOrders}>
                <Text style={styles.catogeryContainerText}>MY ORDERS</Text>
              </CategoryButton>
              <CategoryButton
                style={{ backgroundColor: colors.inactivegreybutton }}
                onPress={this.tapOnFavoruties}
              >
                <Text style={styles.catogeryContainerText}>FAVOURITES</Text>
              </CategoryButton>
              <CategoryButton
                style={{ backgroundColor: colors.inactivegreybutton }}
                onPress={this.tapOnSavedCards}
              >
                <Text style={styles.catogeryContainerText}>SAVED CARDS</Text>
              </CategoryButton>
              <CategoryButton
                style={{ backgroundColor: colors.inactivegreybutton }}
              >
                <Text style={styles.catogeryContainerText}>SETTINGS</Text>
              </CategoryButton>
            </ScrollView>
          </View>
          {/* ACCOUNT DETAILS SCROLLBAR END*/}

          {/* FLATLIST TO DISPLAY ORDERS START*/}
          <MyOrderFlatlist />
          {/* FLATLIST TO DISPLAY ORDERS END*/}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
export default MyOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  catogeryContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    height: verticalScale(60),
    padding: scale(10),
    backgroundColor: colors.whitetext,
    borderBottomWidth: scale(1.5),
    borderBottomColor: colors.greytext
  },
  catogeryContainerTitle: {
    color: colors.greytext,
    fontSize: scale(12),
    fontWeight: "bold"
  },
  catogeryContainerText: {
    color: colors.whitetext,
    fontSize: scale(10),
    fontWeight: "bold"
  },
  detailsbutton: {
    backgroundColor: colors.bgblue,
    borderColor: colors.bgblue,
    height: verticalScale(42),
    width: moderateScale(105),
    borderRadius: scale(25)
  },
  detailsbuttontext: {
    fontSize: scale(12),
    color: colors.whitetext,
    fontWeight: "700"
  }
});
