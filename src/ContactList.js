import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { FloatingAction } from "react-native-floating-action";

const actions = [
  {
    text: "Create",
    icon: require("../images/menu.png"),
    name: "bt_accessibility",
    position: 1
  }
];
export default class Home extends Component {

  

  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#13C0CE',
    },
    headerLeft: (
      <View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{ marginLeft: 10, height: 25, width: 25 }}
            source={require('../images/menu.png')}
          />
        </TouchableOpacity>
        
      </View>
    ),
  });
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {
    addNewContact = ()=>{
      console.log('Add new contact')
    }
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}> Contact List </Text>
        <FloatingAction
          actions={actions}
          onPressItem={name => {
          console.log(`selected button: ${name}`);
      }}
    />
      </View>
    );
  }
}