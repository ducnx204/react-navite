import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <View {...this.props} style={styles.card}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { with: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
        padding: 15,
    },
})