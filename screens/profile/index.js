import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import ProfilePopUp from './components/ProfilePopUp';
import Settings from '../settings';


const _Width = Dimensions.get('screen').width;
const Stack = createStackNavigator();
const fontSize = _Width / 2 > 150 ? 150 : _Width / 2;

export default function Profile({ navigation }) {
    const [profileName, setProfileName] = useState("John");
    const [popUpShown, setPopUpShown] = useState(false);

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" options={ { headerShown: false } }>
                { (props) =>
                    <LinearGradient style={ styles.container } colors={ ['#9A182B', '#121212'] }>
                        <Header { ...props } screenName={ profileName } icon="settings-outline" />
                        <ProfilePopUp popUpShown={ popUpShown } setPopUpShown={ setPopUpShown } profileName={ profileName } setProfileName={ setProfileName } />
                        <View style={ { flex: 8 } }>
                            <View style={ { justifyContent: 'center', alignItems: 'center', paddingVertical: 10 } }>
                                <Pressable style={ styles.btn } onPress={ () => setPopUpShown(true) }>
                                    <Text style={ styles.title }>Change Profile</Text>
                                    <View style={ styles.profileImg }>
                                        <Text style={ styles.profileTxt }>{ profileName.slice(0, 1) }</Text>
                                    </View>
                                </Pressable>
                            </View>
                            <ScrollView style={ { flex: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)' } }>

                            </ScrollView>
                        </View>
                    </LinearGradient>
                }
            </Stack.Screen>
            <Stack.Screen name="Settings" options={ { headerShown: false } }>
                { (props) => <Settings { ...props } /> }
            </Stack.Screen>
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileImg: {
        height: _Width / 2,
        width: _Width / 2,
        maxHeight: 175,
        maxWidth: 175,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40,
    },
    profileTxt: {
        fontSize
    },
    title: {
        color: '#F7F7F7',
        fontSize: 20,
        paddingVertical: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: _Width / 2,
        maxWidth: 175,
        textAlign: 'center',
        backgroundColor: 'rgba(18, 18, 18, 0.4)',
    },
    sampleTxt: {
        color: '#F7F7F7',
        fontSize: 26,
        paddingVertical: 10
    },
    btn: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: _Width / 2 * 1.2,
        width: _Width / 2,
        maxHeight: 225,
        maxWidth: 175,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
    },
    centerFlex: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    popUp: {
        backgroundColor: '#121212',
        paddingBottom: 30,
        paddingHorizontal: 30,
    },
    popUpTxt: {
        color: '#F7F7F7'
    }
});