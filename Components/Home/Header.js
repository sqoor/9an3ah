import React, { Component } from 'react';
import { Image, StyleSheet, View, TextInput, Animated, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import CategoriesList from './CategoriesList';
import axios from 'axios';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: {
                searchTerm: '',
                location: ''
            },
            searchResult: []
        }
    }

    // Get User Search Term. 
    searchHandler = (event) => {
        this.setState({this.state.search.searchTerm: event.target.value });

        // Get workers List Depend On User Search. 
        axios.get('https://san3ah.herokuapp.com/specific-workers/', this.state.searchTerm)
            .then(response => {
                this.setState({ searchResult: response.data })
            })
            .catch(error => {
                alert(error);
            })
    };


    //METHOD GET
    //Fetch Workers In A Specific Category
    filterByCategory = () => {

    }

    render() {
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

        return (
            <View style={styles.header}>
                {/* Search & Profile Avatar*/}
                <View style={styles.searchSection}>
                    <TouchableOpacity
                        style={{ justifyContent: 'center', alignItems: 'center', width: 70, height: 70 }}
                        onPress={() => props.navigation.navigate({ routeName: 'Profile' })}>
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
                <CategoriesList style={styles.categoriesList} onFilter={filterByCategory} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '28%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#FFE346',
        flex: 1
    },
    searchSection: {
        flex: 1,
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
    categoriesList: {
        flex: 2,
    }
})

