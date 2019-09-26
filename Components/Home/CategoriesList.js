import React from 'react';
import { View,  ScrollView, StyleSheet } from 'react-native'
import CategoryItem from './CategoryItem'


const CategoriesList = () => {
    return (
        <View style={styles.categoriesList}>
            <ScrollView horizontal={true}>

                <CategoryItem img={require('../../assets/Home/parquet.png' )}title='بلّيط' />
                <CategoryItem img={require('../../assets/Home/paint-brush.png')} title='دهّين' />
                <CategoryItem img={require('../../assets/Home/crane.png' )}title='بنّاء' />
                <CategoryItem img={require('../../assets/Home/delivery-truck.png')} title='ونش' />
                <CategoryItem img={require('../../assets/Home/cargo.png' )}title='قصّير' />
                <CategoryItem img={require('../../assets/Home/tap.png' )}title='مواسرجي' />
                <CategoryItem img={require('../../assets/Home/Smith.png' )}title='حداد' />
                <CategoryItem img={require('../../assets/Home/carpenter.png' )}title='نجار' />
                <CategoryItem img={require('../../assets/Home/electrician.png' )}title='كهربجي' />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    categoriesList : {
        marginTop: 20,
        height:'40%',
        width:'100%',
        justifyContent: "space-between",
        alignItems: "center",
    }
})

export default CategoriesList;
