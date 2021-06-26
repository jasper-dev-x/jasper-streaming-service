import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, StatusBar, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IMDbData } from '../data/imdbList';
import SearchResult from './components/SearchResult';

export default function Search({ navigation }) {
    const [searchInput, setSearchInput] = useState('');
    const [resultList, setResultList] = useState(IMDbData);

    useEffect(() => {
        setResultList(searchInput ? IMDbData.filter(({ title }) => title.toLowerCase().match(searchInput.toLowerCase())) : IMDbData);
    }, [searchInput]);

    return (
        <View style={ { flex: 1, backgroundColor: '#121212' } }>
            <View style={ styles.statusBar } />
            <View style={ styles.container }>
                <View style={ styles.toolbar } >
                    <Pressable style={ styles.btn } onPress={ () => navigation.goBack() }>
                        <Ionicons name="chevron-back" size={ 30 } color="#9A182B" />
                        <Text style={ styles.btnTxt }>Back</Text>
                    </Pressable>
                </View>
                <TextInput
                    style={ styles.searchBar }
                    value={ searchInput }
                    onChangeText={ setSearchInput }
                    placeholder="Search"
                    placeholderTextColor="gray"
                    clearTextOnFocus={ true }
                />
                <FlatList
                    data={ resultList }
                    renderItem={ SearchResult }
                    keyExtractor={ (item) => item.id }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212'
    },
    statusBar: {
        height: StatusBar.currentHeight,
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    title: {
        color: 'white'
    },
    searchBar: {
        height: 60,
        paddingStart: 20,
        margin: 10,
        color: 'whitesmoke',
        fontSize: 18,
        borderRadius: 20,
        borderColor: '#121212',
        borderBottomColor: '#9A182B',
        borderWidth: 3
    },
    btn: {
        paddingVertical: 10,
        width: 80,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnTxt: {
        color: '#9A182B'
    },
    searchItem: {
        height: 200,
        justifyContent: 'center'
    },
    toolbar: {
        alignItems: 'flex-end'
    }
});