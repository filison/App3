const firebaseConfig = {
  apiKey: "AIzaSyAcg0qqzWJwkxmopkTgzfasMqd3siQNxIU",
  authDomain: "zvladnuto-4e6cb.firebaseapp.com",
  projectId: "zvladnuto-4e6cb",
  storageBucket: "zvladnuto-4e6cb.firebasestorage.app",
  messagingSenderId: "299881468872",
  appId: "1:299881468872:web:8c36e215cf40a91748e6fd",
  measurementId: "G-HZZG7JRYCC"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "index.html")
    .catch(error => alert("Chyba: " + error.message));
}

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("Registrace proběhla úspěšně."))
    .catch(error => alert("Chyba: " + error.message));
}

function logout() {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
}

auth.onAuthStateChanged(user => {
  const onIndex = window.location.pathname.includes("index.html") || window.location.pathname === "/";
  if (!user && onIndex) window.location.href = "login.html";
});
