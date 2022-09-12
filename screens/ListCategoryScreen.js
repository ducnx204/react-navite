import React, { Component } from "react";
import { Button, StyleSheet, Text, View, FlatList, Alert, TouchableOpacity } from "react-native";
import { connect } from 'react-redux';
import CategoryItem from "../component/CategoryItem";
import { deleteCategory } from "../store/actions/categoryActions";


class ListCategoryScreen extends Component {
  goInsertCategoryHandler = () => {
    const { navigation } = this.props;

    navigation.navigate("InsertCategoryScreen");
  };

  editCategoryHandler = (categoryId) => {
    const { navigation } = this.props;

    navigation.navigate("EditCategoryScreen", { categoryId: categoryId });
  };
  deleteCategoryHandler = (categoryId, name) => {

    const { deleteCategory } = this.props;

    Alert.alert("Cảnh báo", `Bạn muốn xóa danh mục ${categoryId}. ${name}?`, [
      {
        text: "OK", onPress: () => {
          deleteCategory(+categoryId);
          // chuyển chuỗi thành số để tìm trong danh sách
        },
      },
      { text: "Không" },
    ]);
  };


  render() {
    const { categories } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          keyExtractor={(item, index) => item.categoryId}
          renderItem={(itemData) => (
            <CategoryItem
              onEditPress={this.editCategoryHandler}
              onDeletePress={this.deleteCategoryHandler}

              categoryId={itemData.item.categoryId}
              name={itemData.item.name}
            ></CategoryItem>
          )}
        // <Text style={styles.item}>{itemData.item.name}</Text>}
        ></FlatList>

        <TouchableOpacity style={styles.button} onPress={this.goInsertCategoryHandler}>
          <Text style={styles.btn}>Thêm mục mới</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



const mapStateToProps = (state) => ({
  categories: state.categories.categories,
})

const mapDispatchToProps = (dispatch) => ({
  deleteCategory: (categoryId) => dispatch(deleteCategory(categoryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListCategoryScreen)

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
