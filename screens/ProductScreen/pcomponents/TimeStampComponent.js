import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { moderateScale, scale, verticalScale } from "../../../scale";
import colors from "../../../assets/colors";

import CategoryButton from "../../../components/CategoryButton";

const defaultValue = colors.inactivegreybutton;
const changeValue = colors.bgblue;

class TimeStampComponent extends Component {
  constructor(props) {
    super(props);

    this.toggleSwitch = this.toggleSwitch.bind(this);

    this.state = {
      notactive: true
    };
  }

  toggleSwitch() {
    this.setState({
      notactive: !this.state.notactive
    });
  }

  render() {
    return (
      <CategoryButton
        style={[
          this.state.notactive
            ? styles.normalButtonStyle
            : styles.selectedButtonStyle
        ]}
        onPress={this.toggleSwitch}
      >
        <View
          style={{
            flex: 0.2,
            paddingLeft: moderateScale(10),
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Image
            source={require("../../../assets/clock-icon.png")}
            style={{
              height: verticalScale(22),
              width: moderateScale(20)
            }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            flex: 1.8,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={styles.timestampText}>{this.props.time}</Text>
        </View>
      </CategoryButton>
    );
  }
}
export default TimeStampComponent;

const styles = StyleSheet.create({
  normalButtonStyle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.inactivegreybutton,
    height: verticalScale(45),
    width: moderateScale(160),
    borderRadius: scale(6)
  },
  selectedButtonStyle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.bgblue,
    height: verticalScale(45),
    width: moderateScale(160),
    borderRadius: scale(6)
  },
  timestampText: {
    fontSize: scale(10),
    fontWeight: "600",
    color: colors.whitetext
  }
});
