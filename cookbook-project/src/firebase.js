// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDUGE1LDuE-_VH6u-wNzuWj4uFBbtMnsJg",
	authDomain: "cookbook-project-f9710.firebaseapp.com",
	projectId: "cookbook-project-f9710",
	storageBucket: "cookbook-project-f9710.appspot.com",
	messagingSenderId: "643306533172",
	appId: "1:643306533172:web:ba22b6d1149464d878f561",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
