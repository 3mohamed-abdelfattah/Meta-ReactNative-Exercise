import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  View,
} from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn, onLogin] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{
            uri: 'https://play-lh.googleusercontent.com/t_XvMjLc2uxTVXMiQatnBGbmRDuu_6-5cbPzJJhyaPyBh4iPAqqJ2MwOo0JAxScRwUqL=w240-h480-rw',
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {loggedIn && <Text style={styles.headerText}>You are logged in!</Text>}
      {!loggedIn && (
        <>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'email'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={'password'}
            keyboardType={'default'}
            secureTextEntry={true}
          />
          <Pressable onPress={() => onLogin(!loggedIn)} style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#0A6847',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#0A6847',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '0A6847',
    backgroundColor: '#F7F1D4',
    marginHorizontal: 100,
    borderRadius: 15,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#F3CA52',
    borderColor: '#F3CA52',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: '#0A6847',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  image: {
    width: 200,
    height: 200,
    margin: 10,
    borderRadius: 100,
  },
});

