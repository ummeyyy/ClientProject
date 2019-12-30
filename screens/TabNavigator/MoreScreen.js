import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

class MoreScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>More Screen</Text>
            </View>
        );
    }
}
export default MoreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});