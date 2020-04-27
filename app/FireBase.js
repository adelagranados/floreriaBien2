import firebase from "firebase/app"

const  firebaseConfig = {
    apiKey: "AIzaSyCSfMfyBU9YegS3uguYTYHRQM7nVG0xZ94",
    authDomain: "floreria-eleonora.firebaseapp.com",
    databaseURL: "https://floreria-eleonora.firebaseio.com",
    projectId: "floreria-eleonora",
    storageBucket: "floreria-eleonora.appspot.com",
    messagingSenderId: "190451498027",
    appId: "1:190451498027:web:d297b18953df432e46be6e"
  
};
 export const firebaseApp= firebase.initializeApp(firebaseConfig);