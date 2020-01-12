
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import CardView from 'react-native-rn-cardview';
import { Card } from 'react-native-shadow-cards';


// const promotions = [
//     { id: '1', image: require('../assets'), para: "AMAZING 30% OFF ON YOUR FIRST ANIMATION" },
// ];

class PromotionCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Card style={styles.cardStyle}>
                    <View style={{ flex: 2, flexDirection: "row" }}>
                        <Image source={require('../assets/promo.png')}
                            resizeMode="cover"
                            style={{ width: 150, height: 140, borderRadius: 15 }} />
                        <View style={{
                            paddingHorizontal: 5, flex: 2,
                            flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start',
                        }}>
                            <Text style={styles.promoText}>AMAZING 30% OFF ON YOUR FIRST ANIMATION</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{
                        position: 'absolute',
                        right: 10, bottom: 8
                    }}>
                        <View style={styles.promobuttonContainer}>
                            <Text style={styles.promobuttonText}> DETAILS </Text>
                        </View>
                    </TouchableOpacity >
                </Card>
            </View >
        );
    }
}
export default PromotionCard;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardStyle: {
        width: 330,
        height: 140,
        margin: 30,
        borderColor: 'white',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 11, },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
    },
    promoText: {
        fontFamily: "Arial",
        fontSize: 15,
        fontWeight: "bold",
        color: '#309D42',
    },
    promobuttonContainer: {
        width: 80,
        height: 28,
        borderStyle: "solid",
        borderRadius: 20,
        backgroundColor: '#21C7D8',
        alignItems: "center",
        justifyContent: "center"
    },
    promobuttonText: {
        fontFamily: "Arial",
        fontSize: 12,
        color: '#fff',
        fontWeight: '500'
    }
});