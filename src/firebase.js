import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyADCbDaW_D9qF9QoG5ZBdKVScasr1hz6zk',
	authDomain: 'blogs-e3099.firebaseapp.com',
	projectId: 'blogs-e3099',
	storageBucket: 'blogs-e3099.appspot.com',
	messagingSenderId: '662899128273',
	appId: '1:662899128273:web:b08fc4cdde74209851d2f0',
	measurementId: 'G-DNKGGMGKG9'
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
