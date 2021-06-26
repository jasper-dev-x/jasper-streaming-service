import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Platform, FlatList, ScrollView, Pressable, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import MediaList from './MediaList';
import { IMDbData } from '../data/imdbList';

export default function HomeScreen({ navigation }) {

    return (
        <LinearGradient style={ { flex: 1 } } colors={ ['#121212', '#9A182B'] } >
            <Header navigation={ navigation } />
            <View style={ styles.body }>
                <ScrollView>
                    <View style={ styles.containerFeatured }>
                        <Text style={ styles.title }>{ IMDbData[0].title }</Text>
                    </View>
                    <MediaList mediaList={ IMDbData.slice(1, 10) } />
                    <MediaList mediaList={ IMDbData.slice(10, 20) } />
                    <MediaList mediaList={ IMDbData.slice(20, 30) } />
                    <MediaList mediaList={ IMDbData.slice(30, 40) } />
                    <MediaList mediaList={ IMDbData.slice(40, 50) } />
                    <MediaList mediaList={ IMDbData.slice(50, 60) } />
                    <MediaList mediaList={ IMDbData.slice(60, 70) } />
                    <MediaList mediaList={ IMDbData.slice(70, 80) } />
                </ScrollView>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 8,
        backgroundColor: 'rgba(0,0,0,0)',
    },
    containerFeatured: {
        height: 400,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        marginBottom: 40,
        paddingBottom: 10,
        paddingLeft: 10,
        justifyContent: 'flex-end'
    },
    title: {
        fontSize: 30,
        color: '#F7F7F7'
    }
});