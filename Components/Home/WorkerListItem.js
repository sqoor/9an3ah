import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const WorkerListItem = (props) => {
    return (
        <View style={styles.item}>
            <Image style={styles.img} source={props.img} />
            <View style={styles.txtContainer}>
                <Text style={styles.text}>{props.name}</Text>
                <Text style={styles.text}>{props.field}</Text>
                <Text style={styles.text}>{props.location}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        width: 150,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: "space-between",
        // shadowOffset: { width: 0, height: 2 },
        // shadowColor: '#000',
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 6
    },
    img: {
        flex: 2,
        resizeMode: "contain",
        width: 150
    },
    text: {
        flex: 1,
        margin:5
    },
    txtContainer: {
        padding:10,
        flex: 1,
    }
})

export default WorkerListItem;
