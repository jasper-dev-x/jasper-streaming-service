import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function CategoriesHome({ navigation, category, setCategory }) {
    const categories = ['Action', 'Comedy', 'Drama', 'Horror'];

    function onCategoryClicked(item) {
        setCategory(item);
        navigation.push("Category");
    }

    return (
        <View style={ styles.container }>
            { categories.map((item, key) => (
                <Pressable key={ key } style={ styles.navBtn } onPress={ () => onCategoryClicked(item) }>
                    <View pointerEvents="none">
                        <Text style={ styles.txtBtn }>{ item }</Text>
                    </View>
                </Pressable>
            )) }

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