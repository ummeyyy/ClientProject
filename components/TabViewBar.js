import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Text,
  Animated
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { moderateScale, scale, verticalScale } from "../scale";
import colors from "../assets/colors";

const overview = () => (
  <View
    style={[
      styles.scene,
      { backgroundColor: "transparrent", padding: scale(10) }
    ]}
  >
    <Text style={styles.detailsText}>
      The Application is amazing, its easy to navigate and with such a
      comfortable UI, its easy to get comfortable to.
    </Text>
    <Text style={[styles.detailsTextLight, { paddingTop: scale(12) }]}>
      The overview will comer here in a very stylish and sleek way. Overview
      will comer here in a very stylish and sleek way. Overview will comer here
      in a very stylish and sleek way. Overview will comer here in a very
      stylish and sleek way. Overview will comer here in a very stylish and
      sleek way.
    </Text>
  </View>
);
const details = () => (
  <View
    style={[
      styles.scene,
      { backgroundColor: "transparrent", padding: scale(10) }
    ]}
  >
    <Text style={styles.detailsText}>
      Normal Description will comer here in a very stylish and sleek way. It can
      be in bullet points, BOLD, ITALIC, UNDERLINE.
    </Text>
    <Text style={[styles.detailsTextLight, { paddingTop: scale(12) }]}>
      LIGHTER FONT - Description will comer here in a very stylish and sleek
      way. Description will comer here in a very stylish and sleek way.
      Description will comer here in a very stylish and sleek way. Description
      will comer here in a very stylish and sleek way. Description will comer
      here in a very stylish and sleek way.
    </Text>
  </View>
);
const reviews = () => (
  <View
    style={[
      styles.scene,
      { backgroundColor: "transparrent", padding: scale(10) }
    ]}
  >
    <Text style={styles.reviewText}>
      "The Application is amazing, its easy to navigate and with such a
      comfortable UI, its easy to get comfortable to."
    </Text>
    <Text style={[styles.reviewText, { padding: scale(4) }]}> - Username</Text>

    <Text style={[styles.reviewText, { paddingTop: scale(12) }]}>
      "The Application is amazing, its easy to navigate and with such a
      comfortable UI, its easy to get comfortable to."
    </Text>
    <Text style={[styles.reviewText, { padding: scale(4) }]}> - Username</Text>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

//COMPLEX
const activeBg = "#F9CF2F";
const normalBg = "#fff";
const activeText = "#fff";
const normalText = "#5D5D5D";
const headerBg = "#282f3f";

export default class TabViewBar extends React.Component {
  state = {
    index: 1,
    routes: [
      { key: "overview", title: "OVERVIEW" },
      { key: "details", title: "DETAILS" },
      { key: "reviews", title: "REVIEWS" }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            overview: overview,
            details: details,
            reviews: reviews
          })}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{
            width: Dimensions.get("window").width - moderateScale(45)
          }}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{
                backgroundColor: colors.bgyellow,
                height: verticalScale(50),
                width: moderateScale(105)
              }}
              activeColor={colors.whitetext}
              inactiveColor={colors.greytext}
              bounces={false}
              tabStyle={{
                backgroundColor: colors.whitetext,
                height: verticalScale(50)
              }}
              style={{
                backgroundColor: colors.bgyellow,
                borderColor: colors.blacktext,
                borderBottomWidth: scale(1.25)
              }}
              renderLabel={({ route, focused, color }) => (
                <View>
                  <Text
                    style={
                      route.key ===
                      props.navigationState.routes[this.state.index].key
                        ? {
                            color: "#fff",
                            backgroundColor: activeBg,
                            height: verticalScale(50),
                            width: moderateScale(115),
                            fontWeight: "800",
                            fontSize: scale(12),
                            paddingVertical: verticalScale(15),
                            paddingHorizontal: moderateScale(20)
                          }
                        : {
                            color: "#5D5D5D",
                            fontWeight: "800",
                            fontSize: scale(12)
                          }
                    }
                  >
                    {route.title}
                  </Text>
                </View>
              )}
              getLabelText={({ route: { title } }) => title}
            />
          )}
          onIndexChange={index => this.setState({ index })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    marginHorizontal: moderateScale(16)
  },
  scene: {
    flex: 1
  },
  reviewText: {
    fontSize: scale(12),
    fontWeight: "500",
    color: colors.blacktext
  },
  detailsText: {
    fontSize: scale(12),
    fontWeight: "400",
    color: colors.blacktext
  },
  detailsTextLight: {
    fontSize: scale(12),
    fontWeight: "300",
    color: colors.blacktext
  }
});
