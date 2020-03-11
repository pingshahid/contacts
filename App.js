import React from 'react';
import { 
  createAppContainer,
} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import ContactList from './src/ContactList';
import Favorite from './src/Favorite';
import CustomComponent from "./src/CustomComponent";

const entry = createStackNavigator({
  ContactList,
  Favorite
});

const drawer = createDrawerNavigator(
  {
    entry,
  },
  {
    contentComponent: props => <CustomComponent {...props} />,
  }
);
const App = createAppContainer(drawer);
export default App;