import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Category({ navigation, category }) {
    
    useEffect(() => {
        navigation.setOptions({ title: category });
    }, []);

    return (
        <View style={ styles.container }>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292B2C',
        alignItems: 'center'
    },
    title: {
        color: '#9A182B',
        fontSize: 36
    }
});