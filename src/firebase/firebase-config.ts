import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/functions";

const clientCredentials = {
  apiKey: 'AIzaSyDivzpGrF_O-aPj64Opx9VbwazsghAnBcw',
  authDomain: 'stripe-test-arnold.firebaseapp.com',
  projectId: 'stripe-test-arnold',
  databaseURL: "https://stripe-test-arnold-default-rtdb.firebaseio.com",
  storageBucket: 'stripe-test-arnold.appspot.com',
  locationId: 'northamerica-northeast1',
  messagingSenderId: '89910414772',
  appId: '1:89910414772:web:b1590b31efe7ae656136e1',
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;