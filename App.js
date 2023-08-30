import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";

 function App() {
  return (
    <NavigationContainer>
      <StackNavigator initialRouteName="Home" screenOptions={{
        headerShown:false
      }}>
        <StackScreen name="Home" component={HomeScreen}/>
        <StackScreen name="IssLocation" component={IssLocationScreen}/>
        <StackScreen name="Meteor" component={MeteorScreen}/>
      </StackNavigator>
    </NavigationContainer>
  );
}

export default App;
