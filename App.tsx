import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

// Import semua halaman (pages)
import SplashScreen from './src/pages/SplashScreen';
import SignUp from './src/pages/SignUp';
import SignIn from './src/pages/SignIn';
import Home from './src/pages/Home';
import Progres from './src/pages/Progres';
import Account from './src/pages/Account';
import ChangePassword from './src/pages/ChangePassword';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {/* Splash Screen */}
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />

          {/* Auth Screens */}
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />

          {/* Main Screens */}
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Progres"
            component={Progres}
            options={{title: 'Progres'}}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{title: 'Account'}}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
            options={{title: 'Change Password'}}
          />
        </Stack.Navigator>
      </NavigationContainer>

      {/* Flash Message berada DI LUAR NavigationContainer */}
      <FlashMessage position="top" />
    </>
  );
};

export default App;
