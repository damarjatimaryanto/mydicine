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

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async () => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View>
        <Image
          style={styles.splash_logo}
          source={require('./../assets/images/icons/mydicine.png')}
        />
      </View>
      <View style={styles.bottom_logo}>
        <Text style={styles.bottom_logo_text}>RSUD Ajibarang</Text>
        <Image
          style={styles.love}
          source={require('./../assets/images/icons/love.png')}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  splash_logo: {
    // backgroundColor: 'white',
    height: 100,
    width: 159,
    // borderRadius: 200,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image_bg: {
    // flex: 1,
    width: WIDTH,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom_logo: {
    position: 'absolute',
    bottom: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottom_logo_text: {
    color: '#1E1E1E',
    fontFamily: 'Inter',
  },
  bottom_logo_img: {
    width: 35,
    height: 35,
  },
  love: {
    width: 20,
    height: 18,
    marginLeft: 5,
  },
});
