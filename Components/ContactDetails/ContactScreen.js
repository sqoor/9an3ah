import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Linking } from 'react-native'
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


  const { navigation } = props;

  useEffect(() => {
    setFullName(navigation.getParam('fullName'));
    setPhoneNumber(navigation.getParam('phoneNumber'));
    setLocation(navigation.getParam('location'));
    setExperience(navigation.getParam('experience'));
    setField(navigation.getParam('field'));
    setHourlyFare(navigation.getParam('hourlyFare'));
  }, [])

  calling = () => {
    let goToPhone = `tel:${phoneNumber}`;
    Linking.openURL(goToPhone)
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={avatar}
          style={{ width: 100, height: 100, resizeMode: 'contain' }} />
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
            <Image source={FieldOfWork}
              style={{ width: 30, height: 30, resizeMode: 'contain' }}
            />
          </View>
          {/* Experience */}
          <View style={styles.innerInfo}>
            <Text style={styles.innerInfoTxt}>{experience + ` سنين خبرة `}</Text>
            <Image source={behavior}
              style={{ width: 30, height: 30, resizeMode: 'contain' }}
            />
          </View>

        </View>
        {/* End First Row */}

        {/* Second Column */}
        <View style={styles.secondColumn}>
          {/* Location */}
          <View style={styles.innerInfo}>
            <Text style={styles.innerInfoTxt}>{location}</Text>
            <Image source={Location}
              style={{ width: 30, height: 30, resizeMode: 'contain' }} />
          </View>
          {/* Fare */}
          <View style={styles.innerInfo}>
            <Text style={styles.innerInfoTxt}>{hourlyFare + ` دينار بالساعة `}</Text>
            <Image source={money}
              style={{ width: 30, height: 30, resizeMode: 'contain' }}
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
          onPress={calling}
          style={styles.callBtn}
        >
          <Text style={styles.btnText}>إتصال</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },

  header: {
    display: 'flex',
    height: 250,
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#FFE346',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 350,
    height: 200,
    backgroundColor: 'white',
    borderColor: '#FFE346',
    borderRadius: 10,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
    marginTop: 10
  },
  firstColumn: {
    flex: 1,
    width: '40%',
    margin: 12,
    justifyContent: 'space-around',
  },
  secondColumn: {
    flex: 1,
    width: '40%',
    margin: 12,
    justifyContent: 'space-around',
  },
  innerInfo: {
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerInfoTxt: {
    fontSize: 18,
    marginRight: 8
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
    fontSize: 26,
    fontWeight: 'bold'
  },

  personalInfo: {
    fontSize: 18,
  },
});

export default ContactScreen;





