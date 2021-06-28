import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import MediaList from './components/MediaList';
import { IMDbData } from '../data/imdbList';

export default function HomeScreen({ navigation }) {
    const listNames = [
        { heading: "Keep Watching", mediaList: IMDbData.slice(1, 10) },
        { heading: "Because you watched...", mediaList: IMDbData.slice(10, 20) },
        { heading: "Because you watched...", mediaList: IMDbData.slice(20, 30) },
        { heading: "Because you watched...", mediaList: IMDbData.slice(30, 40) },
        { heading: "Because you watched...", mediaList: IMDbData.slice(40, 50) },
        { heading: "Because you watched...", mediaList: IMDbData.slice(50, 60) },
        { heading: "Because you watched...", mediaList: IMDbData.slice(60, 70) },
        { heading: "Because you watched...", mediaList: IMDbData.slice(70, 80) },
    ];

    return (
        <LinearGradient style={ { flex: 1 } } colors={ ['#121212', '#9A182B'] } >
            <Header navigation={ navigation } icon="search" />
            <View style={ styles.body }>
                <ScrollView>
                    <Pressable style={ styles.containerFeatured } onPress={ () => navigation.navigate("Media", { item: IMDbData[0] }) }>
                        <Text style={ styles.title }>{ IMDbData[0].title }</Text>
                    </Pressable>
                    { listNames.map((item, key) =>
                        <MediaList key={ key } heading={ item.heading } mediaList={ item.mediaList } navigation={ navigation } />
                    ) }
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