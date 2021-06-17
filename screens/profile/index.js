import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesHome from '../search/CategoriesHome';
import Category from '../search/Category';

const Stack = createStackNavigator();

export default function profile({ navigation }) {

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Profile</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292B2C',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#9A182B',
        fontSize: 36
    }
});