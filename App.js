import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ContactScreen from './Components/Conatct Details/ContactScreen'

export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <ContactScreen/>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
