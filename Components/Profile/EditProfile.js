import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Axios from "axios";
import { Dropdown } from "react-native-material-dropdown";

export default class EditProfile extends Component {
  state = {
    _id: "",
    email: "",
    experience: "",
    field: "",
    fullName: "",
    hourlyFare: "",
    location: "",
    password: "",
    phoneNumber: ""
  };

  async componentDidMount() {
    let loggedUser = await AsyncStorage.getItem("user");
    loggedUser = JSON.parse(loggedUser);

    this.setState({
      _id: loggedUser._id,
      email: loggedUser.email,
      experience: loggedUser.experience,
      field: loggedUser.field,
      fullName: loggedUser.fullName,
      hourlyFare: loggedUser.hourlyFare,
      location: loggedUser.location,
      password: loggedUser.password,
      phoneNumber: loggedUser.phoneNumber
    });
  }

  submitEdit = async () => {
    let loggedUser = await AsyncStorage.getItem("user");
    loggedUser = JSON.parse(loggedUser);

    Axios.put(
      "https://san3ah.herokuapp.com/workers/" + loggedUser._id,
      this.state
    )
      .then(res => {
        let updatedUser = res.data.filter(worker => worker._id === loggedUser._id)[0];
        updatedUser = JSON.stringify(updatedUser);
        AsyncStorage.setItem('user', updatedUser);

        this.props.navigation.navigate('Profile');
      })
      .catch(err => console.log("Error", err));
  };

  render() {
    let data = [
      {
        value: "عمّان"
      },
      {
        value: "اربد"
      },
      {
        value: "السلط"
      },
      {
        value: "العقبة"
      },
      {
        value: "مفرق"
      },
      {
        value: "الزرقاء"
      },
      {
        value: "الطفيلة"
      },
      {
        value: "الكرك"
      },
      {
        value: "جرش"
      },
      {
        value: "مادبا"
      },
      {
        value: "عجلون"
      }
    ];

    let data2 = [
      {
        value: "نجّار"
      },
      { value: "حدّاد" },
      { value: "بلّيط" },
      { value: "دهّين" },
      { value: "بنّاء" },
      { value: "ونش" },
      { value: "قصّير" },
      { value: "مواسرجي" },
      { value: "كهربجي" },
      { value: "ميكانيكي" }
    ];

    return (
      <ScrollView style={{ marginVertical: 20 }}>
        <View
          style={{
            marginTop: 22,
            backgroundColor: "#FFE346",
            height: "100%"
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 22 }}>الاسم</Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: "80%",
                borderRadius: 5,
                fontSize: 24
              }}
              value={this.state.fullName}
              onChangeText={fullName => this.setState({ fullName })}
            />

            <Text style={{ color: "white", fontSize: 22 }}>
              البريد الالكتروني
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: "80%",
                borderRadius: 5,
                fontSize: 24
              }}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />

            <Text style={{ color: "white", fontSize: 22 }}>كلمة السًر</Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: "80%",
                borderRadius: 5,
                fontSize: 24
              }}
            />

            <Text style={{ color: "white", fontSize: 22 }}>رقم الهاتف</Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: "80%",
                borderRadius: 5,
                fontSize: 24
              }}
              value={this.state.phoneNumber + ""}
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
            />

            <Text style={{ color: "white", fontSize: 22 }}>المهنة</Text>

            <Dropdown
              data2={data2}
              value={this.state.field}
              onChangeText={field => this.setState({ field })}
            />

            <Text style={{ color: "white", fontSize: 22 }}>الموقع</Text>
            <Dropdown
              value={this.state.location}
              onChangeText={location => this.setState({ location })}
              label="أختر محافظة"
              data={data}
              style={{
                backgroundColor: "red",
                width: "40%",
                borderRadius: 5,
                fontSize: 10
              }}
            />

            <Text style={{ color: "white", fontSize: 22 }}>
              عدد سنوات الخبرة
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: "80%",
                borderRadius: 5,
                fontSize: 24
              }}
              value={this.state.experience + ""}
              onChangeText={experience => this.setState({ experience })}
            />

            <Text style={{ color: "white", fontSize: 22 }}>
              الأجرة في الساعة
            </Text>
            <TextInput
              style={{
                backgroundColor: "white",
                width: "80%",
                borderRadius: 5,
                fontSize: 24
              }}
              value={this.state.hourlyFare + ""}
              onChangeText={hourlyFare => this.setState({ hourlyFare })}
            />
          </View>

          <TouchableOpacity
            onPress={this.submitEdit}
            style={{
              backgroundColor: "#FF7F90",
              alignSelf: "center",
              width: "30%",
              marginTop: 25,
              borderRadius: 5
            }}
          >
            <Text
              style={{
                width: "40%",
                fontSize: 23,
                alignSelf: "center",
                alignContent: "center",
                color: "white"
              }}
            >
              حفظ
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
