import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import CategoryItem from './CategoryItem'
const CategoriesList = () => {
    return (
        <View>
            <View>
                <ScrollView
                    horizontal={true}>
                        <CategoryItem img='../../assets/Home/parquet.svg' title='بلّيط' />
                        <CategoryItem img='../../assets/Home/paint-brush.svg' title='دهّين' />
                        <CategoryItem img='../../assets/Home/crane.svg' title='بنّاء' />
                        <CategoryItem img='../../assets/Home/delivery-truck.svg' title='ونش' />
                        <CategoryItem img='../../assets/Home/cargo.svg' title='قصّير' />
                        <CategoryItem img='../../assets/Home/tap.svg' title='مواسرجي' />
                        <CategoryItem img='../../assets/Home/7dad.svg' title='حداد' />
                        <CategoryItem img='../../assets/Home/carpenter.svg' title='نجار' />
                        <CategoryItem img='../../assets/Home/electrician.svg' title='كهربجي' />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default CategoriesList;
