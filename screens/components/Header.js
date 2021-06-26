import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, Dimensions, StatusBar } from 'react-native';
import LOGO from '../../assets/jSpade.png';
import { Ionicons } from '@expo/vector-icons';
const _Width = Dimensions.get('screen').width;
const _Height = Dimensions.get('screen').height;
const imgXY = 50;

export default function Header({ navigation }) {

    return (
        <View style={ { flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.5)' } }>
            <View style={ styles.container }>
                <Image source={ LOGO } style={ styles.img } />
                <Pressable style={ styles.btn } onPress={ () => navigation.navigate("Search") }>
                    <Ionicons name="search" size={ imgXY / 2 } color="gray" />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#121212',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingStart: 10,
        paddingEnd: 15,
        elevation: 30,
        marginTop: StatusBar.currentHeight
    },
    title: {
        color: '#9A182B',
        fontSize: 36
    },
    img: {
        width: imgXY,
        height: imgXY
    },
    btn: {
        padding: 5,
        borderRadius: 10,
    }
});