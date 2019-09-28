import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const CategoryItem = (props) => {

    return (
        <TouchableOpacity style={styles.categoryItem} onPress={() => {props.onFilter}}>
            <View style={styles.categoryItem}>
                <Image style={styles.img} source={props.img} />
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    categoryItem: {
        margin: 8,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain",

    },
    img: {
        flex: 1,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 500,
        width: 50,
        height: 50,
        backgroundColor: '#FFF'

    },
    title: {
        flex: 1,
        color: '#000',
    }
})

export default CategoryItem;
