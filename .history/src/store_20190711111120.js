import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

// Set Firestore++-
const firebaseConfig = {
    apiKey: "AIzaSyDk-I7m-FYbQxijlrEBGo9jeN3cQI1MHpo",
    authDomain: "bibliostore-app.firebaseapp.com",
    databaseURL: "https://bibliostore-app.firebaseio.com",
    projectId: "bibliostore-app",
    storageBucket: "bibliostore-app.appspot.com",
    messagingSenderId: "648362671314",
    appId: "1:648362671314:web:c9b2cd12835019d4"
}

//Init Firebase
firebase.initializeApp(firebaseConfig);

// Set react-redux
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

// Crear enhacer con compose de redux y firestore
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

//Reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

// state initial
const initialState = {};

// Create el store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;