import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCElaTU8u_8hEAL9Fc_vAWAPws2Sy67zpw",
  authDomain: "clonetwitter-c9afb.firebaseapp.com",
  projectId: "clonetwitter-c9afb",
  storageBucket: "clonetwitter-c9afb.firebasestorage.app",
  messagingSenderId: "857753937550",
  appId: "1:857753937550:web:73b90d31d9450917c6cbdf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
