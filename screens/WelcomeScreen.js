import * as React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { navigate } from './../node_modules/@react-navigation/routers/src/CommonActions';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View>
      <Image source={require('/assets/little-lemon-logo.png')} />
      <Text>Little Lemon, your local Mediterranean Bistro</Text>
      <Pressable onPress={() => navigation.navigate('Subscribe')}>
        <Text>Newsletter</Text>
      </Pressable>
    </View>
  )
};

export default WelcomeScreen;
