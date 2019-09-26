import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'

const WorkerListItem = (props) => {
    return (
        <View style={styles.item}>
            <Image style={styles.img} source={require('../../assets/Home/avatar.png')} />
            <View style={styles.txtContainer}>
                <Text style={styles.text}>مصطفى</Text>
                <Text style={styles.text}>نجّار</Text>
                <Text style={styles.text}>اربد</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    item: {
        height: 200,
        width: 200,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: "space-between"
        // shadowOffset: { width: 10, height: 10, },
        // shadowColor: 'black',
        // shadowOpacity: 1.0,
    },
    img: {
        flex: 2,
        resizeMode: "contain",
        width: 200
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
