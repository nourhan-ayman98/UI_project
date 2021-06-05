import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react';
import Congrats from './Congrats';
import User from './User_';
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
import Home from './Home';
import Profile from './Profile';
import Purchases from './Purchases';
import Favourits from './Favourits';
import Home_Art from './HomeArt';
import Profile_navigate from './Profile_navigate'
import Purchases_navigate from './Purchases_navigate';
import Favourite_navigate from './Favourite_navigate';
import MoreDetails from './MoreDetails';
import Pay from './Pay';
import Congrats_Pay from './Congrats_pay';
import MoreDetails_2 from './MoreDetails_2';


const Stack = createStackNavigator();



class Welcome_page extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="Sign In"  component={Signin} />
                    <Stack.Screen name="Sign Up" component={SignUP} />
                    <Stack.Screen name="user" options={{ headerShown: false }} component={User} />
                    <Stack.Screen name="Reset Password"  component={ResetPass} />
                    <Stack.Screen name="Congratulations" options={{ headerShown: false }} component={Congrats} />
                    <Stack.Screen name="Change Password" component={ResetPass2} />
                    <Stack.Screen name="Admin" component={Admin} />
                    <Stack.Screen name="Edit My Profile" component={Edit_Profile} />
                    <Stack.Screen name="View Customers" component={View_Customers} />
                    <Stack.Screen name="Add Artwork" component={Add_Artwork} />
                    <Stack.Screen name="Artist" component={ArtistRegistration} />
                    <Stack.Screen name="Home_" component={Home}  />
                    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                    <Stack.Screen name="Purchases" component={Purchases} />
                    <Stack.Screen name="Favourits" component={Favourits} />
                    <Stack.Screen name="Home" component={Home_Art} />
                    <Stack.Screen name="Profile_Navigate" component={Profile_navigate} />
                    <Stack.Screen name="Purchases_Navigate" component={Purchases_navigate} />
                    <Stack.Screen name="Favourite_Navigate" component={Favourite_navigate} />
                    <Stack.Screen name="Art Details" component={MoreDetails} />
                    <Stack.Screen name="Payment" component={Pay} />
                    <Stack.Screen name="Congrats2" options={{ headerShown: false }} component={Congrats_Pay} />
                    <Stack.Screen name="Arte Details" component={MoreDetails_2} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default Welcome_page;