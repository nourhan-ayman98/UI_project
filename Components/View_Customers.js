import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
} from 'react-native';

import { useTheme } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const View_Customers = ({ itemData, onPress }) => {

    return (


        <ScrollView>

            <View >
                <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}></ImageBackground>
                <TouchableOpacity onPress={onPress}>

                    <View style={styles.cardsWrapper}>

                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: '#333',
                        }}
                        >
                            Customers List
            </Text>
                        <View style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image
                                    source={require('../Images/image2.jfif')}
                                    resizeMode="cover"
                                    style={styles.cardImg}
                                />
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>Maryam Ahmed Muhammed </Text>

                                <Text style={styles.cardDetails}>
                                    ID: 1287 <br></br>
                                Bought: 7 Items <br></br>
                                Interested In: Paintings <br></br>
                                Style of Art: Art Deco <br></br>


                                </Text>
                            </View>
                        </View>

                        <View style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image
                                    source={require('../Images/image3.jfif')}
                                    resizeMode="cover"
                                    style={styles.cardImg}
                                />
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>Alaa Medhat Khalil</Text>

                                <Text style={styles.cardDetails}>
                                    ID: 1244
                                    <br></br>
                                    Bought: 4 Items
                                    <br></br>
                                    Interested In: Status, Paintings
                                    <br></br>
                                    Style of Art: Art Deco, Abstract
                                    <br></br>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image
                                    source={require('../Images/image3.jfif')}
                                    resizeMode="cover"
                                    style={styles.cardImg}
                                />
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>Layla Ahmed Abdelhamid</Text>

                                <Text style={styles.cardDetails}>
                                    ID: 1144
                                    <br></br>
                                    Bought: 5 Items
                                    <br></br>
                                    Interested In: Status
                                    <br></br>
                                    Style of Art: Pop Art, Abstract
                                    <br></br>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.cardImgWrapper}>
                                <Image
                                    source={require('../Images/image4.jfif')}
                                    resizeMode="cover"
                                    style={styles.cardImg}
                                />
                            </View>
                            <View style={styles.cardInfo}>
                                <Text style={styles.cardTitle}>Mira Fahmy eissa</Text>

                                <Text style={styles.cardDetails}>
                                    ID: 1301 <br></br>
                                Bought: 0 Items <br></br>
                                Interested In: N/A <br></br>
                                Style of Art: N/A <br></br>
                                </Text>
                            </View>
                        </View>
                    </View>


                </TouchableOpacity>


            </View>
        </ScrollView>
    );
}

export default View_Customers;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 100,
        width: '90%',
        marginTop: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '20%',
        width: '20%',
        alignSelf: 'center',
        borderRadius: 8,
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '50%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 10,
        height: 10,
        backgroundColor: '#B5E2E3' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#de4f35',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 150,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderColor: '#000',
        backgroundColor: '#fff',
        borderColor: '#000',
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '150px',
        width: '150px',
        alignSelf: 'center',
        borderRadius: 5,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,

    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#000',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#B5E2E3',

    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
});