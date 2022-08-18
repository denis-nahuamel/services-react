import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDNhcXwZjQs1GJ4c6qJ_0jwjP_EUSkVOHc",
    authDomain: "react-services-f4a3f.firebaseapp.com",
    projectId: "react-services-f4a3f",
    storageBucket: "react-services-f4a3f.appspot.com",
    messagingSenderId: "181364670597",
    appId: "1:181364670597:web:456a5ad4324c4a6d4be9ec",
    measurementId: "G-1TFQ1PD1ZE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase};