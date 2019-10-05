import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import avatar from "../../assets/ContactModal/avatar.png";
import FieldOfWork from "../../assets/ContactModal/FieldOfWork.png";
import Location from "../../assets/ContactModal/Location.png";
import behavior from "../../assets/ContactModal/behavior.png";
import money from "../../assets/ContactModal/money.png";

const ProfileScreen = props => {
  const [user, setUser] = useState({
    fullName: "مصطفى",
    phoneNumber: "0777753111",
    field: "كهربجي",
    location: "جرش",
    experience: 3,
    hourlyFare: 22
  });

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then(user => {
        user = JSON.parse(user);
        setUser(user); // user
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, [props.navigation.getParam("user"), props.navigation.getParam("user")]);

  const goHome = () => {
    props.navigation.navigate("Home", { user });
  };

  const logOut = () => {
    AsyncStorage.clear();
    props.navigation.navigate("Home", { user });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View
          style={{ width: "90%", flexDirection: "row", justifyContent: "space-between"}}
        >
          <TouchableOpacity onPress={goHome}>
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
          <TouchableOpacity onPress={logOut}>
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
        <Text style={styles.personalInfo}>{user.fullName}</Text>
        <Text style={styles.personalInfo}>{user.phoneNumber}</Text>
      </View>
      {/* End Header */}

      {/* Information */}
      <View style={styles.info}>
        {/* First Column */}
        <View style={styles.firstColumn}>
          {/* Field Of Work */}
          <View style={styles.innerInfo}>
            <Text style={styles.innerInfoTxt}>{user.field}</Text>
            <Image
              source={FieldOfWork}
              style={{ width: 30, height: 30, resizeMode: "contain" }}
            />
          </View>
          {/* Experience */}
          <View style={styles.innerInfo}>
            <Text style={styles.innerInfoTxt}>
              {user.experience + ` سنين خبرة `}
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
            <Text style={styles.innerInfoTxt}>{user.location}</Text>
            <Image
              source={Location}
              style={{ width: 30, height: 30, resizeMode: "contain" }}
            />
          </View>
          {/* Fare */}
          <View style={styles.innerInfo}>
            <Text style={styles.innerInfoTxt}>
              {user.hourlyFare + ` دينار بالساعة `}
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
          onPress={() => props.navigation.navigate("EditProfile")}
          style={styles.callBtn}
        >
          <Text style={styles.btnText}>تعديل</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
