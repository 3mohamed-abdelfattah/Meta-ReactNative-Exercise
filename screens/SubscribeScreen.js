import * as React from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  // Add subscribe screen code here
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require('../assets/little-lemon-logo-grey.png')}
        style={{ width: 200, height: 200, alignSelf: 'center' }}
      />

      <Text style={styles.regularText}>
        Subscribe to our newsletter for our latest delicious recipies!
      </Text>

      <TextInput
        placeholder="Type your email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        clearButtonMode={true}
      />

      <Pressable
        style={
          validateEmail(email) ? styles.enabledButton : styles.disabledButton
        }
        onPress={() =>
          validateEmail(email)
            ? (Alert.alert('Thanks for subscribing, stay tuned!'),
              navigation.navigate('Welcome'))
            : null
        }>
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  regularText: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#3e524b',
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
  enabledButton: {
    backgroundColor: '#3e524b',
    padding: 10,
    margin: 20,
    borderRadius: 15,
  },
  disabledButton: {
    backgroundColor: 'grey',
    padding: 10,
    margin: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
