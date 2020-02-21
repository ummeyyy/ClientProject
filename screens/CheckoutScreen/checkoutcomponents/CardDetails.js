import * as React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import CategoryButton from "../../../components/CategoryButton";
import VisaMasterCard from "../checkoutcomponents/VisaMasterCard";
import SavedCardFlatlist from "../../ProfileScreen/ProfileComponents/SavedCardFlatlist";
// import SavedCard from "../checkoutcomponents/SavedCard";
import NewCard from "../checkoutcomponents/NewCard";

import { withNavigation } from "react-navigation";
import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

import Animated from "react-native-reanimated";

const FirstRoute = () => {
  return (
    <View style={styles.container}>
      {/* VISA/MASTER START */}
      <View>
        <VisaMasterCard></VisaMasterCard>
      </View>
      {/* VISA/MASTER END */}

      {/* ENTER NEW CARD DETAILS START*/}
      <View
        style={{
          flex: 1,
          // paddingHorizontal: verticalScale(20),
          alignItems: "center",
          justifyContent: "center",
          marginTop: verticalScale(-20)
        }}
      >
        <NewCard />
      </View>
      {/* ENTER NEW CARD DETAILS END*/}

      <View
        style={{
          flex: 0.5,
          justifyContent: "center",
          paddingVertical: verticalScale(40),
          paddingHorizontal: verticalScale(35)
        }}
      >
        {/* SAVE CARD AND PROCEED BUTTON START*/}
        <CategoryButton
          style={styles.buttonContainer}
          // onPress={() => {
          //   this.props.jumpTo("second");
          // }}
        >
          <Text style={styles.ButtonText}>SAVE CARD AND PROCEED</Text>
        </CategoryButton>
        {/* SAVE CARD AND PROCEED BUTTON END*/}
      </View>
    </View>
  );
};

const SecondRoute = () => {
  //   onButtonPress = () => {
  //     this.props.jumpTo("second");
  //   };

  return (
    <View style={[styles.container, { paddingVertical: verticalScale(5) }]}>
      {/* SAVED CARD DETAILS START */}
      <View
        style={{
          flex: 1
        }}
      >
        <SavedCardFlatlist />
      </View>

      <View
        style={{
          flex: 0.5,
          justifyContent: "center",
          paddingVertical: verticalScale(10),
          paddingHorizontal: verticalScale(35)
        }}
      >
        {/* PROCEED TO CHECK OUT BUTTON START*/}
        <CategoryButton style={styles.buttonContainer}>
          <Text style={styles.ButtonText}>PROCEED TO CHECK OUT</Text>
        </CategoryButton>
        {/* PROCEED TO CHECK OUT BUTTON END*/}
      </View>
    </View>
  );
};

class CardDetails extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "first", title: "NEW CARD" },
      { key: "second", title: "SAVED CARD" }
    ]
  };

  handleChange = () => {
    this.props.navigation.navigate("CheckoutCard");
  };

  handleOnEdit = () => {
    this.props.navigation.navigate("ViewCart");
  };

  handleOrderNow = () => {
    this.props.navigation.navigate("OrderNow");
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                )
              })
            ),
            0,
            0
          );

          return (
            <TouchableOpacity
              style={
                route.key === props.navigationState.routes[this.state.index].key
                  ? styles.activetabItem
                  : styles.notactivetabItem
              }
              onPress={() => this.setState({ index: i })}
            >
              <Text
                style={{
                  color: colors.whitetext,
                  fontSize: scale(14),
                  fontWeight: "600"
                }}
              >
                {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

export default withNavigation(CardDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabBar: {
    flexDirection: "row",
    padding: scale(20),
    justifyContent: "space-evenly"
  },
  activetabItem: {
    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(140),
    height: verticalScale(40),
    backgroundColor: colors.bgblue,
    borderRadius: scale(30)
  },
  notactivetabItem: {
    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(140),
    height: verticalScale(40),
    backgroundColor: colors.greytext,
    borderRadius: scale(30)
  },
  // NEXT SECTION STYLE
  buttonContainer: {
    width: moderateScale(280),
    height: verticalScale(50),
    borderRadius: moderateScale(25),
    backgroundColor: colors.bgyellow
  },
  ButtonText: {
    color: colors.whitetext,
    fontSize: scale(15),
    fontWeight: "700"
  }
});
