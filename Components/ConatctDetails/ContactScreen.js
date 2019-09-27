import React, { Component } from 'react';
import { StyleSheet, View, Text, Modal, TouchableOpacity, Image, Linking } from 'react-native'
import AVATART from '../../assets/ContactModal/AVATART.png';
import FieldOfWork from '../../assets/ContactModal/FieldOfWork.png';
import Location from '../../assets/ContactModal/Location.png';
import behavior from '../../assets/ContactModal/behavior.png';
import money from '../../assets/ContactModal/money.png';

export default class ContactScreen extends Component {
  state = {
    fullName: "مصطفى",
    phoneNumber: "0778854547",
    location: 'عمان ',
    experience: '7',
    field: 'نجار',
    hourlyFare: '20',
    modalVisible: false,
  }
  Modal(visible) {
    this.setState({ modalVisible: visible });
  }
  calling = () => {
    let phoneNumber = `tel:${this.state.phoneNumber}`;
    Linking.openURL(phoneNumber)
  }
  render() {
    return (
      <View >
        <View >
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
          >
            <View style={styles.container}>
              <Image
                source={AVATART}
                style={{ width: 100, height: 100,resizeMode:'contain' }} />


              <Text style={styles.personalinfo}>{this.state.fullName}</Text>
              <Text style={styles.personalinfo}>{this.state.phoneNumber}</Text>
            </View>

            <View style={styles.info}>
              <View style={styles.row1}>
                <View style={styles.innerInfo}><Text style={styles.row1}> <Image  source={Location}
              style={{ width: 30, height: 30,resizeMode:'contain' }}
              />{this.state.location}</Text></View>
                <View style={styles.innerInfo}><Text style={styles.row1}> <Image  source={FieldOfWork}
              style={{ width: 30, height: 30,resizeMode:'contain' }}
              />{this.state.field}</Text></View>
              </View>
              <View style={styles.row1}>
                <View style={styles.innerInfo}><Text style={styles.row1}><Image  source={money}
              style={{ width: 30, height: 30,resizeMode:'contain' }}
              />{this.state.hourlyFare + `دينار بالساعة`}</Text></View>
                <View style={styles.innerInfo}><Text style={styles.row1}><Image  source={behavior}
              style={{ width: 30, height: 30,resizeMode:'contain' }}
              />{this.state.experience + `سنين خبرة`}</Text></View>
              </View>
            </View>

            {/* Bottons Container */}
            <View style={styles.btns}>
              {/* Call Botton */}
              <TouchableOpacity
                onPress={this.calling}
                style={styles.callBtn}
              >
                <Text style={styles.btnText}>إتصال</Text>
              </TouchableOpacity>
              {/* Cancle Botton */}
              <TouchableOpacity
                onPress={() => {
                  this.Modal(false);
                }}
                style={styles.cancleBtn}
              >
                <Text style={styles.btnText}>إلغاء</Text>
              </TouchableOpacity>
            </View>

          </Modal>
          <TouchableOpacity
            onPress={() => {
              this.Modal(true);
            }}>
            <Text>Show Modal</Text>

          </TouchableOpacity>
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  innerInfo: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:'#FFF',
    borderWidth: 2,
    // backgroundColor: '#000',
  },
  //Bottons Container
  btns: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "center",
    width: '100%'
  },
  //Cancle Botton
  cancleBtn: {
    paddingVertical: 15,
    margin: 10,
    width: '100%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FD8469",
    borderRadius: 10,
  },
  //Call Botton
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
  // Botton Titles
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
    alignItems:'center',
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
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 18,
    color: '#000',
    margin: 8

  },
  personalinfo: {
    fontSize: 18,
  },
});




