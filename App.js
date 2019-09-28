import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import HomeScreen from './Components/Home/HomeScreen';
import WorkersNavigator from './Navigation/WorkersNavigator';

export default function App() {

  return <WorkersNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
