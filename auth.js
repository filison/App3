const firebaseConfig = {
  apiKey: "TVŮJ_API_KLÍČ",
  authDomain: "TVŮJ_AUTH_DOMAIN",
  projectId: "TVŮJ_PROJECT_ID",
  storageBucket: "TVŮJ_BUCKET",
  messagingSenderId: "TVŮJ_SENDER_ID",
  appId: "TVŮJ_APP_ID"
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