import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, Image, Linking } from 'react-native'
import avatar from '../../assets/ContactModal/avatar.png';
import FieldOfWork from '../../assets/ContactModal/FieldOfWork.png';
import Location from '../../assets/ContactModal/Location.png';
import behavior from '../../assets/ContactModal/behavior.png';
import money from '../../assets/ContactModal/money.png';

const ContactScreen = props => {

  //Hook State.
  const [fullName, setFullName] = useState("مصطفى");
  const [phoneNumber, setPhoneNumber] = useState("0777753111");
  const [location, setLocation] = useState("عمّان");
  const [experience, setExperience] = useState(7);
  const [field, setField] = useState("نجّار");
  const [hourlyFare, setHourlyFare] = useState(20);


  calling = () => {
    let phoneNumber = `tel:${phoneNumber}`;
    Linking.openURL(phoneNumber)
  }



  return (
    <View >

      {/* Header */}
      <View style={styles.container}>
        <Image
          source={avatar}
          style={{ width: 100, height: 100, resizeMode: 'contain' }} />
        <Text style={styles.personalInfo}>{fullName}</Text>
        <Text style={styles.personalInfo}>{phoneNumber}</Text>
      </View> {/* End Header */}

      {/* Information */}
      <View style={styles.info}>
        {/* First Row */}
        <View style={styles.row1}>
          {/* Location */}
          <View style={styles.innerInfo}>
            <Text style={styles.row1}>
              <Image source={Location}
                style={{ width: 30, height: 30, resizeMode: 'contain' }}
              />{location}</Text>
          </View>
          {/* Field Of Work */}
          <View style={styles.innerInfo}>
            <Text style={styles.row1}>
              <Image source={FieldOfWork}
                style={{ width: 30, height: 30, resizeMode: 'contain' }}
              />{field}
            </Text>
          </View>
        </View> {/* End First Row */}

        {/* Second Row */}
        <View style={styles.row1}>
          {/* Fare */}
          <View style={styles.innerInfo}>
            <Text style={styles.row1}>
              <Image source={money}
                style={{ width: 30, height: 30, resizeMode: 'contain' }}
              />{hourlyFare + `دينار بالساعة`}
            </Text>
          </View>
          {/* Experience */}
          <View style={styles.innerInfo}>
            <Text style={styles.row1}>
              <Image source={behavior}
                style={{ width: 30, height: 30, resizeMode: 'contain' }}
              />{experience + `سنين خبرة`}
            </Text>
          </View>
        </View> {/* End Second Row */}
      </View> {/* End Information */}

      {/* Buttons */}
      <View style={styles.btns}>
        {/* Call Button */}
        <TouchableOpacity
          onPress={calling}
          style={styles.callBtn}
        >
          <Text style={styles.btnText}>إتصال</Text>
        </TouchableOpacity>
        {/* Cancel Button */}
        <TouchableOpacity
          style={styles.cancelBtn}
        >
          <Text style={styles.btnText}>إلغاء</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  innerInfo: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: 2,
  },
  btns: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    width: '100%'
  },
  cancelBtn: {
    paddingVertical: 15,
    margin: 10,
    width: '100%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FD8469",
    borderRadius: 10,
  },
  callBtn: {
    paddingVertical: 15,
    margin: 10,
    width: '100%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE346",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 22
  },
  container: {
    display: 'flex',
    height: 200,
    marginBottom: 10,
    backgroundColor: '#FFE346',
    alignItems: 'center',
    justifyContent: 'center',

  },

  info: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 190,
    marginLeft: 25,
    backgroundColor: 'white',
    borderColor: '#FFE346',
    borderRadius: 10,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
  },
  row1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 18,
    color: '#000',
    margin: 8

  },
  personalInfo: {
    fontSize: 18,
  },
});

export default ContactScreen;





