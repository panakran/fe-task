import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Point of interests demo application</Text>
      <Button title="Available POIS" onPress={() => navigation.navigate('Points of Interest')}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 20,
    marginBottom: 100
  }
});
