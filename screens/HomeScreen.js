import React, { useState } from 'react';
import {
    StyleSheet, Image, Dimensions, Text, View,
    SafeAreaView, TouchableOpacity, ScrollView
} from 'react-native';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Swiper from '../components/Swiper';
import CButton from '../components/CButton';
import FlatListComponent from '../components/FlatListComponent';
import CardsCategory from '../components/CardsCategory';
import PromotionCard from '../components/PromotionCard';

// const entireScreenWidth = Dimensions.get('window').width;


export default class HomeScreen extends React.Component {
    render() {
        return (
            // HEADER
            <View style={{ flex: 1 }}>
                <SafeAreaView />
                {/* <View style={{ height: 30, backgroundColor: 'black', borderBottomWidth: 0.25, borderTopColor: '#E9E9E9' }} /> */}

                {/* BODY */}
                <ScrollView>
                    <View style={{ flex: 1 }}>

                        <Swiper />
                        <TouchableOpacity>
                            <Image source={require('../assets/icon-layout.png')} style={{
                                width: 30, height: 30,
                                position: 'absolute', top: 3, right: 15,
                            }} />
                        </TouchableOpacity>



                        <View style={{ marginTop: 55 }}>
                            <CButton />
                            <Text style={styles.categoryTitle}>BRANDING DESIGN</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <FlatListComponent />
                        </View>


                        <View style={{ marginTop: 35 }}>
                            <CButton />
                            <Text style={styles.categoryTitle}>WEBSITE DESIGN</Text>
                        </View>
                        <View style={{ marginTop: 15, marginLeft: -5 }}>
                            <FlatListComponent />
                        </View>

                        {/* CARD CATEOGRIES HERE */}

                        <View style={styles.cardContainer}>
                            <View style={{ marginTop: 8 }}>
                                <Text style={styles.cardTitle}>BROWSE BY CATEGORIES  </Text>
                                <TouchableOpacity style={{ position: 'absolute', right: 7, top: -5 }}>
                                    <View style={styles.buttonContainer}>
                                        <Text style={styles.cbuttonText}>VIEW ALL</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <CardsCategory />
                        </View>


                        {/* PROMOTIONS HERE */}
                        <View>
                            <PromotionCard />
                        </View>


                        <View style={{ marginTop: 35 }}>
                            <CButton />
                            <Text style={styles.categoryTitle}>VIDEO ANIMATION</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <FlatListComponent />
                        </View>

                        <View style={{ marginTop: 35 }}>
                            <CButton />
                            <Text style={styles.categoryTitle}>ILLUSTRATION</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <FlatListComponent />
                        </View>

                    </View>

                </ScrollView>
                {/* FOOTER */}
                {/* <View style={{ height: 30, backgroundColor: 'red', borderTopWidth: 0.25, borderTopColor: '#E9E9E9' }} /> */}
                <SafeAreaView />
            </View >
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: "Arial",
        fontSize: 15,
        color: '#F9CF2F',
    },
    categoryTitle: {
        marginLeft: 21,
        marginTop: -8,
        fontFamily: "Arial",
        fontSize: 20,
        fontWeight: "bold",
        color: '#F9CF2F',
    },
    cardContainer: {
        backgroundColor: '#21C7D8',
        height: 415,
        width: '100%',
        marginTop: 35,
        padding: 10,
    },
    cardTitle: {
        marginLeft: 5,
        fontFamily: "Arial",
        fontSize: 16,
        fontWeight: "800",
        color: 'white',
    },
    buttonContainer: {
        flex: 2,
        width: 90,
        height: 30,
        borderStyle: "solid",
        borderColor: '#fff',
        borderRadius: 20,
        backgroundColor: 'transparent',
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    cbuttonText: {
        fontFamily: "Arial",
        fontSize: 12,
        color: '#fff',
        fontWeight: '500'
    }
})