import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert, } from 'react-native'
import React, { Component } from 'react'
import Card from '../component/ui/Card';
import { connect } from 'react-redux';
import { insertBlog } from '../store/actions/blogActions';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

class InsertBlogScreen extends Component {
  state = {
    blogId: "",
    content: "",

    error: '',
  }

  inputChangedHander = (content, value) => {
    this.setState({ ...this.state, [content]: value });
  };

  saveBlogHandler = () => {
    const { insertBlog, navigation } = this.props;
    const { blogId, content } = this.state;

    if (this.state.blogId.length == 0 || this.state.content.length == 0) {
      this.setState({
        ...this.state, error: "Bạn phải điền đầy đủ"
      });
    } else {
      insertBlog(+blogId, content);
      navigation.navigate("ListBlogScreen");
    }
    // chuyển chuỗi thành số
    // Alert.alert("Info", "New category has been inserted",
    //   [{text: "OK"}]);

  };

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Text style={styles.title}>Thêm Bài Viết</Text>
          <Text style={styles.label}>Mã bài viết</Text>
          <TextInput style={styles.input}
            value={this.state.blogId}
            onChangeText={this.inputChangedHander.bind(this, "blogId")}>
          </TextInput>

          <Text style={styles.label}>Nội dung</Text>
          <TextInput style={{...styles.input, height: 250}}
            multiline={true}
            numberOfLines={4}
            value={this.state.content}
            onChangeText={this.inputChangedHander.bind(this, "content")}>
          </TextInput>

          <TouchableOpacity style={styles.button} onPress={this.saveBlogHandler}>
            <Text style={styles.btn}>Lưu bài viết</Text>
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


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  insertBlog: (blogId, content) =>
    dispatch(insertBlog(blogId, content)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InsertBlogScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    margin: 10,
    width: "90%",
  },
  title:{
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