/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
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
export default function Loading() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.modal_lodaing_style}>
      <ActivityIndicator size="large" color={COLORS.primary} />
      <Text
        style={{
          fontFamily: 'Inter',
          marginLeft: 10,
          color: COLORS.coklat,
          fontSize: 14,
        }}>
        Di Tunggu Lur...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  modal_lodaing_style: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: responsiveScreenWidth(60),
    marginHorizontal: responsiveScreenWidth(20),
    top: responsiveScreenHeight(42),
    backgroundColor: 'white',
    borderRadius: 3,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },
});
