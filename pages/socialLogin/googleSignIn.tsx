
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Dimensions, TouchableOpacity
} from 'react-native';
import { Colors } from '../Colors';
const Style_path = require('../Styles');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const GoogleSignIn_screen = ({ navigation }) => {
  const [userName, setUserName] = useState('AboutReact');

  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Text>Google Login</Text>

    </SafeAreaView>
  );
};

export default GoogleSignIn_screen;
