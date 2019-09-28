import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';
import CategoriesList from './CategoriesList';
import WorkerListItem from './WorkerListItem';
import axios from 'axios'


const HomeScreen = () => {

    // Hook State To Contain Array Of Workers.
    const [workers, setWorkers] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // @METHOD GET
    // Fetch Workers Data From Database.
    function fetchData() {
        axios.get('https://san3ah.herokuapp.com/workers')
            .then(response => {
                console.log('RESPONSE', response)
                console.log('DATA', response.data)
                setWorkers(workers => [...workers, response.data])
                console.log('WORKERS AXIOS', workers)
            })
            .catch(error => {
                alert(error);
            })
    }

    //METHOD GET
    //Fetch Workers In A Specific Category
    function filterByCategory() {

    }

    //Navigate To ProfileScreen
    function moveToProfileScreen() {

    }

    // Execute "fetchData" Method Once The Component Open.
    useEffect(() => fetchData(), [])

    // Array Of "JORDAN" Cities.
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

    // Static Data To Test The List Of Workers.
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

    // Get User Search Term. 
    const searchHandler = (enteredTerm) => {
        setSearchTerm(enteredTerm);
    };

    console.log('WORKERS', workers)

    return (
        <View>
            {/* App Bar */}
            <View style={styles.bar}>
                {/* Search & Profile Avatar*/}
                <View style={styles.searchSection}>
                    <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center', width: 70, height: 70 }}
                        onPress={() => moveToProfileScreen()}>
                        <Image style={styles.profileIcon} source={require('../../assets/Home/man.png')} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder='ابحث عن فنّي ...'
                        placeholderTextColor='#A7A7A7'
                        onChangeText={searchHandler}
                        value={searchTerm}>

                    </TextInput>
                </View>
                {/* "JORDAN" Cities List */}
                <Dropdown label='اختار المحافظة ...' data={cities} />
                {/* Workers Fields Categories Component */}
                <CategoriesList onFilter={filterByCategory} />
            </View>

            {/* Workers List */}
            <FlatList
                /* keyExtractor = {(item, index) => item.id}  Get Unique Key For every Item In flat List*/
                data={items}
                renderItem={result => (<WorkerListItem img={result.item.img} name={result.item.name} field={result.item.field} location={result.item.location} />)}
                numColumns={2}
            />
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