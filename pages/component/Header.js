/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
const COLORS = {
  primary: '#125873',
  white: '#FFFFFF',
  white_bg: '#F8F8F8',

  abusoft: '#EBF0FF',
  black: '#151515',
  black_soft: '#202020',
  coklat: '#1E1E1E',
  grey_soft: '#C9C9C9',
  font_color: '#E3E3E3',
  grey_1: '#878787',
  blue_bg: '#E8EFF1',
  shadow: '#1b2e5e',
};
export default function MyDicine() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        // backgroundColor: 'pink',
      }}>
      <Text style={{color: COLORS.primary, fontSize: 23, fontFamily: 'Inter'}}>
        My
      </Text>
      <Text
        style={{
          color: COLORS.primary,
          fontSize: 23,
          fontFamily: 'Inter-ExtraBold',
        }}>
        Dicine
      </Text>
    </View>
  );
}
