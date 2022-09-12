import { Button, StyleSheet, Text, View, FlatList, Alert, TouchableOpacity } from "react-native";
import React, { Component } from 'react'
import { connect } from 'react-redux';
import BlogItem from "../component/BlogItem";
import { deleteBlog } from "../store/actions/blogActions";


class ListBlogScreen extends Component {
    goInsertBlogHandler = () => {
        const { navigation } = this.props;

        navigation.navigate("InsertBlogScreen");
    };

    editBlogHandler = (blogId) => {
        const { navigation } = this.props;

        navigation.navigate("EditBlogScreen", { blogId: blogId });
    };
    deleteBlogHandler = (blogId, content) => {

        const { deleteBlog } = this.props;

        Alert.alert("Cảnh báo", `Bạn muốn xóa bài viết có mã ${blogId}?`, [
            {
                text: "OK", onPress: () => {
                    deleteBlog(+blogId);
                    // chuyển chuỗi thành số để tìm trong danh sách
                },
            },
            { text: "Không" },
        ]);
    };

    render() {
        const { blogs } = this.props;

        return (
            <View style={styles.container}>
                <FlatList
                    data={blogs}
                    keyExtractor={(item, index) => item.blogId}
                    renderItem={(itemData) => (
                        <BlogItem
                            onEditPress={this.editBlogHandler}
                            onDeletePress={this.deleteBlogHandler}

                            blogId={itemData.item.blogId}
                            content={itemData.item.content}
                        ></BlogItem>
                    )}
                // <Text style={styles.item}>{itemData.item.content}</Text>}
                ></FlatList>

                <TouchableOpacity style={styles.button} onPress={this.goInsertBlogHandler}>
                    <Text style={styles.btn}>Thêm bài mới</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    blogs: state.blogs.blogs,
})

const mapDispatchToProps = (dispatch) => ({
    deleteBlog: (blogId) => dispatch(deleteBlog(blogId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListBlogScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
    },
    button: {
        marginVertical: 15,
        padding: 10,
        marginHorizontal: 100,
        borderWidth: 1,
        borderColor: "darkblue",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",

    },
    btn: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },


});
