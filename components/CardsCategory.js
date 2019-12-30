import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


const categ = [
    { name: 'BRANDING DESIGN', id: '1', image: require('../assets/bdesign.png') },
    { name: 'ADVERTISING', id: '2', image: require('../assets/adv.jpg') },
    { name: 'WEBSITE CREATION', id: '3', image: require('../assets/webcreation.jpg') },
    { name: 'VIDEO ANIMATION', id: '4', image: require('../assets/vanimation.jpg') },
];

class CardsCategory extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                    data={categ}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={{
                            backgroundColor: "#F9CF2F", height: 90, borderRadius: 15,
                            marginBottom: 45, margin: 10, marginTop: 30,
                        }}>
                            <View style={styles.cardStyle}>
                                <ImageBackground source={item.image}
                                    style={{
                                        width: "100%", height: "100%", resizeImage: 'contain',
                                        opacity: 0.4, backgroundColor: "#F9CF2F", borderRadius: 30 / 2, overflow: "hidden",
                                        borderWidth: 0.2, borderColor: "#F9CF2F"
                                    }} />
                                <View style={styles.CardTextContainer}>
                                    <Text style={styles.CardTitle}>{item.name}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}>
                </FlatList>
            </View>
        );
    }
}
export default CardsCategory;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardStyle: {
        width: 160,
        height: 140,
        marginBottom: 20,
        backgroundColor: '#F9CF2F',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 10,
        elevation: 23,

    },
    CardTextContainer: {
        position: 'absolute',
        right: 15,
        left: 27,
        top: 60,
        bottom: 15,
        zIndex: 999,
    },
    CardTitle: {
        fontFamily: "Arial",
        fontSize: 15,
        fontWeight: "bold",
        color: '#ffffff',
    },
});