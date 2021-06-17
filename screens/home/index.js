import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import LOGO from '../../assets/splash.png';

export default function Home({ navigation }) {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Welcome</Text>
            <Image source={ LOGO } style={ styles.img } />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#9A182B',
        fontSize: 36
    },
    navBtn: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5
    },
    img: {
        width: 100,
        height: 100
    }
});