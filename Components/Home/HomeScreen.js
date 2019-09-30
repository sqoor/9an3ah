import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import CategoriesList from "./CategoriesList";
import WorkerListItem from "./WorkerListItem";
import axios from "axios";

const HomeScreen = props => {
  // Hook State To Contain Array Of Workers.
  const [workers, setWorkers] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // @METHOD GET
  // Fetch Workers Data From Database.
  function fetchData() {
    axios
      .get("https://san3ah.herokuapp.com/workers")
      .then(response => {
        setWorkers(response.data);
      })
      .catch(error => {
        alert(error);
      });
  }

  //METHOD GET
  //Fetch Workers In A Specific Category
  function filterByCategory() {}

  // Execute "fetchData" Method Once The Component Open.
  useEffect(() => fetchData(), []);

  // Array Of "JORDAN" Cities.
  let cities = [
    {value: "اربد" },
    {value: "عمّان" },
    {value: "جرش" },
    {value: "عجلون"},
    {value: "المفرق"},
    {value: "مأدبا"},
    {value: "معان"},
    {value: "الطفيلة"},
    {value: "العقبة"},
    {value: "الكرك"},
    {value: "الزرقاء"},
    {value: "السلط"}
  ];

  // Get User Search Term.
  const searchHandler = enteredTerm => {
    setSearchTerm(enteredTerm);
  };

  return (
    <View>
      {/* App Bar */}
      <View style={styles.bar}>
        {/* Search & Profile Avatar*/}
        <View style={styles.searchSection}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 70,
              height: 70
            }}
            onPress={() => props.navigation.navigate({ routeName: "Profile" })}
          >
            <Image
              style={styles.profileIcon}
              source={require("../../assets/Home/man.png")}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="ابحث عن فنّي ..."
            placeholderTextColor="#A7A7A7"
            onChangeText={searchHandler}
            value={searchTerm}
          ></TextInput>
        </View>
        {/* "JORDAN" Cities List */}
        <Dropdown label="اختار المحافظة ..." data={cities} />
        {/* Workers Fields Categories Component */}
        <CategoriesList onFilter={filterByCategory} />
      </View>

      {/* Workers List */}
      <FlatList
        keyExtractor={item => item._id}
        data={workers}
        renderItem={result => (
          <WorkerListItem
            img={result.item.img} // undefineded
            name={result.item.fullName}
            field={result.item.field}
            location={result.item.location}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "#FFE346",
    height: "28%",
    width: "100%"
  },
  searchSection: {
    marginTop: 38,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    flex: 2.5,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#FFF",
    color: "#424242",
    borderRadius: 25
  },
  profileIcon: {
    flex: 0.5,
    width: 40,
    height: 40,
    resizeMode: "contain"
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10
  }
});

export default HomeScreen;
