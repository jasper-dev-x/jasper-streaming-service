import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, Dimensions, StatusBar } from 'react-native';
import LOGO from '../../assets/jSpade.png';
import { Ionicons } from '@expo/vector-icons';
const _Width = Dimensions.get('screen').width;
const _Height = Dimensions.get('screen').height;
const imgXY = 50;

export default function Header({ navigation, screenName, icon }) {

    // HEADER WITH LOGO & SEARCH
    if (!screenName) {
        return (
            <View style={ { flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.5)' } }>
                <View style={ styles.statusBar } />
                <View style={ [styles.container, { backgroundColor: '#121212' }] }>
                    <View style={ { justifyContent: 'center' } }>
                        <Image source={ LOGO } style={ styles.img } />
                    </View>
                    <Pressable style={ styles.btn } onPress={ () => navigation.navigate("Search") }>
                        <Ionicons name={ icon } size={ imgXY / 2 } color="gray" />
                    </Pressable>
                </View>
            </View>
        );
    }

    // HEADER WITH TITLE  
    if (!icon) {
        return (
            <View style={ { flex: 1 } }>
                <View style={ styles.statusBar } />
                <View style={ [styles.container, { alignItems: 'center' }] }>
                    <Text style={ styles.title }>{ screenName }</Text>
                </View>
            </View>
        );
    }

    // HEADER WITH TITLE & BACK 
    if (icon === 'arrow-back') {
        return (
            <View style={ { flex: 1 } }>
                <View style={ styles.statusBar } />
                <View style={ styles.container }>
                    <View style={ { justifyContent: 'center' } }>
                        <Text style={ styles.title }>{ screenName }</Text>
                    </View>
                    <Pressable style={ styles.btn } onPress={ () => navigation.goBack() }>
                        <Ionicons name={ icon } size={ imgXY / 2 } color="gray" />
                    </Pressable>
                </View>
            </View>
        );
    }

    // HEADER WITH TITLE & SETTINGS
    return (
        <View style={ { flex: 1 } }>
            <View style={ styles.statusBar } />
            <View style={ styles.container }>
                <View style={ { justifyContent: 'center' } }>
                    <Text style={ styles.title }>{ screenName }</Text>
                </View>
                <Pressable style={ styles.btn } onPress={ () => navigation.navigate("Settings") }>
                    <Ionicons name={ icon } size={ imgXY / 2 } color="#F7F7F7" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 15
    },
    title: {
        color: '#F7F7F7',
        fontSize: 26
    },
    statusBar: {
        height: StatusBar.currentHeight,
        backgroundColor: 'rgba(255, 255, 255, 0.3)'
    },
    img: {
        width: imgXY,
        height: imgXY,
    },
    btn: {
        borderRadius: 10,
        paddingHorizontal: 15,
        justifyContent: 'center'
    }
});