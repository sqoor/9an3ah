import { View, Image, Text, StyleSheet } from 'react-native';

const CategoryItem = (props) => {

    return (
        <View>
            <Image source={props.img} ></Image>
            <Text>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {

    },
    title: {

    }
})

export default CategoryItem;
