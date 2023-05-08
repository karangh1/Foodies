import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAsitEhOeRv-wWyvJmz5h8lE8E0xO52Z28",
  authDomain: "urhotel-7a264.firebaseapp.com",
  projectId: "urhotel-7a264",
  storageBucket: "urhotel-7a264.appspot.com",
  messagingSenderId: "369866518691",
  appId: "1:369866518691:web:3b1ad79cf444ae5507cf16",
  measurementId: "G-6TTL5J7H4N"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth};