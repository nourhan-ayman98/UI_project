import React, { Component } from 'react';
import { Dimensions, StyleSheet,ScrollView, TextInput, ImageBackground, Platform, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


class Purchases extends Component {
    render() {
        return (
            <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                <View style={styles.footer}>

                    <ScrollView>
                        <Card>
                           
                            <Card.Content >
                                <Title style={styles.textSign}>Monalisa</Title>
                                <Paragraph>
                                    <Text style={styles.text_footer}>Date:6/5/2021</Text>
                                    <Title style={styles.text_footer}>Price:80000$</Title>

                                </Paragraph>
                            </Card.Content>
                        </Card>
                        <Card>
                           
                            <Card.Content>
                                <Title style={styles.textSign}>The Starry Night</Title>
                                <Paragraph>
                                    <Text style={styles.text_footer}>Date:10/5/2020</Text>
                                    <Title style={styles.text_footer}>Price:10000$</Title>
                                </Paragraph>
                            </Card.Content>
                        </Card>
                        <Card>
                           
                            <Card.Content>
                                <Title style={styles.textSign}>Girl with a Pearl Earring</Title>
                                <Paragraph>
                                    <Text style={styles.text_footer}>Date:5/9/2019</Text>
                                    <Title style={styles.text_footer}>Price:150000$</Title>
                                </Paragraph>
                            </Card.Content>
                        </Card>

                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

export default Purchases;
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
        marginTop:30,
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
        color: 'black',
        fontWeight: 'bold',
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
});