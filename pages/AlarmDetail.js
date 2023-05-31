import {
  StyleSheet,
  PermissionsAndroid,
  Text,
  Image,
  View,
  Animated,
  Alert,
  StatusBar,
  BackHandler,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
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
const AlarmDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'}></StatusBar>
      <View style={styles.top_container}>
        <Text style={{fontFamily: 'Inter-SemiBold', color: COLORS.black}}>
          Waktu Minum
        </Text>
        <View>
          <Text
            style={{
              fontFamily: 'Inter-ExtraBold',
              color: COLORS.primary,
              fontSize: 54,
            }}>
            09.30
          </Text>
        </View>
      </View>
      <View style={styles.mid_container}>
        <View>
          <Text>Obat :</Text>
        </View>
        <View>
          <Text>- penicilin</Text>
          <Text>- penicilin</Text>
          <Text>- penicilin</Text>
          <Text>- penicilin</Text>
          <Text>- penicilin</Text>
        </View>
      </View>
    </View>
  );
};

export default AlarmDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: COLORS.white_bg,
  },
  top_container: {
    flex: 0.25,
    // backgroundColor: 'pink',
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid_container: {
    flex: 0.75,
    // backgroundColor: 'green',
    width: WIDTH,
    paddingHorizontal: responsiveScreenWidth(10),
  },
});
