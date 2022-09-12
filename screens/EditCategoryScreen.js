import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import Card from '../component/ui/Card';
import { connect } from 'react-redux';
import { updateCategory } from '../store/actions/categoryActions';

class EditCategoryScreen extends Component {

  state = {
    categoryId: "",
    name: "",

    error: '',
  }

  componentDidMount = () => {
    const { route, navigation, categories } = this.props;

    const { categoryId } = route.params;

    const category = categories.find(item => item.categoryId === categoryId)

    if (category) {
      this.setState({
        ...this.state,
        categoryId: "" + category.categoryId,
        name: category.name,
      });
    }
  }
  inputChangedHander = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  updateCategoryHandler = () => {
    const { updateCategory, navigation } = this.props;
    const { categoryId, name } = this.state;

    if (this.state.categoryId.length == 0 || this.state.name.length == 0) {
      this.setState({
        ...this.state, error: "Bạn phải điền đầy đủ"
      });
    } else {
      updateCategory(+categoryId, name);
      // chuyển chuỗi thành số
      // Alert.alert("Info", "New category has been inserted",
      //   [{text: "OK"}]);

      navigation.navigate("ListCategoryScreen");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.title}>Sửa Danh Mục</Text>
          <Text style={styles.label}>ID</Text>
          <TextInput style={styles.input}
            editable={false}
            value={this.state.categoryId}
            onChangeText={this.inputChangedHander.bind(this, "categoryId")}>
          </TextInput>

          <Text style={styles.label}>Tên</Text>
          <TextInput style={styles.input}
            value={this.state.name}
            onChangeText={this.inputChangedHander.bind(this, "name")}>
          </TextInput>

          <TouchableOpacity style={styles.button} onPress={this.updateCategoryHandler}>
            <Text style={styles.btn}>Cập nhật</Text>
          </TouchableOpacity>

          {!!this.state.error &&
            <View>
              <Text style={{ color: "red", alignSelf: "center" }}>{this.state.error}</Text>
            </View>}
        </Card>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  updateCategory: (categoryId, name) =>
    dispatch(updateCategory(categoryId, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCategoryScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    margin: 10,
    width: "80%"
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: 'green',
    justifyContent: 'center',
    alignSelf: "center",
    marginBottom: 30,
  },
  label: {
    marginLeft: 3,
    fontSize: 20,
    color: "darkred",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 2,
    borderColor: "darkgray",
    margin: 10, padding: 10,
    borderRadius: 10,
    height: 60,
    color: "#4c4cde",
    fontWeight: "bold",
    fontSize: 16,
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
    backgroundColor: "skyblue",

  },
  btn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
})