import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import MediaDetails from './MediaDetails';

export default function MediaList({ mediaList }) {

    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Sample Header</Text>
            {/* FLATLIST KEY MUST BE STRING */ }
            <FlatList
                data={ mediaList }
                renderItem={ MediaDetails }
                keyExtractor={ (item) => item.id }
                horizontal={ true }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        color: 'white',
        paddingVertical: 10,
        paddingStart: 10
    }
});