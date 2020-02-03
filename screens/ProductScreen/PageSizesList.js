import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";

import { CheckBox } from "react-native-elements";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

const pagesize = [
  {
    desc: 'A5  5.827" x 8.268" ',
    id: "1"
  },
  {
    desc: 'A4  8.5" x 11" ',
    id: "2"
  },
  {
    desc: 'A3  11.693" x 16.535" ',
    id: "3"
  }
];

class PageSizesList extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }
  render() {
    return (
      // RENDERING PREFERENCES
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id}
        extraData={this.state.indexChecked}
        data={pagesize}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 2,
                flexDirection: "column"
              }}
            >
              {/* CHECKBOX FOR UNORDERED LIST*/}

              <CheckBox
                containerStyle={{
                  backgroundColor: colors.whitetext,
                  marginLeft: moderateScale(-11),
                  borderWidth: scale(0)
                }}
                title={item.desc}
                iconType="material-community"
                uncheckedIcon="circle-outline"
                checkedIcon="circle-slice-8"
                checkedColor={colors.bgblue}
                checked={this.state.checked}
                onPress={() =>
                  this.setState({
                    checked: !this.state.checked,
                    indexChecked: item.id
                  })
                }
              />
            </View>
          </View>
        )}
      />
    );
  }
}
export default PageSizesList;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
