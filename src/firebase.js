import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBvM5ALkVo93Kb33uae2l30gL80cNfR2ug",
	authDomain: "resume-353ce.firebaseapp.com",
	projectId: "resume-353ce",
	storageBucket: "resume-353ce.appspot.com",
	messagingSenderId: "109862388331",
	appId: "1:109862388331:web:aec5898c6f1dd57200672e",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();
