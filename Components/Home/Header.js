import React, { Component } from 'react';
import { Image, StyleSheet, View, TextInput, Animated, TouchableOpacity, Picker } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import CategoriesList from './CategoriesList';

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            field: ''
        }
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
                        onPress={() => this.props.navigation.navigate('Profile')}>
                        <Image style={styles.profileIcon} source={require('../../assets/Home/man.png')} />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        placeholder='ابحث عن فنّي ...'
                        placeholderTextColor='#A7A7A7'
                        onChangeText={() => this.state.searchTerm}
                        value={this.state.searchTerm}>

                    </TextInput>
                </View>
                {/* "JORDAN" Cities List */}
                <View style={styles.inputGroup}>
                    <Picker
                        selectedValue={this.state.field}
                        style={styles.cities}
                        onValueChange={text => this.setState({ field: text })}
                    >
                        <Picker.Item label="اختار المحافظة ..." value="" />
                        <Picker.Item label="اربد" value="اربد" />
                        <Picker.Item label="عمّان" value="عمّان" />
                        <Picker.Item label="عجلون" value="عجلون" />
                        <Picker.Item label="جرش" value="جرش" />
                        <Picker.Item label="الطفيلة" value="الطفيلة" />
                        <Picker.Item label="السلط" value="السلط" />
                        <Picker.Item label="الكرك" value="الكرك" />
                        <Picker.Item label="العقبة" value="العقبة" />
                        <Picker.Item label="معان" value="معان" />
                        <Picker.Item label="الزرقاء" value="الزرقاء" />
                        <Picker.Item label="مادبا" value="مادبا" />
                        <Picker.Item label="المفرق" value="المفرق" />
                    </Picker>
                </View>
                {/* Workers Fields Categories Component */}
                <CategoriesList style={styles.categoriesList} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 250,
        position: 'absolute',
        paddingTop: 15,
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
        flex: 1,
    },
    list : {
        flex: 1,
        backgroundColor: '#FFF',
        color: '#000',
        borderRadius: 25,
        width: '40%',
        alignSelf: 'center',

    }
})

