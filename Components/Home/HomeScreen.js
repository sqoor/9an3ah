import React from 'react';
import { View, Text, StyleSheet, TextInput, Icon, Image } from 'react-native'
import CategoryItem from './CategoryItem'
import { Dropdown } from 'react-native-material-dropdown';
const HomeScreen = () => {
    let data = [
        {
            value: 'اربد',
        },
        {
            value: 'عمّان',
        },
        {
            value: 'جرش',
        },
        {
            value: 'عجلون',
        },
        {
            value: 'المفرق',
        },
        {
            value: 'مأدبا',
        },
        {
            value: 'معان',
        },
        {
            value: 'الطفيلة',
        },
        {
            value: 'العقبة',
        },
        {
            value: 'الكرك',
        },
        {
            value: 'الزرقاء',
        }
        ,
        {
            value: 'السلط',
        }
    ];
    return (
        <View>
            <View style={styles.bar}>
                <View style={styles.searchSection}>
                    <Image style={styles.profileIcon} source={require('../../assets/Home/man.png')} />
                    <TextInput style={styles.input} placeholder='ابحث عن فنّي ...' placeholderTextColor='#A7A7A7'></TextInput>
                </View>
                <Dropdown label='اختار المحافظة ...' data={data} />
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: '#FFE346',
        height: '60%',
        width: '100%',
    },
    searchSection: {
        marginTop: 38,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        flex: 2.5,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 10,
        backgroundColor: '#FFF',
        color: '#424242',
        borderRadius: 25
    },
    profileIcon: {
        flex: 0.5,
        width: 40,
        height: 40,
        resizeMode: "contain"
    }
})

export default HomeScreen;
