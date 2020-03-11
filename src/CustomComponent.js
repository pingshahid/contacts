import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";

export default class CustomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.containertopRow}>
          <Image
            style={styles.imageTopRow}
            source={{
              uri:
                'https://cdn.pixabay.com/photo/2014/04/05/12/20/man-316917_960_720.jpg',
            }}
          />
        </View>
        <View style={styles.containerBottom}>
          <TouchableOpacity
            onPress={() => navigate('ContactList')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>Contact List</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigate('Favorite')}
            style={styles.containerBottomItem}
          >
            <View style={styles.button}>
              <Text style={styles.txtBottom}>Favorite</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17BED0'
  },
  containertopRow: {
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: 'center'
  },
  txtBottom: {
    marginLeft: 10,
    color: '#000000',
    fontSize: 15,
    fontStyle:'normal',
    fontWeight: 'bold'
  },
  imageTopRow: {
    height: 80,
    width: 80,
    ...Platform.select({
      ios: {
        borderRadius: 80 / 2
      },
      android: {
        borderRadius: 80
      }
    })
  },
  icon: {
    height: 25,
    width: 25,
    marginRight: 10
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  containertopRowText: {
    flexDirection: 'column',
    marginLeft: 5
  },

  containerBottom: {
    backgroundColor: '#17BED0'
  },
  containerBottomItem: {
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: '#E6FAFF',
    borderBottomWidth: 0.5
  }
});