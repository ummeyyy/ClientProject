import * as React from 'react';
import { View, Dimensions, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import SwipeRender from "react-native-swipe-render";

const entireScreenWidth = Dimensions.get('window').width;

class Swiper extends React.Component {
    render() {
        return (
            <View style={styles.swiperStyle}>
                <SwipeRender
                    index={1} // default 0
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
                        { uri: "https://luehangs.site/pic-chat-app-images/pexels-photo-853168.jpeg" },
                        { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg" },
                        { uri: "https://luehangs.site/pic-chat-app-images/pexels-photo-853168.jpeg" },
                        { uri: "https://luehangs.site/pic-chat-app-images/photo-755745.jpeg" },
                        { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg" },
                        { uri: "https://luehangs.site/pic-chat-app-images/pexels-photo-853168.jpeg" },
                        { uri: "https://luehangs.site/pic-chat-app-images/photo-799443.jpeg" },
                        { uri: "https://luehangs.site/pic-chat-app-images/photo-755745.jpeg" },
                    ]}

                    renderItem={({ item, index }) => {
                        return (
                            <View key={"SwipeRender-slide#" + index}
                                style={{ flex: 1 }}>
                                <Image
                                    // resizeMode="contain"
                                    source={{ uri: item.uri }}
                                    style={{ height: 244.36, width: '100%' }} />
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
        height: 6.06,
        width: 32.44,
        backgroundColor: '#C4C2C2',
        paddingRight: 11.6,
        borderRadius: 5,
    },
    activeDot: {
        height: 6.06,
        width: 32.44,
        backgroundColor: '#875099',
        paddingRight: 11.6,
        borderRadius: 5,
    },
    paginationContainer: {
        position: "absolute",
        bottom: -20.72,
        marginLeft: -40,
        flexDirection: "row",
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
});