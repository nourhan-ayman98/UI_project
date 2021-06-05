import React, { Component } from 'react';
import { Dimensions, StyleSheet, TextInput, ImageBackground, Platform, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import { fonts } from 'react-native-elements/dist/config';
import { add } from 'react-native-reanimated';



class MoreDetails_2 extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Card>
                    <Card.Cover resizeMode="contain" style={{ height: 500 }} source={require("../Images/Paints/Starry-Night-Van-Gogh-Which-Stars-GoogleArtProject-1184x630.jpg")} />
                    <Card.Content>
                    <Title style={styles.textSign}>The Starry Night</Title>
                   
                    <Paragraph>
                        he Starry Night is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889,
                        it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.
                             </Paragraph>
                    
                        <View>
                            <Title style={styles.textSign}>Price</Title>
                            <Title style={styles.text_footer}>10000$</Title>
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
                        <Avatar.Image source={require('../Images/1416260276042_Image_galleryImage_Yours_Vincent_The_Letters.jpg')} />
                        <Title style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginTop: 20,
                            marginLeft: 20
                        }}>Vincent van Gogh</Title>
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
export default MoreDetails_2;
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