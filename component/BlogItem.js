import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { Ionicons } from '@expo/vector-icons';

export default class BlogItem extends Component {
    render() {
        const { content, blogId } = this.props;
        return (
            <View style={[this.props.style, styles.itemContainer]}>
                <View style={styles.item}>
                    <Image
                        style={styles.img}
                        source={require("../assets/images/Edit.png")}
                    ></Image>
                    <Text style={styles.content}>{blogId}. {content}</Text>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.onEditPress(blogId);
                    }}>
                        <Ionicons
                            name="md-clipboard-outline"
                            size={24} color="blue"></Ionicons>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.onDeletePress(blogId, content);
                    }}>
                        <Ionicons
                            name="md-trash-bin-outline"
                            size={24} color="red"></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: "column",
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
        alignContent: "center",
        alignItems: "center",
    },
    img: {
        width: 35,
        height: 35,
    },
    content: {
        flex:1,
        paddingLeft: 10,
        margin:3,
        fontSize: 18,
        color: "#1d1d1d",
        flexWrap: "wrap",
    },
    buttons: {
        alignSelf: "flex-end",
        flexDirection: "row",
        justifyContent: "center",
    },
    button: {
        margin: 10,
    },
})