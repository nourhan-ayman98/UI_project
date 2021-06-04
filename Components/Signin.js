
import { View, Text, TouchableOpacity, ImageBackground, TextInput, Platform, StyleSheet, StatusBar, Alert, Button } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import * as Animated from 'react-native-animatable';

class Signin extends Component {
    state = {
        data: {
            email: '',
            password: '',


        },
        data2: {
            check_textInputChange: false,
        },
        data3: {
            secureTextEntry: true,
        }
    }
    textInputChange = (val) => {
        if (val.trim().length >= 4) {
            this.setState({
                data: {
                    email: val,
                    check_textInputChange: true,
                }
            });
        } else {
            this.setState({
                data: {
                    email: val,
                    check_textInputChange: false,
                }
            });
        }
    }
    handlePassChange = (val) => {
        this.setState({
            data2: {
                password: val
            }

        })
    }
    updateSecureTextEntry = () => {
        this.setState({
            data3: {
                secureTextEntry: !this.state.data3.secureTextEntry
            }
        })
    }
    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>
                <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                    <View style={styles.header}>
                        <Text style={[styles.text_header, { marginTop: 35}]}> Welcome in Arte! </Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.text_footer}> Email  </Text>
                        <View style={styles.action}>
                            <Fontisto
                                name="email"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Email"
                                placeholderTextColor="#D3D3D3"
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val) => this.textInputChange(val)}
                            />
                            {this.state.data.check_textInputChange ?
                                <Animated.View animation="bounceIn">

                                    <Feather
                                        name="check-circle"
                                        color="#1E90FF"
                                        size={20}
                                    />
                                </Animated.View>
                                : null}

                        </View>
                        <Text style={[styles.text_footer, { marginTop: 35 }]}> Password </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="lock"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                placeholderTextColor="#D3D3D3"
                                secureTextEntry={this.state.data3.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize='none'
                            />
                            <TouchableOpacity
                                onPress={this.updateSecureTextEntry}>
                                <Feather
                                    name="eye-off"
                                    color="#1E90FF"
                                    size={20}
                                />
                            </TouchableOpacity>

                        </View>
                        

                        <View style={styles.button}>
                            <TouchableOpacity 
                                onPress={() => navigate("Admin")}>
                                <LinearGradient
                                    colors={['#87CEFA', '#1E90FF']}
                                    style={styles.signIn}
                                >
                                    <Text style={styles.textSign}>Sign In</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                        <TouchableOpacity onPress={()=>navigate("Reset Password")}>
                            <Text   style={[styles.text_forgot, {
                                        color: '#fff', 
                                    }]}
                                    >Forgot Password?</Text>
                        </TouchableOpacity>
                        </View>
                        
                    </View>
                </ImageBackground>
            </View>


        );
    }
}
export default Signin;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
       
        flexDirection: 'column'
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingBottom: 60
    },
    footer: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 40
    },
    text_forgot: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text_footer: {
        color: '#fff',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ffff',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#ffff',
    },
    button: {

        alignItems: 'center',
        marginTop: 30,
    },
    signIn: {
        width: 160,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    },
});