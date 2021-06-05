import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, ImageBackground, StatusBar, Alert } from 'react-native';
import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker'
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animated from 'react-native-animatable';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

// type PickerProps = {

//     selectedValue: any,
//     onValueChange: (selectedValue: any) => void,

//   };

//   type PickerItemProps = {

//     onPress: (value: any) => void
//   };

class Add_Artwork extends Component {

    states = { user: '' }
    updateUser = (user) => {
        this.setState({ user: user })
    }
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
        },
        data8: {
            position:''
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
    func() {
        if (this.state.role === 'None of the Above') {
            this.props.navigation.navigate('Artist');
        }
    }
    render() {

        const { navigate } = this.props.navigation;
        return (

            <View style={styles.container}>
                <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
                    <View style={styles.header}>
                        <Text style={[styles.text_header, { marginTop: 35 }]}>Artworks </Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.text_footer}> Title </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder="Insert the Title of the Artwork .."
                                placeholderTextColor="#D3D3D3"
                                style={styles.textInput}
                                autoCapitalize='none'
                            />
                        </View>
                        <Text style={styles.text_footer}> Type of Art </Text>
                        <br></br>
                        <Picker
                            selectedValue={this.states.Artist}
                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ Artist: itemValue })}
                        >
                            <Picker.Item label="Paintings" value="Paintings" />
                            <Picker.Item label="Works of the 19th Century " value="Works of the 19th Century " />
                            <Picker.Item label="Statues" value="Statues" />
                        </Picker>


                        <Text style={[styles.text_footer, { marginTop: 35 }]}> Year Of Art </Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="calendar"
                                color="#fff"
                                size={20}
                            />
                            <TextInput
                                placeholder=" Insert the Year  of Art .."
                                placeholderTextColor="#D3D3D3"
                                style={styles.textInput}
                                autoCapitalize='none'

                            />

                        </View>
                        <Text style={styles.text_footer}> Artist Name </Text>
                        <br></br>

                        <Picker
                            selectedValue={this.state.data8}

                            style={{ height: 50, width: 150 }}
                            onValueChange={(itemValue, itemPosition) =>{  
                                this.state.data8.position=itemPosition.valueOf();
                                  if(this.state.data8.position==6)
                                  {
                                    navigate("Artist");
                                  }
                                } 
                             }
                        >
                            <Picker.Item label="Georges Seurat" value="Georges Seurat" />
                        <Picker.Item label="Leonardo da Vinci" value="Leonardo da Vinci" />
                        <Picker.Item label="Michelangelo" value="Michelangelo" />
                        <Picker.Item label="Rembrandt" value="Rembrandt" />
                        <Picker.Item label="Jean-Antoine Watteau" value="Jean-Antoine Watteau" />
                        <Picker.Item label="Vincent van Gogh" value="Vincent van Gogh" />
                        
                        <Picker.Item label=" None of the Above" value="None of the Above" />
                        
                        </Picker>

                    <Text style={styles.text_footer}> Price Of Art  </Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="money"
                            color="#fff"
                            size={20}
                        />
                        <TextInput
                            placeholder="Insert the Amount of Money .."
                            placeholderTextColor="#D3D3D3"
                            style={styles.textInput}
                            autoCapitalize='none'

                        />
                    </View>


                    <View style={styles.button}>
                        {this.check_password(this.state.data2.password, this.state.data3.confirm_password) ?
                            <TouchableOpacity
                                onPress={() => navigate("Artist")}>
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
            </View >
        );
    }
}


export default Add_Artwork;
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
