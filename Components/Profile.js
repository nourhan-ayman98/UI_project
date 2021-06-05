import { Dimensions, StyleSheet, Text,TextInput,View, StatusBar, ImageBackground } from 'react-native';
import React, { Component } from 'react';
import { Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animated from 'react-native-animatable';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Avatar} from 'react-native-paper';

class ProfileScreen extends Component {
    render() {
        return (
            <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                <View style={styles.header}>
                    <Avatar.Image
                        source={
                            require('../Images/businesswoman-character-avatar-icon-vector-12800169.jpg')
                        }
                        size={200}
                    />
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text_footer}> First Name </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#000"
                                size={20}

                            />
                            <TextInput
                                placeholder="Nourhan"
                                placeholderTextColor="#000"
                                style={styles.textInput}
                                autoCapitalize='none'
                                
                             
                            />
                        </View>
                        <Text style={styles.text_footer}> Second Name </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#000"
                                size={20}
                            />
                            <TextInput
                                placeholder="Ayman"
                                placeholderTextColor="#000"
                                style={styles.textInput}
                                autoCapitalize='none'
                            />
                        </View>
                        <Text style={styles.text_footer}> Email  </Text>
                        <View style={styles.action}>
                            <Fontisto
                                name="email"
                                color="#000"
                                size={20}
                            />
                            <TextInput
                                placeholder="NourhanAyman@yahoo.com"
                                placeholderTextColor="#000"
                                style={styles.textInput}
                                autoCapitalize='none'
                              
                            />

                        </View>
                        <Text style={styles.text_footer}> Phone  </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="phone-square"
                                color="#000"
                                size={20}
                            />
                            <TextInput
                                placeholder="01008589306"
                                placeholderTextColor="#000"
                                style={styles.textInput}
                                autoCapitalize='none'
                            />
                        </View>
                        <Text style={styles.text_footer}> Address </Text>
                        <View style={styles.action}>
                            <EvilIcons
                                name="location"
                                color="#000"
                                size={20}
                            />
                            <TextInput
                                placeholder="1-Ghaba Street -Roxy"
                                placeholderTextColor="#000"
                                style={styles.textInput}
                                autoCapitalize='none'
                            />
                        </View>
                    </View>
            </ImageBackground>
        )
    }
}


export default ProfileScreen;
const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#694fad',
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        paddingVertical: 100,
        paddingHorizontal: 60,
       
    },
    ProfilePic: {
        width: height_logo,
        height: height_logo
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text_header: {
        color: '#0000',
        fontWeight: 'bold',
        fontSize: 40
    },
    text_footer: {
        color: '#0000',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop:30,
        color:"#1E90FF"
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#0000',
        borderColor:"#1E90FF",
        fontSize:18
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
        color: '#0000',
        fontWeight: 'bold',
    },
});
