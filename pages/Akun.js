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
  Button,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
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
  grey_1: '#484848',
  blue_bg: '#E8EFF1',
  shadow: '#1b2e5e',
};
const Akun = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const Logout = () => {
    // setLoading(true);
    Alert.alert('', 'Apakah anda ingin keluar dari akun ini ?', [
      {
        text: 'Batal',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Ya', onPress: () => Keluar()},
    ]);
  };

  const Keluar = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      ToastAndroid.show('Anda Berhasil Keluar', ToastAndroid.SHORT);
      navigation.navigate('Login');
    }, 3000);
  };

  return (
    <View style={styles.container}>
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

      <View style={styles.top_container}>
        <Image
          style={{
            // backgroundColor: 'grey',
            width: 80,
            height: 80,
            borderRadius: 100,
          }}
          source={require('./../assets/images/photos/foto_profil.png')}
        />

        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontSize: 16,
            color: COLORS.primary,
            marginTop: 14,
          }}>
          Damarjati Maryanto
        </Text>
      </View>
      <View style={styles.mid_container}>
        <View style={styles.box_container}>
          <View style={styles.form_container}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.content}>damarjati@gmail.com</Text>
          </View>

          <View style={styles.form_container}>
            <Text style={styles.label}>No Handphone</Text>
            <Text style={styles.content}>damarjati@gmail.com</Text>
          </View>

          <View style={styles.form_container}>
            <Text style={styles.label}>Alamat</Text>
            <Text style={styles.content}>Ajibarang Wetan, Banyumas</Text>
          </View>

          <View style={styles.form_container}>
            <Text style={styles.label}>Jenis Kelamin</Text>
            <Text style={styles.content}>Laki - Laki</Text>
          </View>

          <View style={styles.form_container}>
            <Text style={styles.label}>Password</Text>
            <Text style={styles.content}>********</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.logout_container} onPress={Logout}>
          <Image
            style={{
              // backgroundColor: 'grey',
              width: 14,
              height: 14,
              marginRight: 5,
              tintColor: COLORS.primary,
            }}
            source={require('./../assets/images/icons/icon_logout1.png')}
          />
          <Text style={styles.logout_style}>KELUAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Akun;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white_bg,
  },
  top_container: {
    flex: 0.3,
    // backgroundColor: 'pink',
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid_container: {
    flex: 0.5,
    // backgroundColor: 'green',
    width: WIDTH,
    // justifyContent: 'center',
    alignItems: 'center',
  },

  box_container: {
    backgroundColor: COLORS.white,
    paddingTop: 12,
    paddingHorizontal: 12,
    // height: 300,
    width: responsiveScreenWidth(93),
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f2f2f2',

    shadowColor: COLORS.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  form_container: {
    // backgroundColor: 'pink',
    marginBottom: 12,
  },
  label: {
    color: COLORS.grey_1,
    fontFamily: 'Inter-Bold',
    fontSize: responsiveFontSize(2),
  },
  content: {
    color: COLORS.grey_1,
    fontFamily: 'Inter',
    fontSize: 14,
  },
  logout_container: {
    flexDirection: 'row',
    width: WIDTH,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  logout_style: {
    color: COLORS.primary,
    fontFamily: 'Inter-Medium',
  },
});
