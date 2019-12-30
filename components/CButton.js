import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class CButton extends React.Component {
    render() {
        return (

            <TouchableOpacity style={{ position: 'absolute', right: 20, top: -13 }}>
                {/* <View style={{ flex: 1, marginVertical: -10 }}> */}
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>VIEW ALL</Text>
                </View>
                {/* </View> */}
            </TouchableOpacity >


        );
    }
}
export default CButton;

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 2,
        width: 90,
        height: 30,
        borderStyle: "solid",
        borderColor: '#F9CF2F',
        borderRadius: 20,
        backgroundColor: 'transparent',
        borderWidth: 3,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontFamily: "Arial",
        fontSize: 12,
        color: '#F9CF2F',
        fontWeight: '500'
    }
});