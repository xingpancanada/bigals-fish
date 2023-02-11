import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACHoOfdCUsyILWn8W9l8usXEn2zi6vcEA",
  authDomain: "shop-reactjs-db.firebaseapp.com",
  projectId: "shop-reactjs-db",
  storageBucket: "shop-reactjs-db.appspot.com",
  messagingSenderId: "204755080022",
  appId: "1:204755080022:web:76cbf12bab43af7335fcf7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
console.log(firebaseApp);

const authProvider = new GoogleAuthProvider();

authProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, authProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("userDocRef: ", userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log("userSnapshot: ", userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation, //add this for displayName when use email and password for registration
      });
    } catch (error) {
      console.log("error when creating the user: ", error.message);
    }
  }

  ////178. user sagas
  //return userDocRef;
  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

//128. add collection and documents
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
  //field = "title"
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db); //batch instance

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    //const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("write batch is done");
};

//130. Get products and Categories form firebase
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  ////172. set error for testing redux thunk
  //await Promise.reject(new Error("new error testing..."));

  const querySnapshot = await getDocs(q);
  // const categoryMap = querySnapshot.docs.reduce((accumulator, docSnapshot) => {
  //   const { title, items } = docSnapshot.data(); //all items here
  //   accumulator[title.toLowerCase()] = items; //only category items via title
  //   return accumulator;
  // }, {});

  // return categoryMap;

  ////158. Business LOGIC on our Selector
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

////176. Redux-Saga: Convert onAuthStateChanges Listner to Promise
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe(); //close the listener
        resolve(userAuth);
      },
      reject
    );
  });
};
