import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { AntDesign, FontAwesome } from '@expo/vector-icons';

import Swiper from './components/Swiper';
import { CButton } from './components/CButton';
import FlatListComponent from './components/FlatListComponent';

const products = [
    { name: '4F FLYERS', code: "D01", price: 100, sale: 20, id: '1', description1line: "(ONE DESCRIPTION LINE - DYNAMIC)", image: require('./assets/Asset 1.png') },
    { name: '2D DRAWING', code: "D02", price: 250, sale: 5, rating: 3.3, description1line: "(ONE DESCRIPTION LINE - DYNAMIC)", id: '2', image: require('./assets/restaurant.jpg') },
    { name: '3D DRAWING', code: "D03", price: 100, sale: 35, rating: 2.3, description1line: "(ONE DESCRIPTION LINE - DYNAMIC)", id: '3', image: require('./assets/home.jpg') },
    { name: 'INFOGRAPHICS', code: "D04", price: 250, rating: 4.2, description1line: "(ONE DESCRIPTION LINE - DYNAMIC)", id: '4', image: require('./assets/restaurant.jpg') },
];

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            originalPrice: 0,
            salePrice: 0,
            totalPrice: 0,
            count: 0
        }
    }

    handleIncerement = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    handleDecrement = () => {
        if (this.state.count < 1) {
            this.setState({
                count: 0
            });
        } else {
            this.setState({
                count: this.state.count - 1
            });
        }
    }

    handlesaleprice = () => {
        this.setState({
            salePrice: (products.price * (products.sale) / 100)
        })
    }

    handletotalprice = () => {
        this.setState({
            totalPrice: (products.price * count)
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {/* SWIPER HERE */}
                    <View style={{ flex: 1 }}>
                        <Swiper />
                        <TouchableOpacity style={styles.favwrapper}>
                            <FontAwesome name='heart' color='#D60505' size="23" />
                        </TouchableOpacity>
                    </View>


                    <View>
                        {/* Product Details & Description */}

                        <View style={styles.productContainer}>
                            <TouchableOpacity style={styles.ratebuttonContainer}>
                                <Text style={styles.ratebuttontext}>RATE US</Text>
                            </TouchableOpacity >
                            <TouchableOpacity style={styles.reviewbuttonContainer}>
                                <Text style={styles.reviewbuttontext}>WRITE REVIEW></Text>
                            </TouchableOpacity >
                        </View>

                        {/* Price Tab */}
                        <View style={styles.pricetabWrapper}>
                            <Text style={styles.originalpricetabtext}>AED 100{products.price}</Text>
                            <Text style={styles.pricetabtext}>AED {this.props.salePrice}</Text>
                            <TouchableOpacity
                                onPress={this.handleIncerement}
                                style={styles.plusiconwrapper}>
                                <FontAwesome name='plus' color='#F9CF2F' size="23" />
                            </TouchableOpacity>
                            <View style={styles.countwrapper}>
                                <Text style={styles.counttext}>{this.props.count}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={this.handleDecrement}
                                style={styles.minusiconwrapper}>
                                <FontAwesome name='minus' color='#F9CF2F' size="23" />
                            </TouchableOpacity>
                            <Text style={styles.onelinetext}>(One line) {products.description1line}</Text>
                        </View>
                    </View>


                    {/* Tab View Here */}

                    {/* RELATED PRODUCTS HERE */}
                    <View style={{ marginTop: hp('7%') }}>
                        <CButton style={{ marginTop: hp('4%') }} />
                        <Text style={styles.relatedProductsTitle}>RELATED PRODUCTS</Text>
                    </View>
                    <View style={{ marginTop: hp('3%') }}>
                        <FlatListComponent />
                    </View>

                    {/* Total Price Tab */}
                    <View style={styles.totalpricetabWrapper}>
                        <Text style={styles.tpricetabtext}>AED {this.props.totalPrice}</Text>
                        <Text style={styles.onelinetext}>(One line) {products.description1line}</Text>
                        <View style={styles.cartbuttonwrapper}>
                            <TouchableOpacity>
                                <Text style={styles.cartbuttontext}>VIEW CART</Text>
                                <AntDesign name='rightcircle' color='white' size="24" style={{ top: wp('-6%'), right: hp('-10%') }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    productContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: wp('5%'),
        paddingVertical: hp('10%'),
    },
    favwrapper: {
        width: wp('11%'),
        height: hp('6.2%'),
        position: 'absolute',
        top: wp('44'),
        right: wp('3'),
        backgroundColor: 'white',
        borderWidth: 2.5,
        borderColor: '#21C7D8',
        borderRadius: wp('7%'),
        paddingHorizontal: wp('1%'),
        paddingVertical: hp('1.2%'),
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    plusiconwrapper: {
        width: wp('8.2%'),
        height: hp('5.8%'),
        position: 'absolute',
        backgroundColor: 'white',
        paddingHorizontal: wp('0.8%'),
        paddingVertical: hp('0.9%'),
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        right: wp('5%'),
        top: wp('6%'),
    },
    minusiconwrapper: {
        width: wp('8.2%'),
        height: hp('5.8%'),
        position: 'absolute',
        backgroundColor: 'white',
        paddingHorizontal: wp('0.8%'),
        paddingVertical: hp('0.9%'),
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        right: wp('25%'),
        top: wp('6%'),
    },
    countwrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('12%'),
        height: hp('5.8%'),
        position: 'absolute',
        backgroundColor: '#F9CF2F',
        borderWidth: 3,
        borderColor: "white",
        right: wp('13%'),
        top: wp('6%'),
        paddingHorizontal: wp('0.8%'),
    },
    counttext: {
        fontFamily: "Arial",
        fontSize: hp('3.5%'),
        fontWeight: "bold",
        color: 'white',
        bottom: wp('0.3%'),
    },
    relatedProductsTitle: {
        fontFamily: "Arial",
        fontSize: hp('3%'),
        fontWeight: "bold",
        color: '#F9CF2F',
        paddingHorizontal: wp('5%'),
    },
    textWrapper: {
        // height: hp('15%'), // 70% of height device screen
        // width: wp('100%'),   // 80% of width device screen
        padding: wp('5%'),
    },
    pricetabWrapper: {
        marginTop: wp('8%'),
        height: hp('13%'), // 70% of height device screen
        width: wp('100%'),   // 80% of width device screen
        backgroundColor: '#F9CF2F',
        paddingVertical: hp('1%')
    },
    totalpricetabWrapper: {
        marginTop: wp('8%'),
        height: hp('13%'), // 70% of height device screen
        width: wp('100%'),   // 80% of width device screen
        backgroundColor: '#21C7D8',
        paddingVertical: hp('1%')
    },
    cartbuttonwrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        right: wp('5%'),
        top: wp('7%'),
        width: wp('39%'),
        height: hp('6%'),
        position: 'absolute',
        backgroundColor: '#21C7D8',
        paddingHorizontal: wp('0.8%'),
        paddingVertical: hp('0.9%'),
        borderWidth: 3,
        borderColor: "white",
    },
    cartbuttontext: {
        fontFamily: "Arial",
        fontSize: hp('2.2%'),
        fontWeight: "bold",
        color: 'white',
        marginLeft: wp('-8%'),
        marginTop: hp('2%'),

    },
    originalpricetabtext: {
        fontFamily: "Arial",
        fontSize: hp('2.5%'),
        fontWeight: "200",
        textDecorationLine: 'line-through',
        color: 'white',
        paddingHorizontal: wp('6%'),
    },
    pricetabtext: {
        fontFamily: "Arial",
        fontSize: hp('4%'),
        fontWeight: "bold",
        color: 'white',
        paddingHorizontal: wp('5%'),
    },
    tpricetabtext: {
        fontFamily: "Arial",
        fontSize: hp('6%'),
        fontWeight: "bold",
        color: 'white',
        paddingHorizontal: wp('5%'),
    },
    onelinetext: {
        fontFamily: "Arial",
        fontSize: hp('2%'),
        fontWeight: "100",
        color: 'white',
        paddingHorizontal: wp('5%'),
    },
    ratebuttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('26%'),
        height: hp('6%'),
        position: 'absolute',
        backgroundColor: '#F9CF2F',
    },
    ratebuttontext: {
        fontFamily: "Arial",
        fontSize: hp('2%'),
        fontWeight: "bold",
        color: 'white',
        paddingHorizontal: wp('3%'),
    },
    reviewbuttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('26%'),
        height: hp('6%'),
        position: 'absolute',
        backgroundColor: '#7DA805',

    },
    reviewbuttontext: {
        fontFamily: "Arial",
        fontSize: hp('2%'),
        fontWeight: "bold",
        color: 'white',
        paddingHorizontal: wp('3%'),

    },

});