import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = 
    {
        apiKey: "AIzaSyDYLOMH0zfcC8O9U1e5c3V530JkB7HH07E",
        authDomain: "e-commers-withzero.firebaseapp.com",
        projectId: "e-commers-withzero",
        storageBucket: "e-commers-withzero.appspot.com",
        messagingSenderId: "282762003246",
        appId: "1:282762003246:web:c7a64673be52649d11f0bf",
        measurementId: "G-XPK57HYKZ8"
      };


      export const createUserProfileDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;
      
        const userRef = firestore.doc(`users/${userAuth.uid}`);
      
        const snapShot = await userRef.get();
      
        if (!snapShot.exists) {
          const { displayName, email } = userAuth;
          const createdAt = new Date(); //creats a new user if it does not exist
          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            });
          } catch (error) {
            console.log('error creating user', error.message);
          }
        }
      
        return userRef;
      };


      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();
      
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      export const signInWithGoogle = () => auth.signInWithPopup(provider);
      
      export default firebase;