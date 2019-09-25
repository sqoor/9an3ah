import React from 'react';
import { View, Text, StyleSheet, TextInput, Icon } from 'react-native'
import CategoryItem from './CategoryItem'
const HomeScreen = () => {
    return (
        <View>
            <View style={styles.bar}>
                <View style={styles.searchInputContainer}>
                    {/* <Icon style={styles.searchIcon} name="search" size={20} color="#A7A7A7" /> */}
                    <TextInput style={styles.input} placeholder='ابحث عن فنّي ...' placeholderTextColor='#A7A7A7'></TextInput>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: '#FFE346',
        height: '60%',
        width: '100%',
    },
    searchInputContainer: {
        width: '70%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
})

export default HomeScreen;
