// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAAKzVGY1aa052ar0plwftC7dvazvFGfqs",
//   authDomain: "mern-book-inventory-38d05.firebaseapp.com",
//   projectId: "mern-book-inventory-38d05",
//   storageBucket: "mern-book-inventory-38d05.appspot.com",
//   messagingSenderId: "519604910793",
//   appId: "1:519604910793:web:3beac4e97face2ac9b2b18"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // src/firebase/firebase.config.js
// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyAAKzVGY1aa052ar0plwftC7dvazvFGfqs",
//   authDomain: "mern-book-inventory-38d05.firebaseapp.com",
//   projectId: "mern-book-inventory-38d05",
//   storageBucket: "mern-book-inventory-38d05.appspot.com",
//   messagingSenderId: "519604910793",
//   appId: "1:519604910793:web:3beac4e97face2ac9b2b18"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// const storage = getStorage(app);
// const db = getFirestore(app);

// export { auth, googleProvider, storage, db };


// export default app;


// src/firebase/firebase.config.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAKzVGY1aa052ar0plwftC7dvazvFGfqs",
  authDomain: "mern-book-inventory-38d05.firebaseapp.com",
  projectId: "mern-book-inventory-38d05",
  storageBucket: "mern-book-inventory-38d05.appspot.com",
  messagingSenderId: "519604910793",
  appId: "1:519604910793:web:3beac4e97face2ac9b2b18"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, googleProvider, storage, db };
export default app;
