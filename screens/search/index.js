import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import CategoriesHome from '../search/CategoriesHome';
import Category from '../search/Category';

const Stack = createStackNavigator();

export default function Search({ navigation }) {
    const [category, setCategory] = useState('Categories');

    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Categories" options={ { headerStyle: { backgroundColor: '#9A182B' }, headerTintColor: '#F7F7F7' } }>
                { (props) => <CategoriesHome { ...props } category={ category } setCategory={ setCategory } /> }
            </Stack.Screen>
            <Stack.Screen name="Category" options={ { headerStyle: { backgroundColor: '#9A182B' }, headerTintColor: '#F7F7F7' } }>
                { (props) => <Category { ...props } category={ category } /> }
            </Stack.Screen>
        </Stack.Navigator>
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