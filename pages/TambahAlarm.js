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
  ToastAndroid,
  Modal,
  ActivityIndicator,
} from 'react-native';
import moment from 'moment';
import React, {useRef, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Loading from './component/Loading';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {SelectList} from 'react-native-dropdown-select-list';
import {MultipleSelectList} from 'react-native-dropdown-select-list';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import Loading_2 from './component/Loading_2';
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

const TambahAlarm = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [pressedSatu, setPressedSatu] = useState(false);
  const [pressedDua, setPressedDua] = useState(false);
  const [pressedTiga, setPressedTiga] = useState(false);
  const [pressedEmpat, setPressedEmpat] = useState(false);
  const [pressedLima, setPressedLima] = useState(false);
  const [pressedEnam, setPressedEnam] = useState(false);
  const [pressedTujuh, setPressedTujuh] = useState(false);
  const [selected, setSelected] = useState('');

  const data = [
    {key: '1', value: 'Penicilin'},
    {key: '2', value: 'Paracetamol'},
    {key: '3', value: 'Bodrex'},
    {key: '4', value: 'Panadol', disabled: true},
    {key: '5', value: 'Oskadon Pancen Oye'},
    {key: '6', value: 'Mixagrip'},
    {key: '7', value: 'Vitamin C'},
    {key: '8', value: 'Paramex'},
    {key: '9', value: 'Dopamin'},
    {key: '10', value: 'Morfin'},
    {key: '11', value: 'Sirup Marjan', disabled: true},
    {key: '12', value: 'Pil Koplo'},
    {key: '13', value: 'Red Drum'},
    {key: '14', value: 'Vitamin D'},
  ];

  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);

  const onReset = () => {
    setPressedSatu(false);
    setPressedDua(false);
    setPressedTiga(false);
    setPressedEmpat(false);
    setPressedLima(false);
    setPressedEnam(false);
    setPressedTujuh(false);
    ToastAndroid.show('Reset Berhasil', ToastAndroid.SHORT);
  };

  const TambahAlarm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      ToastAndroid.show('Alarm Di Tambahkan', ToastAndroid.SHORT);
      navigation.navigate('Home');
    }, 3000);
  };
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [hari, setHari] = useState('1');
  const [jam, setJam] = useState('00 : 00');
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [obat, setObat] = useState();

  const [currentDate, setCurrentDate] = useState('');

  const getData = () => {
    var obat = selected + ',';
  };

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(+hours + ':' + min);
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const time = moment(date).format('HH : mm');
    const hrs = moment(date).format('HH');
    const min = moment(date).format('mm');
    setJam(time);
    setHours(hrs);
    setMinutes(min);
    hideDatePicker();
  };
  return (
    <View style={styles.container}>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        is24Hour
      />
      {loading == true && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={loading}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModal(false);
          }}>
          <Loading_2 />
        </Modal>
      )}

      <View style={styles.top_container}>
        <Text style={{fontFamily: 'Inter-SemiBold', color: COLORS.black}}>
          Pilih Waktu
        </Text>
        <TouchableOpacity onPress={showDatePicker}>
          <Text
            style={{
              fontFamily: 'Inter-ExtraBold',
              color: COLORS.primary,
              fontSize: 50,
            }}>
            {jam}
            {/* {currentDate} */}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mid_container}>
        {/* <View>
          <Text
            style={{
              marginHorizontal: responsiveScreenWidth(3),
              fontFamily: 'Inter-Bold',
              color: COLORS.coklat,
            }}>
            Daftar Obat :
          </Text>
        </View> */}

        <View
          style={{
            width: responsiveScreenWidth(90),
            marginHorizontal: responsiveScreenWidth(5),
          }}>
          <MultipleSelectList
            setSelected={val => setSelected(val)}
            data={data}
            save="value"
            maxHeight={responsiveScreenHeight(45)}
            onSelect={() => console.log(selected)}
            fontFamily="Inter-Regular"
            notFoundText="Data Tidak Ditemukan"
            boxStyles={{backgroundColor: COLORS.blue_bg, borderWidth: 0}}
            dropdownTextStyles={{color: COLORS.primary}}
            searchPlaceholder="Pencarian Obat"
            badgeStyles={{backgroundColor: COLORS.primary}}
            placeholder="Cari obat disini"
            label="Daftar Obat :"
            labelStyles={{fontFamily: 'Inter-Medium', color: COLORS.primary}}
            checkBoxStyles={{backgroundColor: COLORS.blue_bg}}
            inputStyles={{color: 'black'}}
          />
        </View>

        <Text>{selected + ','}</Text>

        {/* <View style={styles.box_container}>
          <View style={styles.box2}>
            <View style={styles.list_container}>
              <TouchableOpacity
                // disabled={pressedSatu ? true : false}
                onPress={() =>
                  pressedSatu ? setPressedSatu(false) : setPressedSatu(true)
                }
                style={
                  pressedSatu
                    ? styles.checkbox_style_klik
                    : styles.checkbox_style
                }>
                <Image
                  style={styles.check_style}
                  source={require('./../assets/images/icons/icon_check3.png')}
                />
              </TouchableOpacity>

              <Text style={styles.obat_style}>Clopidogrel (Plavix)</Text>
            </View>

            <View style={styles.list_container}>
              <TouchableOpacity
                onPress={() =>
                  pressedDua ? setPressedDua(false) : setPressedDua(true)
                }
                style={
                  pressedDua
                    ? styles.checkbox_style_klik
                    : styles.checkbox_style
                }>
                <Image
                  style={styles.check_style}
                  source={require('./../assets/images/icons/icon_check3.png')}
                />
              </TouchableOpacity>

              <Text style={styles.obat_style}>Statins</Text>
            </View>

            <View style={styles.list_container}>
              <TouchableOpacity
                onPress={() =>
                  pressedTiga ? setPressedTiga(false) : setPressedTiga(true)
                }
                style={
                  pressedTiga
                    ? styles.checkbox_style_klik
                    : styles.checkbox_style
                }>
                <Image
                  style={styles.check_style}
                  source={require('./../assets/images/icons/icon_check3.png')}
                />
              </TouchableOpacity>

              <Text style={styles.obat_style}>Dabigatran</Text>
            </View>

            <View style={styles.list_container}>
              <TouchableOpacity style={styles.checkbox_style}>
                <Image
                  style={styles.check_style}
                  source={require('./../assets/images/icons/icon_check3.png')}
                />
              </TouchableOpacity>

              <Text style={styles.obat_style}>Rivaroxaban</Text>
            </View>

            <View style={styles.list_container}>
              <TouchableOpacity style={styles.checkbox_style}>
                <Image
                  style={styles.check_style}
                  source={require('./../assets/images/icons/icon_check3.png')}
                />
              </TouchableOpacity>

              <Text style={styles.obat_style}>Aspirin</Text>
            </View>
          </View>
          <View style={styles.box2}>
            <View style={styles.list_container}>
              <TouchableOpacity style={styles.checkbox_style}>
                <Image
                  style={styles.check_style}
                  source={require('./../assets/images/icons/icon_check3.png')}
                />
              </TouchableOpacity>

              <Text style={styles.obat_style}>Anticoagulants</Text>
            </View>

            <View style={styles.list_container}>
              <TouchableOpacity style={styles.checkbox_style}>
                <Image
                  style={styles.check_style}
                  source={require('./../assets/images/icons/icon_check3.png')}
                />
              </TouchableOpacity>

              <Text style={styles.obat_style}>Enoxaparin</Text>
            </View>

            <View style={styles.list_container}>
              <TouchableOpacity style={styles.checkbox_style}>
                <Image
                  style={styles.check_style}
                  source={require('./../assets/images/icons/icon_check3.png')}
                />
              </TouchableOpacity>

              <Text style={styles.obat_style}>Heparin</Text>
            </View>

            <View style={styles.list_container}>
              <TouchableOpacity style={styles.checkbox_style}>
                <Image
                  style={styles.check_style}
                  source={require('./../assets/images/icons/icon_check3.png')}
                />
              </TouchableOpacity>

              <Text style={styles.obat_style}>Apixaban</Text>
            </View>
          </View>
        </View> */}

        {/* <TouchableOpacity style={styles.logout_container} onPress={onReset}>
          <Image
            style={{
              // backgroundColor: 'grey',
              width: 14,
              height: 14,
              marginRight: 5,
              tintColor: COLORS.primary,
            }}
            source={require('./../assets/images/icons/icon_trash.png')}
          />
          <Text style={styles.logout_style}>RESET OBAT</Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={TambahAlarm} style={styles.btn_mulai}>
          <Text style={styles.text_mulai}>Tambah Alarm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TambahAlarm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: COLORS.white_bg,
  },
  btn_mulai: {
    width: responsiveWidth(90),
    height: 48,
    backgroundColor: '#125873',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 24,
    marginHorizontal: responsiveScreenWidth(5),
  },
  text_mulai: {
    fontFamily: 'Inter-Medium',
    color: 'white',
  },
  top_container: {
    flex: 0.3,
    // backgroundColor: 'pink',
    width: WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid_container: {
    flex: 0.7,
    // backgroundColor: 'green',
    width: WIDTH,
  },
  box_container: {
    // backgroundColor: 'yellow',
    width: WIDTH,
    // height: 300,
    flexDirection: 'row',
    padding: responsiveScreenWidth(3),
    justifyContent: 'space-between',
  },
  box2: {
    width: responsiveScreenWidth(45),
    // backgroundColor: 'grey',
  },
  list_container: {
    flexDirection: 'row',
    // backgroundColor: 'grey',
    // alignItems: 'center',
    width: responsiveScreenWidth(45),
    height: 24,
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
  },
  list_container2: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    // alignItems: 'center',
    width: responsiveScreenWidth(45),
  },
  checkbox_style: {
    // backgroundColor: 'pink',
    width: 24,
    height: 24,
    borderColor: COLORS.black,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox_style_klik: {
    backgroundColor: COLORS.primary,
    width: 24,
    height: 24,
    borderColor: COLORS.black,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  check_style: {
    width: 14,
    height: 14,

    tintColor: COLORS.white_bg,
  },
  obat_style: {
    fontFamily: 'Inter',
    color: COLORS.coklat,
    textAlign: 'left',
    marginLeft: 10,
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
