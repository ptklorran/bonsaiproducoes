import Firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDbjpUGPz2Tesks2cm7mteRw9kg3l0-99k",
    authDomain: "bonsaiproducoes-pacheco.firebaseapp.com",
    databaseURL: "https://bonsaiproducoes-pacheco.firebaseio.com",
    projectId: "bonsaiproducoes-pacheco",
    storageBucket: "bonsaiproducoes-pacheco.appspot.com",
    messagingSenderId: "237959077398"
}

export const firebase = Firebase.initializeApp(config)
export const DB = firebase.database()
export const AUTH = firebase.auth()
export const STORAGE = firebase.storage()