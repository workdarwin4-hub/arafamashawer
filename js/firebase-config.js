// استيراد مكتبات فايرباس بالنسخة السحابية المباشرة (CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// إعدادات المشروع الخاصة بك
const firebaseConfig = {
  apiKey: "AIzaSyD-vPS7QxmUwRb96HzX53baM4skL9gQxBw",
  authDomain: "arafa-mashawer.firebaseapp.com",
  projectId: "arafa-mashawer",
  storageBucket: "arafa-mashawer.firebasestorage.app",
  messagingSenderId: "972965190969",
  appId: "1:972965190969:web:22bc9ec8acc890f74a1ce8",
  measurementId: "G-BJNL82L9H5"
};

// تهيئة المشروع وقاعدة البيانات
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
