import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons';

export default class CategoryItem extends Component {
    render() {
        const { name, categoryId } = this.props;
        return (
            <View style={[this.props.style, styles.itemContainer]}>
                <View style={styles.item}>
                    <Image 
                        style={styles.img} 
                        source={require("../assets/images/ic_category.jpg")}
                    ></Image>
                    <Text style={styles.name}>{categoryId}. {name}</Text>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.onEditPress(categoryId);
                    }}>
                        <Ionicons
                            name="md-clipboard-outline"
                            size={30} color="blue"></Ionicons>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.onDeletePress(categoryId, name);
                    }}>
                        <Ionicons
                            name="md-trash-bin-outline"
                            size={30} color="red"></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#ccf",
        margin: 5,
        padding: 5,
        backgroundColor: "skyblue",
    },
    item: {
        margin: 5,
        padding: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    img: {
        width:35,
        height:35,
    },
    name: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        margin: 10,
    },
})