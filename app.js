// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Config
const firebaseConfig = {
  apiKey: "AIzaSyDbOqIJebNyev-eRXI2A9N9_vYEPXBY5YY",
  authDomain: "urlweb-2d2fd.firebaseapp.com",
  projectId: "urlweb-2d2fd",
  storageBucket: "urlweb-2d2fd.appspot.com",
  messagingSenderId: "479423517882",
  appId: "1:479423517882:web:0e7744c369faedb0b39e83",
  measurementId: "G-NC5H9TQBR0",
  databaseURL: "https://urlweb-2d2fd-default-rtdb.firebaseio.com" // 🔥 Add this line
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Save function
document.getElementById("saveBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value;
  const userRef = ref(database, "users");
  const newUserRef = push(userRef);

  set(newUserRef, {
    name: name
  });

  document.getElementById("nameInput").value = "";
});

// Read function
const userRef = ref(database, "users");
onValue(userRef, (snapshot) => {
  const data = snapshot.val();
  const list = document.getElementById("userList");
  list.innerHTML = "";

  for (let id in data) {
    const li = document.createElement("li");
    li.textContent = data[id].name;
    list.appendChild(li);
  }
});

set(newUserRef, {
  name: name
})
.then(() => {
  console.log("✅ Saved to Firebase");
})
.catch((error) => {
  console.error("❌ Firebase Error:", error);
});

