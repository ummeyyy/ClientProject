import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class OffersScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Offers Screen</Text>
            </View>
        );
    }
}
export default OffersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});