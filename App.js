import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ChildComponent from './Component/ChildComponent';
import Counter from './Component/Counter';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />

     <ChildComponent/> // ເອິ້ນໃຊ້ Props
     <Counter/>  // ເອິ້ນໃຊ້ State
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
