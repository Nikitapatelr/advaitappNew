import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "firebase";
import db from "../config";
import MyHeader from "../components/MyHeader";

export default class RecordingScreen extends Component {
    constructor(props) {
      super(props);
    }
    render(){
        return(
<View><Text>RecordingScreen</Text></View>

            
        
            )
        
    }
}