import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import LoginScreen from './LoginScreen';
import LittleLemonHeader from './components/LittleLemonHeader';
import WindowD from './components/WindowD';

export default function App() {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <LittleLemonHeader />
        <LoginScreen />
        <WindowD />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFAF3',
  },
});


