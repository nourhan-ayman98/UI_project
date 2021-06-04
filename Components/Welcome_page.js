import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import Congrats from './Congrats';
import HomeUser from './HomeUser';
import ResetPass from './ReasetPassword';
import ResetPass2 from './Resetpass2';
import Signin from './Signin';
import SignUP from './SignUp';
import Welcome from './Welcome';
import Admin from './Admin';
import Edit_Profile from './Edit_Profile';
import View_Customers from './View_Customers';
import Add_Artwork from './Add_Artwork';
import ArtistRegistration from './ArtistRegistration';
const Stack = createStackNavigator();



class Welcome_page extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="Sign In" component={Signin} />
                    <Stack.Screen name="Sign Up" component={SignUP} />
                    <Stack.Screen name="Home" component={HomeUser} />
                    <Stack.Screen name="Reset Password" component={ResetPass} />
                    <Stack.Screen name="Congratulations" component={Congrats} />
                    <Stack.Screen name="Change Password" component={ResetPass2} />
                    <Stack.Screen name="Admin" component={Admin} />
                    <Stack.Screen name="Edit My Profile" component={Edit_Profile} />
                    <Stack.Screen name="View Customers" component={View_Customers} />
                    <Stack.Screen name="Add Artwork" component={Add_Artwork} />
                    <Stack.Screen name="Artist" component={ArtistRegistration} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Welcome_page;