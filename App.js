import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, LogBox } from 'react-native';
import Login from './components/Login';
import CreatAcount from './components/CreatAcount';
import Header from './components/Header';
import Friend from './components/Friend';
import AllFriends from './components/AllFriends';
import SuggestionFriend from './components/SuggestionFriend';
import Popup from './components/Popup';


export default function App() {

  return (
    <View style={styles.container}>
      <AllFriends></AllFriends>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
   // backgroundColor: "#f4fbd2",
    marginTop: 20,
    
    
    
  },
  
  
});

