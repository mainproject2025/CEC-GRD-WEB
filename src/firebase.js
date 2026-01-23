import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/* ================================
   FIREBASE CLIENT CONFIG
   (SAFE TO EXPOSE)
================================ */
const firebaseConfig = {
  apiKey: "AIzaSyDwyzBBYR97Ax3g2d_2S7V34PcawpPytLE",
  authDomain: "cec-grid.firebaseapp.com",
  projectId: "cec-grid",
  storageBucket: "cec-grid.firebasestorage.app",
  messagingSenderId: "1069701744776",
  appId: "1:1069701744776:web:9b621fed124119da06b73d"
};

/* ================================
   INIT (SINGLETON)
================================ */
const app = initializeApp(firebaseConfig);

/* ================================
   EXPORT AUTH
================================ */
export const auth = getAuth(app);
