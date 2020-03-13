import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from './../components/Button';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>POIS demo application</Text>
      {/* <Button onPress={() => navigation.navigate('Points of Interest')}>Available POIS</Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
