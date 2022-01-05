import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAFfq8rOX9hpir5PMB21ZySg_O76MeAsHA",
	authDomain: "resume-265ab.firebaseapp.com",
	projectId: "resume-265ab",
	storageBucket: "resume-265ab.appspot.com",
	messagingSenderId: "131259358163",
	appId: "1:131259358163:web:06ee0e17c844bf0f632d26",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();
