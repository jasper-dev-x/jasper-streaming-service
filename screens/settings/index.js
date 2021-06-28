import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function Settings({ navigation }) {

    return (
        <View style={ styles.container }>
            <Header navigation={ navigation } screenName="Settings" icon="arrow-back" />
            <View style={ styles.body }>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    body: {
        flex: 8
    },
    title: {
        fontSize: 26,
        color: '#F7F7F7'
    }
});