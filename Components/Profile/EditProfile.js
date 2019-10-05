import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  Picker
} from "react-native";
import Axios from "axios";

export default EditProfile = props => {
  const [updatedUser, setUpdatedUser] = useState({
    _id: "",
    email: "",
    experience: "",
    field: "",
    fullName: "",
    hourlyFare: "",
    location: "",
    password: "",
    phoneNumber: ""
  });
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    AsyncStorage.getItem("user")
      .then(user => {
        user = JSON.parse(user);
        setLoggedUser(user);

        setUpdatedUser({
          _id: user._id,
          email: user.email,
          experience: user.experience,
          field: user.field,
          fullName: user.fullName,
          hourlyFare: user.hourlyFare,
          location: user.location,
          password: user.password,
          phoneNumber: user.phoneNumber
        });
      })
      .catch(err => console.log("ERROR", err));
  }, [props.navigation.getParam("user")]);

  const submitEdit = async () => {
    Axios.put(
      "https://san3ah.herokuapp.com/workers/" + loggedUser._id,
      updatedUser
    )
      .then(async res => {
        let returnedUser = res.data.filter(
          worker => worker._id === loggedUser._id
        )[0];
        returnedUser = JSON.stringify(returnedUser);
        await AsyncStorage.setItem("user", returnedUser);

        props.navigation.navigate("Profile", {
          user: returnedUser
        });
      })
      .catch(err => console.log("Error", err));
  };

  return (
    <View
      style={{
        paddingTop: 40,
        paddingBottom: 40,
        backgroundColor: "#FFE346",
        height: "100%"
      }}
    >
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontSize: 22 }}>الاسم</Text>
          <TextInput
            style={{
              backgroundColor: "white",
              width: "80%",
              borderRadius: 5,
              fontSize: 24
            }}
            value={updatedUser.fullName}
            onChangeText={fullName =>
              setUpdatedUser(prevState => {
                return { ...prevState, fullName };
              })
            }
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
            value={updatedUser.email}
            onChangeText={email =>
              setUpdatedUser(prevState => {
                return { ...prevState, email };
              })
            }
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
            value={updatedUser.phoneNumber + ""}
            onChangeText={phoneNumber =>
              setUpdatedUser(prevState => {
                return { ...prevState, phoneNumber };
              })
            }
          />

          {/* <Text style={{ color: "white", fontSize: 22 }}>المهنة</Text> */}

          <Picker
            selectedValue={updatedUser.field}
            style={{ height: 50, width: 100, color: "white" }}
            onValueChange={field =>
              setUpdatedUser(prevState => {
                return { ...prevState, field };
              })
            }
          >
            <Picker.Item label="المهنة" value="" />
            <Picker.Item label="بليط" value="بليط" />
            <Picker.Item label="دهين" value="دهين" />
            <Picker.Item label="بناء" value="بناء" />
            <Picker.Item label="ونش" value="ونش" />
            <Picker.Item label="فصير" value="فصير" />
            <Picker.Item label="مواسرجي" value="مواسرجي" />
            <Picker.Item label="حداد" value="حداد" />
            <Picker.Item label="نجار" value="نجار" />
            <Picker.Item label="كهربجي" value="كهربجي" />
          </Picker>

          {/* <Text style={{ color: "white", fontSize: 22 }}>الموقع</Text> */}

          <Picker
            selectedValue={updatedUser.location}
            style={{ height: 50, width: 100, color: "white" }}
            onValueChange={location =>
              setUpdatedUser(prevState => {
                return { ...prevState, location };
              })
            }
          >
            <Picker.Item label="الموقع" value="" />
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

          <Text style={{ color: "white", fontSize: 22 }}>عدد سنوات الخبرة</Text>
          <TextInput
            style={{
              backgroundColor: "white",
              width: "80%",
              borderRadius: 5,
              fontSize: 24
            }}
            value={updatedUser.experience + ""}
            onChangeText={experience =>
              setUpdatedUser(prevState => {
                return { ...prevState, experience };
              })
            }
          />

          <Text style={{ color: "white", fontSize: 22 }}>الأجرة في الساعة</Text>
          <TextInput
            style={{
              backgroundColor: "white",
              width: "80%",
              borderRadius: 5,
              fontSize: 24
            }}
            value={updatedUser.hourlyFare + ""}
            onChangeText={hourlyFare =>
              setUpdatedUser(prevState => {
                return { ...prevState, hourlyFare };
              })
            }
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={submitEdit}
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
  );
};
