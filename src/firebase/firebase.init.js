
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADkxDUHV-K0YDVpD5LGbHYA9JyVvehMeE",
  authDomain: "assignment-11-8dfbd.firebaseapp.com",
  projectId: "assignment-11-8dfbd",
  storageBucket: "assignment-11-8dfbd.appspot.com",
  messagingSenderId: "465041156739",
  appId: "1:465041156739:web:29789efa960adc2fbf89b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
