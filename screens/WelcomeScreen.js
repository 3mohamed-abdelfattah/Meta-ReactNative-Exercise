import * as React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image resizeMode='contain' source={require('../assets/little-lemon-logo.png')} style={{ width: 200, height: 200, alignSelf: 'center' }} />
        <Text style={styles.regularText}>Little Lemon, your local Meditetarian Bistro</Text>
      </View>
      <View style={styles.buttonArea}>
        <Pressable onPress={() => navigation.navigate('Subscribe')} style={styles.button}>
          <Text style={styles.buttonText}>Newsletter</Text>
        </Pressable>
      </View>
    </View>
  )
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 0.85,
    justifyContent: 'center',
    alignContent: 'center',
  },
  buttonArea: {
    flex: 0.15,
  },
  regularText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20
  },
  button: {
    backgroundColor: '#3e524b',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
})
