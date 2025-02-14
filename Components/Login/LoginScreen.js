import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import axios from "axios";

import logo from "./logo.png";

class LoginScreen extends React.Component {
  state = {
    email: "",
    password: ""
  };

  // Authenticate Users. 
  setUser(loggedUser) {
    //Convert User Data To 'JSON'.
    loggedUser = JSON.stringify(loggedUser);
    //Store User Data In "AsyncStorage" After Logging In. 
    AsyncStorage.setItem("user", loggedUser);
  }

  submitHandler = e => {
    const user = {
      email: this.state.email.trim().toLowerCase(),
      password: this.state.password.trim()
    };

    axios
      .post("https://san3ah.herokuapp.com/auth", user)
      .then(res => {
        if (res.data.length) {
          this.setUser(res.data[0]);
          alert(`مرحبا ${res.data[0].fullName}`);
          this.props.navigation.navigate("Profile");
        } else alert("Email and password do not match");
      })
      .catch(err => console.log("ERROR", err));
  };

  // Navigate To Sign Up Screen.
  goToSignUp = () => {
    this.props.navigation.navigate("SignUp");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <View style={styles.inputGroup}>
          <Text style={styles.label}>الايميل</Text>
          <TextInput
            value={this.state.email}
            placeholder="ادخل ايميلك"
            style={styles.input}
            onChangeText={text => this.setState({ email: text })}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>كلمة السر</Text>
          <TextInput
            value={this.state.password}
            placeholder="كلمة السر"
            style={styles.input}
            onChangeText={text => this.setState({ password: text })}
          />
        </View>

        <View style={styles.inputGroup}>
          <TouchableOpacity onPress={this.submitHandler}>
            <Text style={styles.submitBtn}>تسجيل دخول</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <TouchableOpacity onPress={this.goToSignUp}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              مستخدم جديد؟
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE346",
    paddingTop: 50
  },
  logo: {
    width: 150,
    height: 80
  },
  inputGroup: {
    margin: 10
  },
  label: {
    marginRight: 7,
    marginBottom: 5,
    color: "white"
  },
  input: {
    width: 200,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: "grey",
    textAlign: "right",
    borderRadius: 10,
    backgroundColor: "white"
  },
  goal: {
    borderColor: "red",
    borderWidth: 2,
    backgroundColor: "grey",
    margin: 10,
    width: 50,
    textAlign: "center"
  },
  submitBtn: {
    color: "white",
    paddingHorizontal: 25,
    backgroundColor: "#FD8469",
    borderRadius: 10,
    padding: 10
  }
});
