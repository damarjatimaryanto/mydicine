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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';
import Record from './pages/Record';
import Akun from './pages/Akun';
import TambahAlarm from './pages/TambahAlarm';
import Login from './pages/Login';
import AlarmDetail from './pages/AlarmDetail';
import MyDicine from './pages/component/Header';
import BackHome from './pages/component/BackHome';
import Loading from './pages/component/Loading';

const Tab = createBottomTabNavigator();
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

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

// function BackHome() {
//   const navigation = useNavigation();
//   return (
//     <TouchableOpacity
//       onPress={() => navigation.navigate('Home')}
//       style={{
//         marginLeft: 24,
//         backgroundColor: '#E8EFF1',
//         padding: 8,
//         borderRadius: 40,
//         opacity: 0.7,
//         marginVertical: 2,
//       }}>
//       <Image
//         style={{height: 24, width: 24}}
//         source={require('./assets/images/icons/arrow-left.png')}
//       />
//     </TouchableOpacity>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerTitleStyle: {
            fontSize: 20,
            fontFamily: 'Inter-Bold',
            color: '#125873',
          },
          headerStyle: {
            // backgroundColor: COLORS.black_soft,
            // elevation: 9,
            height: 100,
          },
          headerTitleAlign: 'center',
          // tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#ffffff',
            // opacity: 0.1,
            // position: "absolute",
            // bottom: 15,
            // marginHorizontal: 20,
            elevation: 5,
            // borderRadius: 15,
            // borderTopLeftRadius: 50,
            // borderTopRightRadius: 50,
            borderTopWidth: 0.2,
            borderTopColor: '#fff',
            height: 60,

            // ...styles.shadow,
          },
        }}>
        <Tab.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            headerShown: false,
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="TambahAlarm"
          component={TambahAlarm}
          options={{
            title: 'Tambah Alarm',
            headerShown: true,
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
            headerLeft: () => <BackHome />,
          }}
        />

        <Tab.Screen
          name="AlarmDetail"
          component={AlarmDetail}
          options={{
            title: 'Alarm Detail',
            headerShown: true,
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
            headerLeft: () => <BackHome />,
          }}
        />
        <Tab.Screen
          name="MyDicine"
          component={MyDicine}
          options={{
            headerShown: false,
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="BackHome"
          component={BackHome}
          options={{
            headerShown: false,
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="Loading"
          component={Loading}
          options={{
            headerShown: false,
            tabBarStyle: {display: 'none'},
            tabBarButton: () => null,
          }}
        />

        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => <MyDicine />,
            headerTitleAlign: 'center',
            headerShown: true,
            tabBarIcon: ({focused}) => {
              return (
                <View style={styles.buttonicon}>
                  <Image
                    source={
                      focused
                        ? require('./assets/images/icons/home_fill.png')
                        : require('./assets/images/icons/home.png')
                    }
                    resizeMode="contain"
                    style={{
                      alignItems: 'center',
                      width: 20,
                      height: 20,
                      tintColor: focused ? '#125873' : '#B2B6C1',
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? '#125873' : '#B2B6C1',
                      fontSize: 12,
                      alignItems: 'center',
                      fontFamily: 'Inter-Regular',
                      marginTop: 5,
                    }}>
                    Home
                  </Text>
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Akun"
          component={Akun}
          options={{
            headerTitle: () => <MyDicine />,
            headerShown: true,
            tabBarIcon: ({focused}) => {
              return (
                <View style={styles.buttonicon}>
                  <Image
                    source={
                      focused
                        ? require('./assets/images/icons/profil_fill.png')
                        : require('./assets/images/icons/profil.png')
                    }
                    resizeMode="contain"
                    style={{
                      alignItems: 'center',
                      width: 20,
                      height: 20,
                      tintColor: focused ? '#125873' : '#B2B6C1',
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? '#125873' : '#B2B6C1',
                      fontSize: 12,
                      alignItems: 'center',
                      fontFamily: 'Inter-Regular',
                      marginTop: 5,
                    }}>
                    Akun
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  form_style: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    height: 45,
    borderRadius: 5,
  },
  label: {
    color: 'white',
  },
  buttonicon: {
    alignItems: 'center',
  },
});

export default App;
