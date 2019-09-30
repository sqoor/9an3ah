import React from 'react';
import { StyleSheet} from 'react-native';
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
