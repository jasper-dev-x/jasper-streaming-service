import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
const _Width = Dimensions.get('screen').width;

const Stack = createStackNavigator();


export default function profile({ navigation }) {

    return (
        <LinearGradient style={ styles.container } colors={ ['#9A182B', '#121212'] }>
            <View style={ styles.statusBar } />
            <View style={ { justifyContent: 'center', alignItems: 'center', paddingVertical: 10 } }>
                <View style={ styles.profileImg } />
                <Text style={ styles.title }>My Profile</Text>
            </View>
            <ScrollView style={ { flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' } }>
                <Text style={ styles.sampleTxt }>Sample Text</Text>
                <Text style={ styles.sampleTxt }>Sample Text</Text>
                <Text style={ styles.sampleTxt }>Sample Text</Text>
                <Text style={ styles.sampleTxt }>Sample Text</Text>
                <Text style={ styles.sampleTxt }>Sample Text</Text>
                <Text style={ styles.sampleTxt }>Sample Text</Text>
                <Text style={ styles.sampleTxt }>Sample Text</Text>
                <Text style={ styles.sampleTxt }>Sample Text</Text>
                <Text style={ styles.sampleTxt }>Sample Text</Text>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileImg: {
        height: _Width / 3,
        width: _Width / 3,
        maxHeight: 200,
        maxWidth: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 100
    },
    title: {
        color: '#F7F7F7',
        fontSize: 36,
        paddingVertical: 10
    },
    sampleTxt: {
        color: '#F7F7F7',
        fontSize: 26,
        paddingVertical: 10
    },
    statusBar: {
        height: StatusBar.currentHeight,
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
});