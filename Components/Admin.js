import { Dimensions, StyleSheet, ImageBackground, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient';


class Admin extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                   
                    <View style={styles.footer}>
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={() => navigate("Edit My Profile")} >
                                <LinearGradient
                                    colors={['#87CEFA', '#1E90FF']}
                                    style={styles.stylee}>
                                    <Text style={styles.textSign}>Edit My Profile</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity

                                style={[styles.stylee, {
                                    borderColor: '#fff',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}
                                onPress={() => navigate("View Customers")}>
                                <LinearGradient
                                    colors={['#87CEFA', '#1E90FF']}
                                    style={styles.stylee}>
                                    <Text style={styles.textSign}>View Customers </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity

                                style={[styles.stylee, {
                                    borderColor: '#fff',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}
                                onPress={() => navigate("Add Artwork")}>
                               <LinearGradient
                                    colors={['#87CEFA', '#1E90FF']}
                                    style={styles.stylee}>
                                    <Text style={styles.textSign}>Add Artworks </Text>
                                </LinearGradient>
                            </TouchableOpacity>

                        </View>
                    </View>
                </ImageBackground>
            </View>

        );
    }
}
export default Admin;

const { height } = Dimensions.get("screen");
const width = Dimensions.get("screen").width
const height_logo = height * 0.28;
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        display: 'flex',
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    button: {

        alignItems: "center",
        marginTop: 30,
        flex: 1,
        display: 'flex',

    },
    stylee: {
        width: 800,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    }
});