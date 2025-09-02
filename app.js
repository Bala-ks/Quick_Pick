// Import Firebase SDK functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Firebase config (use your config here)
const firebaseConfig = {
  apiKey: "AIzaSyA0saL7iZVicSOKxcKYWlpfKMRRAMoGRoE",
  authDomain: "finalwhereismyworker.firebaseapp.com",
  projectId: "finalwhereismyworker",
  storageBucket: "finalwhereismyworker.firebasestorage.app",
  messagingSenderId: "458793365914",
  appId: "1:458793365914:web:af11e0b3c1bdcc46290a23"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login logic
document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const loader = document.getElementById("loader");
  const errorMsg = document.getElementById("error-message");

  loader.style.display = "block";
  errorMsg.textContent = "";

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "homepage.html"; // Or wherever you want to go
  } catch (error) {
    errorMsg.textContent = error.message;
  } finally {
    loader.style.display = "none";
  }
});
