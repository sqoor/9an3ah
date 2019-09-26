import React from 'react';
import { StyleSheet, Text, View ,Button } from 'react-native';
import ProfileScreen from './Components/Profile/ProfileScreen';
import ModalExample from './Components/Profile/ModalExample'
import EditProfile from './Components/Profile/EditProfile'

export default function App() {
  return (
    <View style={styles.container}>
      <EditProfile/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
