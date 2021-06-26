import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import Search from '../search';
const Stack = createStackNavigator();

export default function Home({ navigation }) {

    return (
        <View style={ styles.container }>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" options={ { headerShown: false } }>
                    { (props) => <HomeScreen { ...props } /> }
                </Stack.Screen>
                <Stack.Screen name="Search" options={ { headerShown: false } }>
                    { (props) => <Search { ...props } /> }
                </Stack.Screen>
            </Stack.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    title: {
        color: '#9A182B',
        fontSize: 36
    },
    navBtn: {
        padding: 10,
        backgroundColor: '#F7F7F7',
        borderRadius: 5
    },
    body: {
        flex: 8,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    containerFeatured: {
        height: 400,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginBottom: 40
    }
});