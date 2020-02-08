import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Image
} from "react-native";

class Password extends Component {
  constructor(props) {
    super(props);

    this._makeYourEffectHere = this._makeYourEffectHere.bind(this);

    this.state = {
      showPassword: false,
      image: 'require("../../assets/eye-open.png")'
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this._makeYourEffectHere}
        >
          <Text>button</Text>
          <Image style={styles.image} source={this.state.image}></Image>
        </TouchableOpacity>
        <TextInput
          password={this.state.showPassword}
          style={styles.input}
          value="abc"
        />
      </View>
    );
  }

  _makeYourEffectHere() {
    var png = this.state.showPassword
      ? 'require("../../assets/eye-open.png")'
      : 'require("../../assets/eye-close.png")';
    this.setState({ showPassword: !this.state.showPassword, image: png });
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    width: Dimensions.get("window").width * 0.94,
    height: 40,
    backgroundColor: "#3b5998",
    marginTop: Dimensions.get("window").width * 0.03,
    justifyContent: "center",
    borderRadius: Dimensions.get("window").width * 0.012
  },
  image: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 7,
    bottom: 7
  },
  input: {
    width: Dimensions.get("window").width * 0.94,
    height: 30
  }
});

module.exports = Password;
