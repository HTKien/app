import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
const width100 = "100%";
const Header = () => (
  <View style={styles.containerHeader}>
        <MaterialIcons name="home" size={25} color="#575757" />
        <FontAwesome5 name="user-friends" size={25} color="#1776f5" />
        <FontAwesome name="group" size={25} color="#575757" />
        <MaterialCommunityIcons name="television-play" size={25} color="#575757" />
        <Ionicons name="ios-notifications-outline" size={25} color="#575757" />
        <Feather name="menu" size={25} color="#575757" />
  </View>
);

const styles = StyleSheet.create({
    containerHeader:{
        width: width100,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 7,
        paddingBottom: 7,
        borderBottomColor: "gray",
        borderBottomWidth: 1


    }
});

export default Header;