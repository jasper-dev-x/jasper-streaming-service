import React from 'react';
import { View, Text, StyleSheet, Pressable, Modal, Dimensions, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const _Height = Dimensions.get('screen').height;
const _Width = Dimensions.get('screen').width;

export default function ProfilePopUp({ popUpShown, setPopUpShown, profileName, setProfileName }) {
    const names = [
        { id: '0', name: 'Mary' },
        { id: '1', name: 'Brian' },
        { id: '2', name: 'Kids' },
        { id: '3', name: 'John' }
    ];

    const renderProfile = ({ item }) => {

        if (profileName.toLowerCase().match(item.name.toLowerCase()))
            return (
                <View style={ [styles.popUpProfile, { opacity: 0.5 }] }>
                    <Text style={ [styles.popUpTxt, { fontSize: 20 }] }>{ item.name }</Text>
                </View>
            );
        else
            return (
                <Pressable style={ styles.popUpProfile } onPress={ () => {
                    setProfileName(item.name);
                    setPopUpShown(!popUpShown);
                } }>
                    <Text style={ [styles.popUpTxt, { fontSize: 20 }] }>{ item.name }</Text>
                </Pressable>
            );
    };

    return (
        <Modal
            animationType="fade"
            transparent={ true }
            visible={ popUpShown }
            onRequestClose={ () => setPopUpShown(!popUpShown) }
        >
            <View style={ styles.centerFlex }>
                <View style={ styles.popUp } >
                    {/* POP UP HEADER */ }
                    <View style={ styles.header }>
                        <Text style={ [styles.popUpTxt, { fontSize: 24 }] }>Profiles</Text>
                        <Pressable onPress={ () => setPopUpShown(!popUpShown) }>
                            <Ionicons name="close" size={ 30 } color="#F7F7F7" />
                        </Pressable>
                    </View>

                    {/* POP UP BODY */ }
                    <View style={ styles.body }>
                        <FlatList
                            data={ names }
                            renderItem={ renderProfile }
                            keyExtractor={ (item) => item.id }
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centerFlex: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    popUp: {
        backgroundColor: '#121212',
        paddingBottom: 30,
        paddingHorizontal: 30,
        height: _Height / 2,
        width: _Width - 20,
        borderRadius: 20
    },
    popUpTxt: {
        color: '#F7F7F7'
    },
    popUpProfile: {
        padding: 5,
        backgroundColor: 'rgb(154, 24, 43)',
        marginBottom: 30,
        borderRadius: 10
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    body: {
        flex: 4
    }
});