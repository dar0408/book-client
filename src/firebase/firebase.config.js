import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAKzVGY1aa052ar0plwftC7dvazvFGfqs",
  authDomain: "mern-book-inventory-38d05.firebaseapp.com",
  projectId: "mern-book-inventory-38d05",
  storageBucket: "mern-book-inventory-38d05.appspot.com",
  messagingSenderId: "519604910793",
  appId: "1:519604910793:web:3beac4e97face2ac9b2b18"
};

const app = initializeApp(firebaseConfig);
export default app;
