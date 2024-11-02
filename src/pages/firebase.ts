import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";



// Define the configuration object type
const firebaseConfig: {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
} = {
  apiKey: "AIzaSyBwTl0IxsxxAgF-Z0iK05TpW7hqbXdy6gs",
  authDomain: "login-auth-d0ede.firebaseapp.com",
  projectId: "login-auth-d0ede",
  storageBucket: "login-auth-d0ede.appspot.com",
  messagingSenderId: "245524097067",
  appId: "1:245524097067:web:ad87da4868f9845c36626e"
};

// Initialize Firebase and explicitly type the app
const app: FirebaseApp = initializeApp(firebaseConfig);



// Export Firebase services with types
export const auth: Auth = getAuth(app);  
export const db: Firestore = getFirestore(app); 

export default app;
