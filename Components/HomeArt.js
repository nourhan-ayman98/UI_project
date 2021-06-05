import React, { Component } from 'react';
import { Dimensions, StyleSheet, TextInput, ImageBackground, Platform, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';





class Home_Art extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Card>
                    <Card.Content>
                        <Title style={styles.textSign}>Monalisa</Title>
                        <Paragraph>The Mona Lisa is a half-length portrait painting by Italian artist Leonardo da Vinci. Considered an archetypal masterpiece of the Italian Renaissance, it has been described as "the best known, the most visited, the most written about,
                         the most sung about, the most parodied work of art in the world"</Paragraph>
                    </Card.Content>
                    <Card.Cover  resizeMode="contain" style={{height:500}} source={require("../Images/Paints/190906133209-isleworth-mona-lisa-super-tease.jpg")} />
                    <Card.Actions>
                        <TouchableOpacity style={styles.button}>
                            <Icon
                                name="favorite"
                                color={"#1E90FF"}
                                size={25}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigate("Art Details")} >
                            <LinearGradient
                                colors={['#87CEFA', '#1E90FF']}
                                style={styles.signIn}>
                                <Text style={styles.textSign2}>Learn More</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </Card.Actions>
                </Card>

                <Card>
                    <Card.Content>
                        <Title style={styles.textSign}>The Starry Night</Title>
                        <Paragraph>The Starry Night is an oil on canvas painting by Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889,
                             it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village.</Paragraph>
                    </Card.Content>
                    <Card.Cover resizeMode="contain" style={{height:500}} source={require("../Images/Paints/Starry-Night-Van-Gogh-Which-Stars-GoogleArtProject-1184x630.jpg")} />
                    <Card.Actions>
                        <TouchableOpacity style={styles.button}>
                            <Icon
                                name="favorite"
                                color={"#1E90FF"}
                                size={25}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigate("Arte Details")} >
                            <LinearGradient
                                colors={['#87CEFA', '#1E90FF']}
                                style={styles.signIn}>
                                <Text style={styles.textSign2}>Learn More</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </Card.Actions>
                </Card>

                <Card>
                    <Card.Content>
                        <Title style={styles.textSign}>Café Terrace at Night</Title>
                        <Paragraph>Café Terrace at Night is an 1888 oil painting by the Dutch artist Vincent van Gogh. It is also known as The Cafe Terrace on the Place du Forum, and, when first exhibited in 1891, was entitled Coffeehouse
                            , in the evening. Van Gogh painted Café Terrace at Night in Arles, France, in mid-September 1888.</Paragraph>
                    </Card.Content>
                    <Card.Cover resizeMode="contain" style={{height:500}}source={require("../Images/Paints/51hAuS2j4OL.jpg")} />
                    <Card.Actions>
                        <TouchableOpacity style={styles.button}>
                            <Icon
                                name="favorite"
                                color={"#1E90FF"}
                                size={25}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigate("Art Details")} >
                            <LinearGradient
                                colors={['#87CEFA', '#1E90FF']}
                                style={styles.signIn}>
                                <Text style={styles.textSign2}>Learn More</Text>
                            </LinearGradient>
                        </TouchableOpacity>


                    </Card.Actions>
                </Card>

                <Card>
                    <Card.Content>
                        <Title style={styles.textSign}>The Last Supper</Title>
                        <Paragraph>TThe Last Supper is a late 15th-century mural painting by Italian
                            artist Leonardo da Vinci housed by the refectory of the Convent of Santa Maria delle Grazie in Milan, Italy. It is one of the Western world's most recognizable paintings</Paragraph>
                    </Card.Content>
                    <Card.Cover resizeMode="contain" style={{height:500}}source={require("../Images/Paints/last-supper.jpg")} />
                    <Card.Actions>
                        <TouchableOpacity style={styles.button}>
                            <Icon
                                name="favorite"
                                color={"#1E90FF"}
                                size={25}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigate("Art Details")} >
                            <LinearGradient
                                colors={['#87CEFA', '#1E90FF']}
                                style={styles.signIn}>
                                <Text style={styles.textSign2}>Learn More</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </Card.Actions>
                </Card>
            </ScrollView>

        );
    }
}

export default Home_Art;
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
    imageStyle: {
        height:500,
        flex: 1,
        width: null},
    button: {
        marginTop: 30,
        flex: 1,
        display: 'flex',
        width: 40,
        alignItems: 'center'

    },
    signIn: {
        width: 160,
        height: 40,
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
    }
});