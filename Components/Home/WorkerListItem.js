import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const WorkerListItem = (props) => {
    return (
        <View style={styles.item}>
            <Image style={styles.img} source={props.img} />
            <View style={styles.txtContainer}>
                <Text style={styles.text, styles.nameTxt}>{props.name}</Text>
                <Text style={styles.text}>{props.field}</Text>
                <Text style={styles.text}>{props.location}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        width: '50%',
        // flex: 1,
        borderRadius: 20,
        justifyContent: "center",
        margin: 8,
        shadowOffset: { width: 2, height: 0 },
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2
    },
    img: {
        resizeMode: "contain",
        width: '100%',

    },
    text: {
        flex:1,
    },
    nameTxt: {
        fontSize: 24,
        fontWeight: "bold"
    },
    infoTxt: {
        fontSize: 18,
        color:'#A7A7A7',
    },
    txtContainer: {
        width: '70%',
        alignSelf: "flex-end",
        marginEnd: 10,
        marginStart: 10,
        paddingBottom:10
    }
})

export default WorkerListItem;
