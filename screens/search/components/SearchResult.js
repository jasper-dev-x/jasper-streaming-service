import React from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable } from 'react-native';
const _Width = Dimensions.get('screen').width;

export default function SearchResult({ item, navigation }) {

    return (
        <Pressable style={ styles.container } onPress={ () => navigation.navigate("Media", { item }) }>
            <View style={ styles.img } />
            <Text style={ styles.title }>{ item.title }</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 20
    },
    title: {
        color: '#F7F7F7',
        fontSize: 20,
        width: _Width - 40,
        textAlign: 'center'
    },
    img: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        height: _Width * .562,
        width: _Width
    }
});