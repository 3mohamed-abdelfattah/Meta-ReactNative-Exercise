import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.15,
    backgroundColor: '#F3CA52',
    borderRadius: 5,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#0A6847',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
