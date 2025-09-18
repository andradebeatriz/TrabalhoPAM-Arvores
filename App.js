import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView} from 'react-native';  
import Lista from './components/Lista';

export default function App() {
      
  return (
    <View style={styles.container}>
      <Lista/>
    </View>
    
  );
}  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
