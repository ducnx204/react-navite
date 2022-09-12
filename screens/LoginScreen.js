import { Text, StyleSheet, View, TextInput, TouchableOpacity, ActivityIndicator, Alert, Image } from 'react-native'
import React, { Component } from 'react'
import Card from '../component/ui/Card';
import { connect } from 'react-redux';
import { login } from '../store/actions/authAction';
import { Ionicons } from '@expo/vector-icons';

class LoginScreen extends Component {
    state = {
        email: "sang123@gmail.com",
        password: "123",

        error: '',
        isLoading: false,
    }

    inputChangedHander = (name, value) => {
        this.setState({ ...this.state, [name]: value });
    };

    // sử dụng cơ chế đồng bộ async - await. chờ để đăng nhập xong rồi mới vào Blog
    loginHandler = async () => {
        const { navigation, login } = this.props;
        const { email, password } = this.state;

        try {
            this.setState({ ...this.state, isLoading: true });
            await login(email, password);

            if (this.props.loginedEmail) {
                this.setState({ ...this.state, isLoading: false });
                Alert.alert("Thông báo", "Đăng nhập thành công", [{ text: "OK" }]);
                // Khi login thành công chuyển đến màn hình BlogStackNavigator
                // navigation.navigate("BlogStackNavigator");
                navigation.navigate("MyTabs");

                return;
            }
            // Nếu sai
            this.setState({
                ...this.state, isLoading: false,
                error: "Không tìm thấy email hoặc mật khẩu"
            });

        } catch (error) {
            this.setState({
                ...this.state, isLoading: false,
                error: 'Error: ' + error.message
            });
        }
    };
    gotoRegisterHandler = () => {
        const { navigation } = this.props;

        navigation.navigate("RegisterScreen");
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image style={styles.img} 
                        source={require("../assets/images/logo.png")}
                    ></Image>
                </View>
                <Card>
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputs}>
                        <Ionicons name='md-mail-outline' size={24} color="green"></Ionicons>
                    <TextInput style={styles.input}
                        value={this.state.email}
                        keyboardType="email-address"
                        onChangeText={this.inputChangedHander.bind(this, "email")}>
                    </TextInput>
                    </View>

                    <Text style={styles.label}>Mật khẩu</Text>
                    <View style={styles.inputs}>
                        <Ionicons name='md-lock-open-outline' size={24} color="green"></Ionicons>
                    <TextInput style={styles.input}
                        value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={this.inputChangedHander.bind(this, "password")}>
                    </TextInput>
                    </View>

                    <View style={styles.buttons}>
                        {this.state.isLoading ? (
                            <ActivityIndicator size="large" color="blue"></ActivityIndicator>
                        ) : (

                            <TouchableOpacity style={styles.button} onPress={this.loginHandler}>
                                <Text style={styles.btn}>Đăng nhập</Text>
                            </TouchableOpacity>
                        )}

                        <TouchableOpacity style={styles.button} onPress={this.gotoRegisterHandler}>
                            <Text style={styles.btn}>Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                    
                    {/* xác định kiểu */}
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
    loginedEmail: state.auths.loginedEmail,
});

const mapDispatchToProps = (dispatch) => ({
    login: async (email, password) => dispatch(login(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
        width: "80%",
    },
    logo:{
        width:'95%',
        height: 150,
        marginBottom: 20,
        alignItems: "center",
        alignContent: "center",
        alignSelf: "center"
    },
    img:{
        width: "98%",
        height: "80%",
    },
    label: {
        marginLeft: 3,
        fontSize: 20,
        color: "darkred",
        fontWeight: "bold",
    },
    inputs: {
        flexDirection: "row",
        alignContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "darkgray",
        margin: 15, padding: 10,
        borderRadius: 10,
        height: 60,
        // backgroundColor: "#ccc"
    },
    input: {
        marginLeft: 10,
        color: "#4c4cde",
        fontWeight: "bold",
        fontSize: 16,
        height: "100%",
        width: "85%",
        // backgroundColor: "red"
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginVertical: 15,
        marginHorizontal: 100,
    },
    button: {
        width: 150,
        margin: 5,
        padding: 10,
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