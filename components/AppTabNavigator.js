import React from 'react';
import { Image } from 'react-native';
import { AppStackNavigator } from './AppStackNavigator'
import DiscussionScreen from '../screens/DiscussionScreen';
import AllDiscussionScreen from '../screens/AllDiscussionScreen';
import RecordingScreen from '../screens/RecordingScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


export const AppTabNavigator = createMaterialBottomTabNavigator({
  Experince : {
    screen:DiscussionScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "your Experince",
    }
  },
 Discussion: {
    screen: AllDiscussionScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "All disscusion",
    }
  },
  Recording: {
    screen: RecordingScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/request-book.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Recording",
    }
  }
});
