import React, { Component } from "react";
import { StyleSheet, View, Text, Image, StatusBar } from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: false
    };
  }
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // const { userInfo } = this.props;

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    console.log("hello");
    setTimeout(() => {
      console.log("hello");
      this.props.navigation.navigate(this.state.userInfo ? "App" : "Auth");
    }, 5000);
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <View
          style={{
            paddingHorizontal: moderateScale(30),
            paddingTop: verticalScale(15)
          }}
        >
          <Text style={styles.textlight}>creative design</Text>
          <Text style={styles.textlight}>solution provider</Text>

          <View style={{ paddingTop: verticalScale(15) }}>
            <Text style={styles.textbold}>we create.</Text>
            <Text style={styles.textbold}>reinvent.</Text>
            <Text style={styles.textbold}>rediscover.</Text>
            <Text style={styles.textbold}>brands!</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bgblue
  },
  image: {
    height: verticalScale(200),
    width: moderateScale(200)
  },
  textlight: {
    fontWeight: "100",
    color: colors.whitetext,
    fontSize: scale(30)
  },
  textbold: {
    fontWeight: "700",
    color: colors.whitetext,
    fontSize: scale(22)
  }
});
