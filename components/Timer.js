import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import CountDown from "react-native-countdown-component";
import { moderateScale, scale, verticalScale } from "./scale";
import colors from "./assets/colors";

class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CountDown
          size={scale(32)}
          until={1000000}
          onFinish={() => alert("Finished")}
          digitStyle={{
            backgroundColor: colors.bgblue,
            borderWidth: scale(2),
            borderRadius: scale(10),
            borderColor: colors.bgblue,
            height: scale(26 * 3.6),
            width: scale(25 * 3.2),
            zIndex: scale(999),
            top: scale(22)
          }}
          digitTxtStyle={{ color: colors.whitetext }}
          timeLabelStyle={{
            color: colors.whitetext,
            fontWeight: "800",
            fontSize: scale(11)
          }}
          timeLabels={{ d: "DAYS", h: "HOURS", m: "MINUTES", s: "SECONDS" }}
        />
      </View>
    );
  }
}
export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: moderateScale(10)
  }
});
