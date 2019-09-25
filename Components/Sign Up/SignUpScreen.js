import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Picker,
  TouchableOpacity,
  Image
} from "react-native";

import Logo from './Logo';


const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Logo width={100} height={100} />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>الاسم</Text>
        <TextInput
          placeholder="ادخل اسمك"
          style={styles.input}
          onChangeText={text => console.log(text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>الاسم</Text>
        <TextInput
          placeholder="ادخل اسمك"
          style={styles.input}
          onChangeText={text => console.log(text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>الاسم</Text>
        <TextInput
          placeholder="ادخل اسمك"
          style={styles.input}
          onChangeText={text => console.log(text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Picker
          //   selectedValue={this.state.language}
          style={{ height: 50, width: 100, color: "white" }}
          onValueChange={
            (itemValue, itemIndex) => console.log(itemIndex, itemValue)
            // this.setState({ language: itemValue })
          }
        >
          <Picker.Item label="عمان" value="java" />
          <Picker.Item label="اربد" value="js" />
          <Picker.Item label="جرش" value="js" />
          <Picker.Item label="زرقاء" value="js" />
          <Picker.Item label="زرقاء" value="js" />
        </Picker>
      </View>

      <View style={styles.inputGroup}>
        <TouchableOpacity>
          <Text style={styles.submitBtn}>تسجيل دخول</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE346"
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
    borderRadius: 10
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
    borderRadius: 10
  }
});
