import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3UcG_3kLZ7rVHIp1mXSeC8avEEduS3hM",
  authDomain: "safelink-b2a55.firebaseapp.com",
  projectId: "safelink-b2a55",
  storageBucket: "safelink-b2a55.firebasestorage.app",
  messagingSenderId: "610080838574",
  appId: "1:610080838574:web:3b2e7bcb76f66bf35a2e3f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;