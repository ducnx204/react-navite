import { Text, StyleSheet, View, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { Component } from 'react'
import Card from '../component/ui/Card';
import { connect } from 'react-redux';
import { register } from '../store/actions/authAction';
import { Ionicons } from '@expo/vector-icons';

class RegisterScreen extends Component {
    state = {
        email: "",
        password: "",

        error: '',
        isLoading: false,
    }

    inputChangedHander = (name, value) => {
        this.setState({ ...this.state, [name]: value });
    };

    // sử dụng cơ chế đồng bộ async - await. chờ để đăng nhập xong rồi mới vào Blog
    registerHandler = async () => {
        const { navigation, register } = this.props;
        const { email, password } = this.state;

        try {
            this.setState({ ...this.state, isLoading: true });
            await register(email, password);

            if (this.state.email.length == 0 || this.state.password.length == 0) {
                this.setState({
                    ...this.state, isLoading: false,
                    error: "Không được để trống email hoặc mất khẩu"
                });
            } else {
                this.setState({ ...this.state, isLoading: false });
                Alert.alert("Thông báo", "Đăng ký thành công", [{ text: "OK" }]);
                navigation.navigate('LoginScreen');
            }
        } catch (error) {
            this.setState({
                ...this.state, isLoading: false,
                error: 'Error: ' + error.message
            });
        };
    };
    render() {
        return (
            <View style={styles.container}>
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

                    {this.state.isLoading ? (
                        <ActivityIndicator size="large" color="blue"></ActivityIndicator>
                    ) : (
                        <TouchableOpacity style={styles.button} onPress={this.registerHandler}>
                            <Text style={styles.btn}>Đăng ký</Text>
                        </TouchableOpacity>
                    )}

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

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    register: (email, password) => dispatch(register(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        alignContent: "center",
        width: "80%"
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