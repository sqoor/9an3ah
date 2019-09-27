import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, ScrollView, Image, FlatList, Platform, Dimensions } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import CategoriesList from './CategoriesList';
import WorkerListItem from './WorkerListItem';
import axios from 'axios'


const HomeScreen = () => {

    const [workers, setWorkers] = useState([]);

    useEffect(() => {
        axios.get('https://san3ah.herokuapp.com/workers')
            .then(response => {
                console.log('RESPONSE', response)
                console.log('DATA', response.data)
                setWorkers([response.data])
                console.log('WORKERS', workers)
            })
            .catch(error => {
                alert(error);
            })
    }, [])

    let cities = [
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

    let items = [
        { key: 1, img: require('../../assets/Home/avatar.png'), name: 'محمد', field: 'مبرمج', location: 'عمّان' },
        { key: 2, img: require('../../assets/Home/avatar.png'), name: 'محمد', field: 'مبرمج', location: 'عمّان' },
        { key: 3, img: require('../../assets/Home/avatar.png'), name: 'محمد', field: 'مبرمج', location: 'عمّان' },
        { key: 4, img: require('../../assets/Home/avatar.png'), name: 'محمد', field: 'مبرمج', location: 'عمّان' },
        { key: 5, img: require('../../assets/Home/avatar.png'), name: 'محمد', field: 'مبرمج', location: 'عمّان' },
        { key: 6, img: require('../../assets/Home/avatar.png'), name: 'محمد', field: 'مبرمج', location: 'عمّان' },
        { key: 7, img: require('../../assets/Home/avatar.png'), name: 'محمد', field: 'مبرمج', location: 'عمّان' },
        { key: 8, img: require('../../assets/Home/avatar.png'), name: 'محمد', field: 'مبرمج', location: 'عمّان' },
        { key: 9, img: require('../../assets/Home/avatar.png'), name: 'محمد', field: 'مبرمج', location: 'عمّان' },
    ]
    let renderItem = ({ item, index }) => {
        if (item.empty === true) {
            // return <View style={[styles.item, styles.itemInvisible]} />;
        }
        return (
            <WorkerListItem key={index} img={item.img} name={item.name} field={item.field} location={item.location} />
        );
    };

    return (
        <View>
            <View style={styles.bar}>
                <View style={styles.searchSection}>
                    <Image style={styles.profileIcon} source={require('../../assets/Home/man.png')} />
                    <TextInput style={styles.input} placeholder='ابحث عن فنّي ...' placeholderTextColor='#A7A7A7'></TextInput>
                </View>
                <Dropdown label='اختار المحافظة ...' data={cities} />
                <CategoriesList />

            </View>

            <ScrollView style={styles.container}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    numColumns={2}
                />
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({

    bar: {
        backgroundColor: '#FFE346',
        height: '28%',
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
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
})

export default HomeScreen;
