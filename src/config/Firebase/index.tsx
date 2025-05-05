// src/config/Firebase/index.tsx
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBaKJrNwlbI2-qMo9OoDtkvjmcdUXFOcyI',
  authDomain: 'demomoneytracker2025.firebaseapp.com',
  projectId: 'demomoneytracker2025',
  storageBucket: 'demomoneytracker2025.appspot.com', // sudah benar
  messagingSenderId: '708815353791',
  appId: '1:708815353791:web:9bca6dfeb88977f8f4130a',
  databaseURL: 'https://demomoneytracker2025-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export {app, auth};
