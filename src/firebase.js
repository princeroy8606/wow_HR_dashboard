// src/firebase.js

// import { initializeApp } from "firebase/app";
import {
  // getFirestore,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
} from "firebase/firestore";

import {
  // getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAflw2_-yINoQIdm2fwx3xmENM7hfSovAo",
//   authDomain: "wow-hr-4f569.firebaseapp.com",
//   projectId: "wow-hr-4f569",
//   storageBucket: "wow-hr-4f569.appspot.com",
//   messagingSenderId: "69278374191",
//   appId: "1:69278374191:web:47ee45338e32060267a9da",
//   measurementId: "G-ZS7RNH0FBX"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const storage = getStorage(app);

// const auth = getAuth(app);

// export { db, storage, auth, collection, addDoc, doc, deleteDoc, updateDoc, getDocs, ref, uploadBytes, deleteObject, getDownloadURL };

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYgwyXkm_6H0zJ9z5vKQkUuG9eBANbtfw",
  authDomain: "wowhr-abe7c.firebaseapp.com",
  projectId: "wowhr-abe7c",
  storageBucket: "wowhr-abe7c.appspot.com",
  messagingSenderId: "912783213404",
  appId: "1:912783213404:web:8ce5ab77d3a999169c3799",
  measurementId: "G-NZGJV1WMVN",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

const storage = getStorage(app);

export {
  db,
  storage,
  auth,
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
  ref,
  uploadBytes,
  deleteObject,
  getDownloadURL,
};
