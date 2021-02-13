/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,

} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import ForgotPassword from './Screen/ForgotPassword';
import OTP from './Screen/OTP';
import MainTab from './Screen/MainTab'
import MyMatches from './Screen/MyMatches'
import MorMatches from './Screen/MorMatches'
import ProfileDeshbord from './Screen/ShadiScreen/ProfileDeshbord'
import TodaysMaches from './Screen/TodaysMaches'

//============ Inbox Screens ====================
import InboxMainTab from './Screen/Inbox/InboxMainTab'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, justifyContent: "space-around" }}>
      <View >
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('ProfileDeshbord')}>
          <Image style={{ width: 50, height: 25 }}
            resizeMode="contain"
            source={require('./Imagess/shadi.png')} />
          <Text>My Shaadi</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('MainTab')}>
          <Image style={{ width: 25, height: 25 }}
            source={require('./Imagess/Matches.png')} />
          <Text>Matches</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => navigation.navigate('InboxMainTab')} >
          <Image style={{ width: 25, height: 25 }}
            source={require('./Imagess/inbox.png')}
          />
          <Text>Inbox</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 25, height: 25 }}
            source={require('./Imagess/chaticon.png')} />
          <Text>Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default class app extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  TabNavigation() {
    return (
      <Tab.Navigator initialRouteName='InboxMainTab' tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="MainTab" component={MainTab} />
        <Tab.Screen name="ProfileDeshbord" component={ProfileDeshbord} />
        <Tab.Screen name='InboxMainTab' component={InboxMainTab} />

      </Tab.Navigator>
    );
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}  >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="MainTab" component={MainTab} />
          <Stack.Screen name="MyMatches" component={MyMatches} />
          <Stack.Screen name="MorMatches" component={MorMatches} />
          <Stack.Screen name="TodaysMaches" component={TodaysMaches} />
          <Stack.Screen name="TabNavigation" component={this.TabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
const styles = StyleSheet.create({

});

