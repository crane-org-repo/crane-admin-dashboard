import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCen2amUNprXklnYwUroRm43eLk-sQZ4EM",
  authDomain: "crane-project-id.firebaseapp.com",
  projectId: "crane-project-id",
  storageBucket: "crane-project-id.appspot.com",
  messagingSenderId: "667135312999",
  appId: "1:667135312999:web:6645b77cd3392f215600c2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new FacebookAuthProvider();
export const auth = getAuth(app);
export const storage = getStorage(app);
