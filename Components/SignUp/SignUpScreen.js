import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";

import logo from './logo.png';

class SignUpScreen extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    location: "",
    hourlyFare: "",
    experience: "",
    field: ""
  };

  submitHander = () => {
    /* Axios.post("url", this.state)
    .then(res => console.log(res))
    .catch(err => console.log(err)); */

    console.log(this.state);
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          
          <Image source={logo} style={styles.logo} />

          <View style={styles.inputGroup}>
            <Text style={styles.label}>الاسم</Text>
            <TextInput
              value={this.state.fullName}
              placeholder="ادخل اسمك"
              style={styles.input}
              onChangeText={text => this.setState({ fullName: text })}
            />
          </View>

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
            <Text style={styles.label}>رقم الهاتف</Text>
            <TextInput
              value={this.state.phoneNumber}
              placeholder="رقم الهاتف"
              style={styles.input}
              onChangeText={text => this.setState({ phoneNumber: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Picker
              selectedValue={this.state.field}
              style={{ height: 50, width: 100, color: "white" }}
              onValueChange={text => this.setState({ field: text })}
            >
              <Picker.Item label="المهنة" value="" />
              <Picker.Item label="حداد" value="حداد" />
              <Picker.Item label="موسارجي" value="موسارجي" />
              <Picker.Item label="نجار" value="نجار" />
              <Picker.Item label="بليط" value="بليط" />
              <Picker.Item label="قصيير" value="قصيير" />
            </Picker>
          </View>

          <View style={styles.inputGroup}>
            <Picker
              selectedValue={this.state.location}
              style={{ height: 50, width: 100, color: "white" }}
              onValueChange={itemValue =>
                this.setState({ location: itemValue })
              }
            >
              <Picker.Item label="الموقع" value="" />
              <Picker.Item label="عمان" value="عمان" />
              <Picker.Item label="اربد" value="اربد" />
              <Picker.Item label="الزرقاء" value="الزرقاء" />
              <Picker.Item label="البلقاء" value="البلقاء" />
            </Picker>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>عدد سنين الخبرة</Text>
            <TextInput
              value={this.state.experience}
              placeholder="عدد سنين الخبرة"
              style={styles.input}
              onChangeText={text => this.setState({ experience: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>الاجرة في الساعة</Text>
            <TextInput
              value={this.state.hourlyFare}
              placeholder="دينار اردني"
              style={styles.input}
              onChangeText={text => console.log(text)}
              onChangeText={text => this.setState({ hourlyFare: text })}
            />
          </View>

          <View style={styles.inputGroup}>
            <TouchableOpacity onPress={this.submitHander}>
              <Text style={styles.submitBtn}>تسجيل دخول</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default SignUpScreen;

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
    // direction: "rtl",
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
