import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe3SJZtyyrG2SZjYhm8T6zsHm8Mp2cJqs",
  authDomain: "fay-s-dalgona.firebaseapp.com",
  projectId: "fay-s-dalgona",
  storageBucket: "fay-s-dalgona.appspot.com",
  messagingSenderId: "229893724458",
  appId: "1:229893724458:web:58ac071c8faf8a57b5a653",
  measurementId: "G-X8RXXL0DWF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
