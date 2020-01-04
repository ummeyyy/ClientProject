import React from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import { Constants } from 'expo';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);

const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

const ThirdRoute = () => (
    <View style={[styles.scene, { backgroundColor: 'black' }]} />
);

class TabViewBar extends React.Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         originalPrice: 0,
    //         salePrice: 0,
    //         totalPrice: 0,
    //     }
    // }
    state = {
        index: 1,
        routes: [
            { key: 'overview', title: 'OVERVIEW' },
            { key: 'details', title: 'DETAILS' },
            { key: 'reviews', title: 'REVIEWS' },

        ],
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
                                ),
                            })
                        ),
                        0,
                        0
                    );

                    return (
                        <TouchableOpacity
                            style={styles.tabItem}
                            onPress={() => this.setState({ index: i })}>
                            <Animated.Text style={{ color }}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    _renderScene = SceneMap({
        overview: FirstRoute,
        details: SecondRoute,
        reviews: ThirdRoute,
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

export default TabViewBar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        paddingTop: 100,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: hp('20%'),
    },
});


//     render() {
//         return (
//             <TabView
//                 navigationState={this.state}
//                 renderScene={SceneMap({
//                     overview: FirstRoute,
//                     details: SecondRoute,
//                     reviews: ThirdRoute,
//                 })}
//                 onIndexChange={index => this.setState({ index })}
//                 initialLayout={{
//                     height: hp('30%'),
//                     width: Dimensions.get('window').width
//                 }}
//                 swipeEnabled={false}
//             />
//         );
//     }
// }


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     scene: {
//         height: hp('30%'),
//         width: "100%",
//         marginTop: hp('40%'),

//     },
// });