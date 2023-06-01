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
  StatusBar,
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
import LottieView from 'lottie-react-native';
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;
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
export default function Loading_2() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  return (
    <View style={styles.modalContainer}>
      <StatusBar backgroundColor="transparent" />
      <View style={styles.modal_lodaing_style}>
        {/* <ActivityIndicator size="large" color={COLORS.primary} /> */}

        <View
          style={{
            height: '50%',
            width: '100%',
            alignItems: 'center',
            // backgroundColor: 'pink',
          }}>
          <LottieView
            source={require('../../assets/Path/18024-blue-loader.json')}
            autoPlay
            loop
            // style={{backgroundColor: 'pink'}}
          />
        </View>
        <View
          style={{
            height: '30%',
            width: '100%',
            // justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'grey',
          }}>
          <Text
            style={{
              fontFamily: 'Inter',
              marginLeft: 10,
              color: COLORS.coklat,
              fontSize: 12,
            }}>
            Sedang Memuat ...
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modal_lodaing_style: {
    // flexDirection: 'row',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: responsiveScreenWidth(50),
    marginHorizontal: responsiveScreenWidth(20),
    top: responsiveScreenHeight(42),
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },

  modalContainer: {
    height: HEIGHT,
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
