import * as React from "react";
import { View, Image, StyleSheet } from "react-native";
import SwipeRender from "react-native-swipe-render";

import { moderateScale, scale, verticalScale } from "../scale";
import colors from "../assets/colors";

class Swiper extends React.Component {
  render() {
    return (
      <View style={styles.swiperStyle}>
        <SwipeRender
          index={0} // default 0
          loop={true} // default false
          loadMinimal={true} // default false
          loadMinimalSize={2}
          enableAndroidScrollView={true} // default false
          horizontal={true} // default true
          autoplay={true}
          showsPagination={true}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}
          paginationStyle={styles.paginationContainer}
          // automaticallyAdjustContentInset={true}
          data={[
            {
              uri:
                "https://luehangs.site/pic-chat-app-images/pexels-photo-853168.jpeg"
            },
            {
              uri:
                "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg"
            },
            {
              uri:
                "https://luehangs.site/pic-chat-app-images/pexels-photo-853168.jpeg"
            },
            {
              uri: "https://luehangs.site/pic-chat-app-images/photo-755745.jpeg"
            },
            {
              uri:
                "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg"
            },
            {
              uri:
                "https://luehangs.site/pic-chat-app-images/pexels-photo-853168.jpeg"
            },
            {
              uri: "https://luehangs.site/pic-chat-app-images/photo-799443.jpeg"
            },
            {
              uri: "https://luehangs.site/pic-chat-app-images/photo-755745.jpeg"
            }
          ]}
          renderItem={({ item, index }) => {
            return (
              <View key={"SwipeRender-slide#" + index} style={{ flex: 1 }}>
                <Image
                  // resizeMode="contain"
                  source={{ uri: item.uri }}
                  style={{
                    height: verticalScale(250),
                    width: "100%",
                    backgroundColor: "green"
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default Swiper;

const styles = StyleSheet.create({
  swiperStyle: {
    aspectRatio: 2 / 1,
    width: "100%"
  },
  dot: {
    height: verticalScale(6.06),
    width: moderateScale(30),
    backgroundColor: colors.inactivegreybutton,
    // paddingRight: moderateScale(11),
    borderRadius: scale(5)
  },
  activeDot: {
    height: verticalScale(6.06),
    width: moderateScale(30),
    backgroundColor: colors.bgblue,
    // paddingRight: moderateScale(11),
    borderRadius: scale(5)
  },
  paginationContainer: {
    position: "absolute",
    bottom: scale(-20.72),
    marginRight: moderateScale(55),
    marginLeft: moderateScale(10),

    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "green"
  }
});
