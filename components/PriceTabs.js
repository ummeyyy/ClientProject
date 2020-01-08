import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class PriceTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>componentName</Text>
            </View>
        );
    }
}
export default PriceTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});