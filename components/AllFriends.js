import React from "react";
import { ActivityIndicator, StyleSheet, Text, View,TouchableOpacity, Image, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const AllFriends = () => (
    <View>
        <View style={styles.container1}>
            <View style={{flexDirection: "row"}}>
            <TouchableOpacity 
            
            onPress={() => {
                alert('Quay lại')
            }}
            >
                <MaterialIcons name="keyboard-backspace" size={24} color="black" />

            </TouchableOpacity>
            <Text style={{marginLeft: 10}}> Tất cả bạn bè</Text>

            </View>
            <Text style={{marginRight: 10}}>
                <FontAwesome5  name="search" size={20} color="black" />

            </Text>


        </View>
        <Text style={{backgroundColor: "gray", height: 1}}></Text>
        <ScrollView>
        <View style={{flexDirection: "row",justifyContent: "space-between",padding: 10}}>
              <Text style={{fontWeight: "bold"}}>53 bạn bè</Text>
              <Text style={{color: "#1776f5"}}>Sắp xếp</Text>
        </View>
        <View style={styles.list}>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('kien')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>
            <View style={styles.user}>
                <View style={styles.left}>
                <Image
                style={styles.imgUser}
                source={require('./../Images/user.jpg')}
                />
                <Text style={{fontWeight: "bold",marginLeft: 10}}>Hàn Trung Kiên</Text>

                </View>
                <View style={styles.right}>
                <TouchableOpacity 
                    style={styles.loginButton}
                    onPress={() => {
                            alert('Đến trang Đăng nhập')
                        }}
                >
                    <Ionicons name="ios-more" size={22} color="gray" />

                </TouchableOpacity>
                </View>

            </View>

        </View>
        </ScrollView>

    </View>
  
);

const styles = StyleSheet.create({
    container1:{
        flexDirection: "row",
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        justifyContent: "space-between",
        


    },
    list:{
        width: "94%",
        marginLeft: "3%"

    },
    user:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20

    },
    left:{
        flexDirection: "row",
        alignItems: "center"

    },
    right:{
        marginRight: 5

    },
    imgUser:{
        width: 55,
        height: 55,
        borderRadius: 50
    }
});

export default AllFriends ;