import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
    useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ImageBackground } from 'react-native';
import { color } from 'react-native-reanimated';

export default function DrawerContent(props) {
    const paperTheme = useTheme();
    return (
        <ImageBackground source={require('../Images/445660-blue-art-background-blue-wallpaper.jpg')} style={styles.image}>
            <View style={{ flex: 1 }}>
                <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={
                                        require('../Images/businesswoman-character-avatar-icon-vector-12800169.jpg')
                                    }
                                    size={50}
                                />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={styles.title}>Nourhan Ayman</Title>
                                </View>
                            </View>

                        </View>
                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem
                                icon={({ size,color }) => (
                                    <Icon
                                        name="home-outline"
                                        color={color}
                                        size={size}
                                    />
                                )}
                                label="Home"
                                labelStyle={styles.textSign}
                                onPress={() => { props.navigation.navigate("Home") }}
                            />
                            <DrawerItem
                                icon={({ size,color }) => (
                                    <Icon
                                        name="account-outline"
                                        color={"#000"}
                                        size={size}
                                    />
                                )}
                                label="Profile"
                                labelStyle={styles.textSign}
                                onPress={() => { props.navigation.navigate("Profile_") }}
                            />
                            <DrawerItem
                                icon={({ size }) => (
                                    <Icon
                                        name="cart"
                                        color={"#000"}
                                        size={size}
                                    />
                                )}
                                label="Purchases"
                                labelStyle={styles.textSign}
                                onPress={() => { props.navigation.navigate("Purchases_") }}
                            />
                            <DrawerItem
                                icon={({ size }) => (
                                    <Icon
                                        name="heart"
                                        color={"#000"}
                                        size={size}
                                    />
                                )}
                                label="Favorites"
                                labelStyle={styles.textSign}
                                onPress={() => { props.navigation.navigate("Favourits_") }}
                            />
                        </Drawer.Section>
                        <Drawer.Section title={
                            <Text style={{ color: "#fff" }}>Preferences</Text>}>
                            <TouchableRipple onPress={() => { toggleTheme() }}>
                                <View style={styles.preference}>
                                    <Text style={[styles.textSign, { color: "#fff" }]}>Dark Theme</Text>
                                    <View pointerEvents="none">
                                        <Switch value={paperTheme.dark} />
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>

                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({ size }) => (
                            <Icon
                                name="exit-to-app"
                                color={"#000"}
                                size={size}
                            />
                        )}
                        label="Sign Out"
                        labelStyle={styles.textSign}
                        onPress={() => { props.navigation.navigate("Welcome") }}
                    />
                </Drawer.Section>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    textSign: {
        color: '#000',
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});