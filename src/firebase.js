 

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPJbbIrQ-D_5J9cdi62K3AbaAvmYX7oPQ",
  authDomain: "notes-saas-auth.firebaseapp.com",
  projectId: "notes-saas-auth",
  storageBucket: "notes-saas-auth.appspot.com", // ✅ must end with .appspot.com
  messagingSenderId: "936548058644",
  appId: "1:936548058644:web:1639ae89607c43bfa0c901"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);