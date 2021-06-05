import React, { Component } from 'react';
import { Dimensions, StyleSheet, TextInput, ImageBackground, Platform, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { fonts } from 'react-native-elements/dist/config';
import { add } from 'react-native-reanimated';



class MoreDetails extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Card>
                    <Card.Cover resizeMode="contain" style={{ height: 500 }} source={require("../Images/Paints/190906133209-isleworth-mona-lisa-super-tease.jpg")} />
                    <Card.Content>
                        <Title style={styles.textSign}>Monalisa</Title>
                        <Paragraph>The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about,
                         the most sung about, the most parodied work of art in the world"</Paragraph>
                        <View>
                            <Title style={styles.textSign}>Price</Title>
                            <Title style={styles.text_footer}>80000$</Title>
                        </View>
                    </Card.Content>
                    <Card.Actions>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigate("Payment")} >
                            <LinearGradient
                                colors={['#87CEFA', '#1E90FF']}
                                style={styles.signIn}>
                                <Text style={styles.textSign2}>Purchase</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </Card.Actions>
                    <View style={styles.rowContainer}>
                        <Avatar.Image source={require('../Images/147144.png')} />
                        <Title style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginTop: 20,
                            marginLeft: 20
                        }}>Leonardo da Vinci</Title>
                    </View>

                    <View style={styles.rowContainer}>
                        <Avatar.Image source={require('../Images/businesswoman-character-avatar-icon-vector-12800169.jpg')} />
                        <TextInput
                            placeholder="Your Comment"
                            placeholderTextColor="#D3D3D3"
                            style={styles.textInput}
                            autoCapitalize='none'
                        />
                        <View style={styles.button}>
                            <TouchableOpacity
                                onPress={() => { addcomment() }}>
                                <LinearGradient
                                    colors={['#87CEFA', '#1E90FF']}
                                    style={styles.signIn2}
                                >
                                    <Text style={styles.textSign2}>Add Comment</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Card>
            </ScrollView>
        );

    }
}
export default MoreDetails;
const styles = StyleSheet.create({
    text_header: {
        fontWeight: 'bold',
        fontSize: 25
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text_footer: {
        fontSize: 18,
        marginTop: 30,
    },
    rowContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    imageStyle: {
        height: 500,
        flex: 1,
        width: null
    },
    button: {
        marginTop: 30,
        flex: 1,
        display: 'flex',
        width: 40,
        alignItems: 'center'

    },
    signIn2: {
        width: 160,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    signIn: {
        width: 800,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {

        fontWeight: 'bold',
        fontSize: 25
    },
    header: {
        paddingHorizontal: 30,
        paddingBottom: 60
    },
    footer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: "center",

    },
    textSign2: {
        color: 'white',
        fontWeight: 'bold',
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#000',
    },
});