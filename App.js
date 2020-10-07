import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, LogBox } from 'react-native';
import Login from './components/Login';
import CreatAcount from './components/CreatAcount';
import Header from './components/Header';
import Friend from './components/Friend';


export default function App() {
  return (
    <View style={styles.container}>
        <Friend></Friend>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
   // backgroundColor: "#f4fbd2",
    marginTop: 20
    
    
  },
  
  
});
