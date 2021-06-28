import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import Header from '../components/Header';

const Stack = createStackNavigator();

export default function Catagories({ navigation }) {

    return (
        <View style={ styles.container }>
            <Header navigation={ navigation } screenName="Catagories" />
            <View style={ { flex: 8 } }>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center'
    },
});