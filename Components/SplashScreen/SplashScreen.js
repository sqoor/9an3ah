import React from 'react';
import {View, Image, StyleSheet} from 'react-native'
const SplashScreen = () => {
    return (
        <View style={styles.splash}>
            <Image style={style.logo}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    splash : {
        backgroundColor: '#FFE346',
        justifyContent: "center",
        alignItems: "center"
    }
})

export default SplashScreen;
