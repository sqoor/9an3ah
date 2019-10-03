import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  Linking,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import avatar from "../../assets/ContactModal/avatar.png";
import FieldOfWork from "../../assets/ContactModal/FieldOfWork.png";
import Location from "../../assets/ContactModal/Location.png";
import behavior from "../../assets/ContactModal/behavior.png";
import money from "../../assets/ContactModal/money.png";

class ProfileScreen extends Component {
  state = {
    fullName: "مصطفى",
    phoneNumber: "0777753111",
    field: "كهربجي",
    location: "جرش",
    experience: 3,
    hourlyFare: 22
  };

  async componentDidMount() {
    let loggedUser = await AsyncStorage.getItem("user");
    loggedUser = JSON.parse(loggedUser);

    this.setState({
      fullName: loggedUser.fullName,
      phoneNumber: loggedUser.phoneNumber,
      field: loggedUser.field,
      location: loggedUser.location,
      experience: loggedUser.experience,
      hourlyFare: loggedUser.hourlyFare
    });
  }

  goHome = () => {
    this.props.navigation.navigate("Home");
  };

  logOut = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate("Home");
  };

  render() {
    const {
      fullName,
      phoneNumber,
      field,
      experience,
      location,
      hourlyFare
    } = this.state;
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View
            stle={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <TouchableOpacity onPress={this.goHome}>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  padding: 5,
                  margin: 7,
                  borderColor: "red",
                  borderRadius: 10,
                  borderWidth: 1,
                  width: 74
                }}
              >
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.logOut}>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  padding: 5,
                  margin: 7,
                  borderColor: "red",
                  borderRadius: 10,
                  borderWidth: 1,
                  width: 74
                }}
              >
                Log out
              </Text>
            </TouchableOpacity>
          </View>
          <Image
            source={avatar}
            style={{ width: 100, height: 100, resizeMode: "contain" }}
          />
          <Text style={styles.personalInfo}>{fullName}</Text>
          <Text style={styles.personalInfo}>{phoneNumber}</Text>
        </View>
        {/* End Header */}

        {/* Information */}
        <View style={styles.info}>
          {/* First Column */}
          <View style={styles.firstColumn}>
            {/* Field Of Work */}
            <View style={styles.innerInfo}>
              <Text style={styles.innerInfoTxt}>{field}</Text>
              <Image
                source={FieldOfWork}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
              />
            </View>
            {/* Experience */}
            <View style={styles.innerInfo}>
              <Text style={styles.innerInfoTxt}>
                {experience + ` سنين خبرة `}
              </Text>
              <Image
                source={behavior}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
              />
            </View>
          </View>
          {/* End First Row */}

          {/* Second Column */}
          <View style={styles.secondColumn}>
            {/* Location */}
            <View style={styles.innerInfo}>
              <Text style={styles.innerInfoTxt}>{location}</Text>
              <Image
                source={Location}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
              />
            </View>
            {/* Fare */}
            <View style={styles.innerInfo}>
              <Text style={styles.innerInfoTxt}>
                {hourlyFare + ` دينار بالساعة `}
              </Text>
              <Image
                source={money}
                style={{ width: 30, height: 30, resizeMode: "contain" }}
              />
            </View>
          </View>
          {/* End Second Row */}
        </View>
        {/* End Information */}

        {/* Buttons */}
        <View style={styles.btns}>
          {/* Call Button */}
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("EditProfile")}
            style={styles.callBtn}
          >
            <Text style={styles.btnText}>تعديل</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },

  header: {
    display: "flex",
    height: 250,
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#FFE346",
    alignItems: "center",
    justifyContent: "center"
  },
  info: {
    flexDirection: "row",
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 350,
    height: 200,
    backgroundColor: "white",
    borderColor: "#FD8469",
    borderRadius: 10,
    borderWidth: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
    marginTop: 10
  },
  firstColumn: {
    flex: 1,
    width: "40%",
    margin: 12,
    justifyContent: "space-around"
  },
  secondColumn: {
    flex: 1,
    width: "40%",
    margin: 12,
    justifyContent: "space-around"
  },
  innerInfo: {
    width: "100%",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center"
  },
  innerInfoTxt: {
    fontSize: 18,
    marginRight: 8
  },
  btns: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%"
  },
  cancelBtn: {
    paddingVertical: 15,
    margin: 10,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FD8469",
    borderRadius: 10
  },
  callBtn: {
    paddingVertical: 15,
    margin: 10,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FD8469",
    borderRadius: 10
  },
  btnText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white"
  },

  personalInfo: {
    fontSize: 18
  }
});

export default ProfileScreen;

/*
 */
