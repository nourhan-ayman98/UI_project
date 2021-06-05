import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import Home from './Home';
import { StyleSheet, ImageBackground } from 'react-native';
import Profile_navigate from './Profile_navigate';
import Purchases_navigate from './Purchases_navigate';
import Favourite_navigate from './Favourite_navigate';

const Drawer = createDrawerNavigator();


class User extends Component {
    render() {
        return (
           
                <Drawer.Navigator initialRouteName="Home_" drawerContent={props => <DrawerContent{...props} />}>
                    <Drawer.Screen name="Home_" component={Home} />
                    <Drawer.Screen name="Profile_" component={Profile_navigate} />
                    <Drawer.Screen name="Purchases_" component={Purchases_navigate} />
                    <Drawer.Screen name="Favourits_" component={Favourite_navigate} />
                </Drawer.Navigator>
           
        );
    }
}
export default User;
