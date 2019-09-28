import React, { Component } from 'react';
import { TextInput, View, ScrollView, TouchableOpacity } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown';


export default class EditProfile extends Component {
  render() {
    let data = [{
      value: 'عمّان',
    }, {
      value: 'اربد',
    }, {
      value: 'السلط',
    }, {
      value: 'العقبة',
    }, {
      value: 'مفرق',
    }, {
      value: 'الزرقاء',
    }, {
      value: 'الطفيلة',
    }, {
      value: 'الكرك',
    }, {
      value: 'جرش',
    }, {
      value: 'مادبا',
    }, {
      value: 'عجلون',
    }];
    let data2 = [{
      value: 'نجّار',
    },
    { value: 'حدّاد', },
    { value: 'بلّيط', },
    { value: 'دهّين', },
    { value: 'بنّاء', },
    { value: 'ونش', },
    { value: 'قصّير', },
    { value: 'مواسرجي', },
    { value: 'كهربجي', },
    { value: 'ميكانيكي', }]




    return (
      <ScrollView style={{ marginVertical: 20 }}>
        <View style={{ marginTop: 22, backgroundColor: "#FFE346", height: "100%" }}>

          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white", fontSize: 22 }}>الاسم</Text>
            <TextInput style={{ backgroundColor: "white", width: "80%", borderRadius: 5, fontSize: 24 }} />

            <Text style={{ color: "white", fontSize: 22 }}>البريد الالكتروني</Text>
            <TextInput style={{ backgroundColor: "white", width: "80%", borderRadius: 5, fontSize: 24 }} />

            <Text style={{ color: "white", fontSize: 22 }}>كلمة السًر</Text>
            <TextInput style={{ backgroundColor: "white", width: "80%", borderRadius: 5, fontSize: 24 }} />

            <Text style={{ color: "white", fontSize: 22 }}>رقم الهاتف</Text>
            <TextInput style={{ backgroundColor: "white", width: "80%", borderRadius: 5, fontSize: 24 }} />

            <Text style={{ color: "white", fontSize: 22 }}>المهنة</Text>
            <Dropdown data2={data2} />

            <Text style={{ color: "white", fontSize: 22 }}>الموقع</Text>
            <Dropdown label='أختر محافظة' data={data} style={{ backgroundColor: "red", width: "40%", borderRadius: 5, fontSize: 10 }} />

            <Text style={{ color: "white", fontSize: 22 }}>عدد سنوات الخبرة</Text>
            <TextInput style={{ backgroundColor: "white", width: "80%", borderRadius: 5, fontSize: 24 }} />

            <Text style={{ color: "white", fontSize: 22 }}>الأجرة في الساعة</Text>
            <TextInput style={{ backgroundColor: "white", width: "80%", borderRadius: 5, fontSize: 24 }} />
          </View>

          <TouchableOpacity style={{ backgroundColor: "#FF7F90", alignSelf: "center", width: "30%", marginTop: 25, borderRadius: 5 }}>
            <Text style={{ width: "40%", fontSize: 23, alignSelf: "center", alignContent: "center", color: "white" }} >حفظ</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>
    )

  }
}