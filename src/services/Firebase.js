import Firebase from 'firebase'

import config from './config'

export const firebase = Firebase.initializeApp(config)
export const DB = firebase.database()
export const AUTH = firebase.auth()
export const STORAGE = firebase.storage()