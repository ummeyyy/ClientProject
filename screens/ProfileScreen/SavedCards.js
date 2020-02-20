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

import { AntDesign } from "@expo/vector-icons";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CategoryButton from "../../components/CategoryButton";
import SavedCardFlatlist from "../ProfileScreen/ProfileComponents/SavedCardFlatlist";

class SavedCards extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);

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

  tapOnAdd = () => {
    this.props.navigation.navigate("CheckoutMain");
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.container}
          scrollEnabled={true}
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
              <CategoryButton
                onPress={this.tapOnMyOrders}
                style={{ backgroundColor: colors.inactivegreybutton }}
              >
                <Text style={styles.catogeryContainerText}>MY ORDERS</Text>
              </CategoryButton>
              <CategoryButton
                style={{ backgroundColor: colors.inactivegreybutton }}
                onPress={this.tapOnFavoruties}
              >
                <Text style={styles.catogeryContainerText}>FAVOURITES</Text>
              </CategoryButton>
              <CategoryButton onPress={this.tapOnSavedCards}>
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

          {/* SAVED CARD LIST START */}
          <SavedCardFlatlist />
          {/* SAVED CARD LIST END*/}
          {/* ADD CARD START */}
          <TouchableOpacity
            style={{
              paddingVertical: verticalScale(40),
              alignItems: "center",
              justifyContent: "center"
            }}
            onPress={this.tapOnAdd}
          >
            <AntDesign
              name="pluscircle"
              color={colors.bgblue}
              size={scale(50)}
            />
            <Text style={styles.Addbuttontext}>ADD</Text>
          </TouchableOpacity>
          {/* ADD CARD  END*/}
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}
export default SavedCards;

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
  Addbutton: {
    backgroundColor: colors.bgblue,
    borderColor: colors.bgblue,
    height: verticalScale(30),
    width: moderateScale(70),
    borderRadius: scale(50)
  },
  Addbuttontext: {
    fontSize: scale(20),
    color: colors.bgblue,
    fontWeight: "600"
  }
});
