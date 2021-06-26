import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function MediaDetails({ item }) {

    return (
        <View style={ styles.container }>
            <View style={ styles.mediaImg } />
            <Text style={ styles.title }>{ item.title }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingHorizontal: 10,
        marginVertical: 10,
        paddingTop: 10,
    },
    title: {
        color: '#F7F7F7',
        width: 178
    },
    mediaImg: {
        height: 100,
        width: 178,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginBottom: 6
    }
});