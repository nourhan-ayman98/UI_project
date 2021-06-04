import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, ImageBackground, StatusBar, Alert } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animated from 'react-native-animatable';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';


class Edit_Profile extends Component {
    state = {
        data: {
            email: '',
            check_textInputChange: false,
        },
        data2: {
            password: '',
        },
        data3: {
            confirm_password: '',
        },
        data4: {
            secureTextEntry: true,
        },
        data5: {
            confirm_secureTextEntry: true,
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
                password: val,
            }

        })
    }
    handlePassChange_Confirm = (val) => {
        this.setState({
            data3: {
                confirm_password: val,
            },

        })
    }
    updateSecureTextEntry = () => {
        this.setState({
            data4: {
                secureTextEntry: !this.state.data4.secureTextEntry
            }
        })
    }
    updateSecureTextEntry_confirm = () => {
        this.setState({
            data5: {
                confirm_secureTextEntry: !this.state.data5.confirm_secureTextEntry,
            }
        })
    }
    check_password(val1, val) {
        if (val1 === val) {

            return true;
        }
        else {
            return false;
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>
                <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                    <View style={styles.header}>
                        <Text style={[styles.text_header, { marginTop: 35 }]}> My Profile </Text>
                    </View>
                    <View style={styles.footer}>
                        {/* <Text style={styles.text_footer}> Email </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="email"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Edit Your Email"
                                placeholderTextColor="#D3D3D3"
                                style={styles.textInput}
                                autoCapitalize='none'

                            />
                        </View>
                        <Text style={styles.text_footer}> Second Name </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder=" Edit Your Second Name"
                                placeholderTextColor="#D3D3D3"
                                style={styles.textInput}
                                autoCapitalize='none'

                            />
                        </View> */}
                        <Text style={styles.text_footer}> Email  </Text>
                        <View style={styles.action}>
                            <Fontisto
                                name="email"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Edit Your Email"
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
                                placeholder="Edit Your Password"
                                placeholderTextColor="#D3D3D3"
                                secureTextEntry={this.state.data4.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val) => this.handlePassChange(val)}
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
                        <Text style={[styles.text_footer, { marginTop: 35 }]}> Confirm New Password </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="lock"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Confirm Password"
                                placeholderTextColor="#D3D3D3"
                                secureTextEntry={this.state.data5.confirm_secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize='none'
                                onChangeText={(val) => this.handlePassChange_Confirm(val)}
                            />
                            <TouchableOpacity
                                onPress={this.updateSecureTextEntry_confirm}>
                                <Feather
                                    name="eye-off"
                                    color="#1E90FF"
                                    size={20}
                                />
                            </TouchableOpacity>

                        </View>
                        {/* <Text style={styles.text_footer}> Phone  </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="phone-square"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Edit Your Phone"
                                placeholderTextColor="#D3D3D3"
                                style={styles.textInput}
                                autoCapitalize='none'
                               
                            />
                        </View>
                        <Text style={styles.text_footer}> Address </Text>
                        <View style={styles.action}>
                            <EvilIcons
                                name="location"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Edit Your Address"
                                placeholderTextColor="#D3D3D3"
                                style={styles.textInput}
                                autoCapitalize='none'
                               
                            />
                        </View> */}
                        <View style={styles.button}>
                            {this.check_password(this.state.data2.password, this.state.data3.confirm_password) ?
                                <TouchableOpacity
                                    onPress={() => navigate("Congratulations")}>
                                    <LinearGradient
                                        colors={['#87CEFA', '#1E90FF']}
                                        style={styles.signIn}
                                    >
                                        <Text style={styles.textSign}>Save</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                : null}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}


export default Edit_Profile;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#800080',
        flexDirection: 'column'
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
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
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text_footer: {
        color: '#fff',
        fontSize: 18,
        marginTop: 30,
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
        // paddingRight: 20,
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
