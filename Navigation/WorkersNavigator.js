import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../Components/Home/HomeScreen'
import LoginScreen from '../Components/Login/LoginScreen'
import SignUpScreen from '../Components/SignUp/SignUpScreen'
import EditProfileScreen from '../Components/Profile/EditProfile'

createStackNavigator({
    Home: HomeScreen,
    Login: LoginScreen,
    SignUp: SignUpScreen,
    EditProfile: EditProfileScreen
})
