// Import essential Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your exact Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8J63xcQ5kv_m5pET2Eoza2XtyFoie9ts",
  authDomain: "kangleiartgallery.firebaseapp.com",
  projectId: "kangleiartgallery",
  storageBucket: "kangleiartgallery.firebasestorage.app",
  messagingSenderId: "323900091246",
  appId: "1:323900091246:web:3249ca58eccdde7aa5af7f",
  measurementId: "G-Y2LC0E185P"
};
// Initialize Firebase App & Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ==========================================
// 1. HANDLE USER REGISTRATION (register.html)
// ==========================================
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;

        try {
            // Create user with Email and Password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Save the user's Full Name to their Firebase profile
            await updateProfile(userCredential.user, {
                displayName: name
            });

            alert('Account created successfully! Welcome to Kanglei Art Gallery.');
            window.location.href = 'index.html'; // Redirect to home page
        } catch (error) {
            alert('Registration Failed: ' + error.message);
        }
    });
}

// ==========================================
// 2. HANDLE USER LOGIN (login.html)
// ==========================================
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail') ? document.getElementById('loginEmail').value.trim() : document.getElementById('regEmail').value.trim();
        const password = document.getElementById('loginPassword') ? document.getElementById('loginPassword').value : document.getElementById('regPassword').value;

        try {
            // Sign in user with Firebase
            await signInWithEmailAndPassword(auth, email, password);

            alert('Logged in successfully!');
            window.location.href = 'index.html'; // Redirect to home page
        } catch (error) {
            alert('Login Failed: ' + error.message);
        }
    });
}
