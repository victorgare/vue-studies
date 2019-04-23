import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCzqqh57DGs9z8-1s68Q8QEP4b_7agUUQk",
    authDomain: "turnout-9c3b9.firebaseapp.com",
    databaseURL: "https://turnout-9c3b9.firebaseio.com",
    projectId: "turnout-9c3b9",
    storageBucket: "turnout-9c3b9.appspot.com",
    messagingSenderId: "594878654913"
};

export const firebaseApp = firebase.initializeApp(config);
export const eventsRef = firebase.database().ref().child('events')