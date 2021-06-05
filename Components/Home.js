import React, { Component } from 'react';
import { Dimensions, StyleSheet, TextInput, ImageBackground, Platform, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import Home_Art from './HomeArt';
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator()


class Home extends Component {
   
    render() {
        const  navigate  = this.props.navigation;
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home_Art} options={{
                    headerLeft: () => <Icon
                        name="menu"
                        size={25}
                        color="#1E90FF"
                        onPress={() => navigate.openDrawer()}
                    />
                }} />
               </Stack.Navigator>
        );
    }
}

export default Home;