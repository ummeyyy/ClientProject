import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from "react-native";

import { moderateScale, scale, verticalScale } from "../../scale";
import colors from "../../assets/colors";

import CategoryButton from "../../components/CategoryButton";

class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          directionalLockEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={false}
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

              <CategoryButton>
                <Text style={styles.catogeryContainerText}>PROFILE</Text>
              </CategoryButton>

              <CategoryButton
                style={{ backgroundColor: colors.inactivegreybutton }}
              >
                <Text style={styles.catogeryContainerText}>MY ORDERS</Text>
              </CategoryButton>

              <CategoryButton
                style={{ backgroundColor: colors.inactivegreybutton }}
              >
                <Text style={styles.catogeryContainerText}>FAVOURITES</Text>
              </CategoryButton>

              <CategoryButton
                style={{ backgroundColor: colors.inactivegreybutton }}
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
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
  categorybuttonstyle: {
    width: moderateScale(90),
    height: verticalScale(30),
    marginLeft: moderateScale(15),
    borderColor: colors.bgyellow,
    borderRadius: scale(20),
    backgroundColor: colors.whitetext,
    borderWidth: scale(3),
    alignItems: "center",
    justifyContent: "center"
  },
  categorybuttonText: {
    fontSize: scale(11),
    color: colors.bgyellow,
    fontWeight: "500"
  }
});
