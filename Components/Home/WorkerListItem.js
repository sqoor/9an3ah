import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const WorkerListItem = (props) => {
    const img = require("../../assets/Home/avatar.png")
    return (
        <TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate('Details')}>
            <View >
                <Image style={styles.img} source={img} />
                <View style={styles.txtContainer}>
                    <Text style={styles.text, styles.nameTxt}>{props.name}</Text>
                    <Text style={styles.text}>{props.field}</Text>
                    <Text style={styles.text}>{props.location}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    item: {
        width: '46%',
        borderRadius: 20,
        justifyContent: "center",
        margin: 8,
        elevation: 4,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#000',
        shadowRadius: 2,
        shadowOpacity: 0.8,
    },
    img: {
        resizeMode: "contain",
        width: '100%',
        marginHorizontal: 2

    },
    text: {
        flex: 1,
    },
    nameTxt: {
        fontSize: 24,
        fontWeight: "bold"
    },
    infoTxt: {
        fontSize: 18,
        color: '#A7A7A7',
    },
    txtContainer: {
        width: '70%',
        alignSelf: "flex-end",
        marginEnd: 10,
        marginStart: 10,
        paddingBottom: 10
    }
})

export default WorkerListItem;
