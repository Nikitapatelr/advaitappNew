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

export default class AllDiscussionScreen extends Component {
  constructor() {
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      allDiscussion: [],
    };
    this.requestRef = null;
  }

  getRequestedBooksList = () => {
    this.requestRef = db
      .collection("experiences")
      .onSnapshot((snapshot) => {
        var List = snapshot.docs.map((doc) => doc.data());
        this.setState({
          allDiscussion: List,
        });
      });
  };

  componentDidMount() {
    this.getRequestedBooksList();
  }

  componentWillUnmount() {
  this.requestRef();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <ListItem
        key={i}
      
        subtitle={item.experince}
        titleStyle={{ color: "black", fontWeight: "bold" }}
          rightElement={
          <TouchableOpacity
            style={styles.button}
           
          >
            <Text style={{ color: "#ffff" }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View style={styles.view}>
        <MyHeader title="Discussion" navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          {this.state.allDiscussion.length === 0 ? (
            <View style={styles.subContainer}>
              <Text style={{ fontSize: 20 }}>List Of All Curruptions</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.allDiscussion}
              renderItem={this.renderItem}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    height: 30,
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
});
