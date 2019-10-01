import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";

const CategoriesList = props => {
  return (
    <View style={styles.categoriesList}>
      <ScrollView horizontal={true}>
        <CategoryItem
          img={require("../../assets/Home/parquet.png")}
          title="بلّيط"
          pickField={props.pickField}
        />
        <CategoryItem
          img={require("../../assets/Home/paint-brush.png")}
          title="دهّين"
          pickField={props.pickField}
        />
        <CategoryItem
          img={require("../../assets/Home/crane.png")}
          title="بنّاء"
          pickField={props.pickField}
        />
        <CategoryItem
          img={require("../../assets/Home/delivery-truck.png")}
          title="ونش"
          pickField={props.pickField}
        />
        <CategoryItem
          img={require("../../assets/Home/cargo.png")}
          title="قصّير"
          pickField={props.pickField}
        />
        <CategoryItem
          img={require("../../assets/Home/tap.png")}
          title="مواسرجي"
          pickField={props.pickField}
        />
        <CategoryItem
          img={require("../../assets/Home/Smith.png")}
          title="حداد"
          pickField={props.pickField}
        />
        <CategoryItem
          img={require("../../assets/Home/carpenter.png")}
          title="نجار"
          pickField={props.pickField}
        />
        <CategoryItem
          img={require("../../assets/Home/electrician.png")}
          title="كهربجي"
          pickField={props.pickField}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesList: {
    marginTop: 20,
    height: "40%",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default CategoriesList;
