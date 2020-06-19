import authReducer from './authreducer';
import projectReducer from './projectreducer';
import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import { firestore } from 'firebase';
import {firebaseReducer} from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default rootReducer;