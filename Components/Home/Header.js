import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Picker,
  AsyncStorage
} from "react-native";
import CategoriesList from "./CategoriesList";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      field: ""
    };
  }

  pickField = async field => {
    await this.setState({ field });
    this.filterWorkers();
  };

  filterWorkers = () => {
    this.props.filterWorkers(this.state)
  };


  isUserLogged = () => {
    
  }
  

  render() {
    return (
      <View style={styles.header}>
        {/* Search & Profile Avatar*/}
        <View style={styles.searchSection}>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: 70,
              height: 70
            }}
            onPress={() => {
              AsyncStorage.getItem("user")
              .then(user => {
                const gotTo = user ? "Profile" : "Login";
                this.props.navigation.navigate(gotTo)
              })
              .catch(err => console.log(err));
              }
            }
          >
            <Image
              style={styles.profileIcon}
              source={require("../../assets/Home/man.png")}
            />
          </TouchableOpacity>
          {/* "JORDAN" Cities List */}
          <View style={styles.citiesList}>
            <Picker
              selectedValue={this.state.location}
              onValueChange={async text => {
                await this.setState({ location: text });
                this.filterWorkers();
              }}
            >
              <Picker.Item label="اختار المحافظة ..." value="" />
              <Picker.Item label="عمان" value="عمان" />
              <Picker.Item label="اربد" value="اربد" />
              <Picker.Item label="عجلون" value="عجلون" />
              <Picker.Item label="جرش" value="جرش" />
              <Picker.Item label="الطفيلة" value="الطفيلة" />
              <Picker.Item label="السلط" value="السلط" />
              <Picker.Item label="الكرك" value="الكرك" />
              <Picker.Item label="العقبة" value="العقبة" />
              <Picker.Item label="معان" value="معان" />
              <Picker.Item label="الزرقاء" value="الزرقاء" />
              <Picker.Item label="مادبا" value="مادبا" />
              <Picker.Item label="المفرق" value="المفرق" />
            </Picker>
          </View>
        </View>

        {/* Workers Fields Categories Component */}
        <CategoriesList
          style={styles.categoriesList}
          pickField={this.pickField}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 225,
    position: "absolute",
    paddingTop: 20,
    top: 0,
    left: 0,
    backgroundColor: "#FFE346",
    flex: 1
  },
  searchSection: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  profileIcon: {
    flex: 1,
    width: 40,
    height: 40,
    resizeMode: "contain"
  },
  categoriesList: {
    flex: 1,
  },
  citiesList: {
    flex: 1,
    backgroundColor: "#FFF",
    color: "#000",
    borderRadius: 25,
    width: "50%",
    alignSelf: "center",
    textAlign: "center",
    marginTop: 4
  }
});
