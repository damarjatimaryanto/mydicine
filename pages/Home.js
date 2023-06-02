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
  ScrollView,
} from 'react-native';
import React, {useRef, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from './SplashScreen';
import LottieView from 'lottie-react-native';
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
const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      <ScrollView style={styles.scroll_container}>
        <View>
          <TouchableOpacity
            style={styles.box_container}
            onPress={() => navigation.navigate('AlarmDetail')}>
            <View style={styles.box_top}>
              <View style={styles.waktu_container}>
                <Text style={styles.waktu_style}>09.00</Text>
              </View>

              <TouchableOpacity style={styles.buton_container}>
                <View style={styles.button_bg}>
                  <Image
                    source={require('./../assets/images/icons/icon_trash.png')}
                    style={styles.buton_icon_style}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.box_bot}>
              <Text style={styles.obat_title}>Obat </Text>
              <Text style={styles.obat_list} numberOfLines={1}>
                : Paracetamol, Simvastatin, Amoxicillin , penicillin,
                antibiotik, morgard
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floating_button}
        onPress={() => navigation.navigate('TambahAlarm')}>
        <Image
          source={require('./../assets/images/icons/plus.png')}
          style={{
            width: 16,
            height: 16,
            tintColor: 'white',
            marginRight: 10,
          }}
        />
        <Text style={{color: 'white', fontFamily: 'Inter'}}>Alarm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: HEIGHT,
    // width: WIDTH,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white_bg,
    // marginBottom: 16
    paddingTop: 16,
  },
  scroll_container: {
    flex: 1,
    // height: HEIGHT,
    width: WIDTH,
    paddingHorizontal: responsiveWidth(5),
    backgroundColor: COLORS.white_bg,
    // marginBottom: 16
    // paddingTop: 16,
    paddingBottom: 100,
  },
  floating_button: {
    backgroundColor: COLORS.primary,

    paddingHorizontal: 25,
    height: 48,
    position: 'absolute',
    bottom: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    flexDirection: 'row',
  },

  box_container: {
    backgroundColor: COLORS.white,
    height: 97,
    width: responsiveScreenWidth(90),
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f2f2f2',

    shadowColor: COLORS.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 0.4,
    elevation: 5,

    // shadowColor: 'black',

    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 0.4,

    // elevation: 3,
  },
  box_top: {
    height: '60%',
    width: '100%',
    // backgroundColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  waktu_container: {
    // backgroundColor: 'grey',
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  waktu_style: {
    fontSize: 32,
    fontFamily: 'Inter-ExtraBold',
    color: COLORS.primary,
  },
  buton_container: {
    // backgroundColor: 'grey',
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 12,
  },
  button_bg: {
    backgroundColor: COLORS.blue_bg,
    width: 32,
    height: 32,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buton_icon_style: {
    width: 19,
    height: 19,
    tintColor: COLORS.primary,
    // marginRight: 10,
  },
  box_bot: {
    height: '40%',
    width: '100%',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  obat_title: {
    // backgroundColor: 'grey',
    width: '13%',
    // textAlign: 'center',
    fontFamily: 'Inter-Bold',
    color: COLORS.coklat,
    // marginRight: 10,
    fontSize: 13,
  },
  obat_list: {
    // backgroundColor: 'pink',
    width: '87%',
    textAlign: 'center',
    fontFamily: 'Inter',
    color: COLORS.coklat,
    fontSize: 13,
  },
});
