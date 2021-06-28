import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, StatusBar, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IMDbData } from '../data/imdbList';
import Header from '../components/Header';
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
                <View style={ styles.header }>
                    <TextInput
                        style={ styles.searchBar }
                        value={ searchInput }
                        onChangeText={ setSearchInput }
                        placeholder="Search"
                        placeholderTextColor="gray"
                        clearTextOnFocus={ true }
                    />
                    <Pressable style={ styles.btn } onPress={ () => setSearchInput('') }>
                        <Ionicons name="close" size={ 25 } color="gray" />
                    </Pressable>
                    <Pressable style={ styles.btn } onPress={ () => navigation.goBack() }>
                        <Ionicons name="arrow-back" size={ 25 } color="gray" />
                    </Pressable>
                </View>

                <FlatList
                    data={ resultList }
                    renderItem={ (props) => <SearchResult { ...props } navigation={ navigation } /> }
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
    header: {
        flexDirection: 'row',
        paddingVertical: 10
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
        flex: 1,
        paddingHorizontal: 30,
        marginStart: 10,
        color: '#F7F7F7',
        fontSize: 18,
        borderRadius: 20,
        borderColor: '#121212',
        borderBottomColor: '#9A182B',
        borderWidth: 3,
    },
    btn: {
        paddingHorizontal: 10,
        borderRadius: 20,
        justifyContent: 'center',
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