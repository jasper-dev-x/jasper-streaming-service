import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const Stack = createStackNavigator();

export default function MyStuff({ navigation }) {

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>My Stuff</Text>
            {/* <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Categories" options={ { headerStyle: { backgroundColor: '#9A182B' }, headerTintColor: '#F7F7F7' } }>
                { (props) => <CategoriesHome { ...props } category={ category } setCategory={ setCategory } /> }
            </Stack.Screen>
            <Stack.Screen name="Category" options={ { headerStyle: { backgroundColor: '#9A182B' }, headerTintColor: '#F7F7F7' } }>
                { (props) => <Category { ...props } category={ category } /> }
            </Stack.Screen>
        </Stack.Navigator> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#292B2C',
        justifyContent: 'space-around'
    },
    title: {
        color: '#9A182B',
        fontSize: 36
    },
    navBtn: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#9A182B'
    },
    txtBtn: {
        color: '#F7F7F7'
    }
});