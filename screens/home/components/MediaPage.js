import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../../components/Header';

const _Width = Dimensions.get('screen').width;

export default function MediaPage({ navigation, route }) {
    const { item } = route.params;
    return (
        <LinearGradient style={ styles.container } colors={ ["#121212", "#9A182B"] }>
            <Header navigation={ navigation } screenName=" " icon="arrow-back" />
            <View style={ styles.body }>
                <Image source={ { uri: item.image } } style={ styles.img } />
                <View style={ styles.mediaInfo }>
                    <Text style={ styles.title }>{ item.fullTitle }</Text>
                    <Text style={ styles.details }>{ item.crew }</Text>

                </View>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 8,
        alignItems: 'center',
    },
    img: {
        width: 128 * 1.2,
        height: 176 * 1.2
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
        color: '#F7F7F7',
        textAlign: 'center'
    },
    details: {
        fontSize: 16,
        textAlign: 'center',
        color: '#F7F7F7'
    },
    mediaInfo: {
        flex: 1,
        width: _Width,
        paddingTop: 10,
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    btnBack: {
        padding: 10,
        backgroundColor: '#F7F7F7',
        width: 100,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 100
    }
});