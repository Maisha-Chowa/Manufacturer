import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfB8-GbeLuWkEvDhjDGcqNFCYAnbD702c",
  authDomain: "manufacturer-project.firebaseapp.com",
  projectId: "manufacturer-project",
  storageBucket: "manufacturer-project.appspot.com",
  messagingSenderId: "858949891657",
  appId: "1:858949891657:web:8a6b198204f2846e2bb198",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
