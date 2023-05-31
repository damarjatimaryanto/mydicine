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
  TextInput,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Loading from './component/Loading';

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
const Login = () => {
  const navigation = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [loading, setLoading] = useState(false);

  const Login = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      ToastAndroid.show('Login Berhasil Horeee!!!!!', ToastAndroid.SHORT);
      navigation.navigate('Home');
    }, 3000);
  };
  return (
    <KeyboardAwareScrollView extraHeight={50} enableOnAndroid>
      <View>
        <StatusBar barStyle={'dark-content'} />
        {loading == true && (
          <Modal
            animationType="fade"
            transparent={true}
            visible={loading}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModal(false);
            }}>
            <Loading />
          </Modal>
        )}
        <ImageBackground
          style={styles.image_bg}
          resizeMode="cover"
          source={require('./../assets/images/icons/login_bg.png')}>
          <View style={styles.top_container}>
            <Image
              style={styles.splash_logo}
              source={require('./../assets/images/icons/mydicine.png')}
            />
          </View>
          <View style={styles.mid_container}>
            <View style={styles.title_container}>
              <Text style={styles.text_style}>
                Silahkan masukkan email dan password
              </Text>
            </View>

            <View style={styles.form_container}>
              <View style={styles.form_style}>
                <View style={styles.image_container}>
                  <Image
                    style={styles.icon_style}
                    source={require('./../assets/images/icons/icon_email.png')}
                  />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input_style}
                    placeholder="Masukan Username"
                    placeholderTextColor={'grey'}
                  />
                </View>
              </View>

              <View style={styles.form_style}>
                <View style={styles.image_container}>
                  <Image
                    style={styles.icon_style}
                    source={require('./../assets/images/icons/icon_pass.png')}
                  />
                </View>
                <View style={styles.input_container}>
                  <TextInput
                    style={styles.input_style}
                    secureTextEntry={isSecureEntry}
                    placeholder="Masukan Password"
                    placeholderTextColor={'grey'}
                  />
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry(prev => !prev);
                  }}
                  style={styles.show_container}>
                  {/* <Text style={{ color: COLORS.white }}>
                    {" "}
                    {isSecureEntry ? "Show" : "Hide"}{" "}
                  </Text> */}

                  <Image
                    style={styles.icon_style}
                    source={
                      isSecureEntry
                        ? require('./../assets/images/icons/icon_eye1.png')
                        : require('./../assets/images/icons/icon_eye2.png')
                    }
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={Login} style={styles.btn_mulai}>
                <Text style={styles.text_mulai}>MASUK</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.bottom_container}>
          <View style={styles.bottom_logo}>
            <Text style={styles.bottom_logo_text}>RSUD Ajibarang</Text>
            <Image
              style={styles.love}
              source={require('./../assets/images/icons/love.png')}
            />
          </View>
        </View> */}
        </ImageBackground>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  top_container: {
    height: responsiveScreenHeight(43),
    // backgroundColor: 'pink',
    justifyContent: 'flex-end',
    paddingBottom: 12,
  },
  mid_container: {
    height: responsiveScreenHeight(45),
    width: responsiveScreenWidth(100),
    // backgroundColor: 'grey',
    // justifyContent: 'flex-end',
    paddingTop: 12,
  },
  bottom_container: {
    height: responsiveScreenHeight(10),
    width: responsiveScreenWidth(100),
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title_container: {
    alignItems: 'center',
    marginBottom: 24,
  },
  splash_logo: {
    height: 100,
    width: 159,
  },
  login_style: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 24,
  },
  image_bg: {
    // flex: 1,
    width: WIDTH,
    height: HEIGHT,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  form_container: {
    width: responsiveWidth(90),
    marginHorizontal: responsiveScreenWidth(5),
  },

  form_style: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    borderRadius: 5,
    marginVertical: 4.5,

    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 16,
  },
  icon_style: {
    width: 20,
    height: 20,
    tintColor: 'grey',
  },
  image_container: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'grey',
  },
  input_container: {
    // backgroundColor: "yellow",
    width: '70%',
    height: '100%',
    justifyContent: 'center',
  },
  input_style: {
    fontFamily: 'Inter-Regular',
    color: 'grey',
  },
  show_container: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.abusoft,
    // opacity: 0.5,
  },
  btn_mulai: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: '#125873',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_mulai: {
    fontFamily: 'Inter-Medium',
    color: 'white',
  },
  text_style: {
    color: 'grey',
    fontFamily: 'Inter',
  },
  bottom_logo: {
    // position: 'absolute',
    // bottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottom_logo_text: {
    // color: 'white',
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
