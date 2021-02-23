import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import firebase from "firebase";
import MyHeader from "../components/MyHeader";
import db from "../config";
import { RFValue } from "react-native-responsive-fontsize";
import { SearchBar, ListItem, Input } from "react-native-elements";

export default class DiscussionScreen extends Component {
    constructor() {
        super();
        this.state = {
            myexperience:"",
            userId: firebase.auth().currentUser.email,
        }
    }

    createUniqueId() {
        return Math.random().toString(36).substring(7);
      }

    addRequest = async (myexperience) => {
        var userId = this.state.userId;
        var randomRequestId = this.createUniqueId();
        
    
    
        db.collection("experiences").add({
          user_id: userId,
         experince: myexperience,
          
          request_id: randomRequestId,
         
          date: firebase.firestore.FieldValue.serverTimestamp(),
          //image_link: books.data[0].volumeInfo.imageLinks.thumbnail,
        });

        this.setState({
            myexperience:""
        })
    }

    render(){
        return(
            <View style={{ flex: 1}}>
<MyHeader title="MyExperince" navigation={this.props.navigation} />
<Input
            style={styles.formTextInput}
            placeholder={"Share your experience"}
            multiline
            containerStyle={{ marginTop: RFValue(60) }}
            onChangeText={(text) =>{
                 this.setState({myexperience:text});
               }}
            
            value={this.state.myexperience}
          />
           <TouchableOpacity
                style={[styles.button, { marginTop: RFValue(30) }]}
                onPress={() => {
                  this.addRequest(
                    this.state.myexperience
                );
                }}
              ><Text>save</Text></TouchableOpacity>
          </View>
        )
    }
}


const styles = StyleSheet.create({
    keyBoardStyle: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    formTextInput: {
      width: "75%",
      height: RFValue(35),
      borderWidth: 1,
      padding: 10,
    },
    button: {
        width: 100,
        height: 30,
        marginLeft:RFValue(105),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#32867d",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
      },
      view:{
        flex: 1,
        backgroundColor: "#fff"
      }

})