import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
const firebaseConfig = {
//  apiKey: "AIzaSyCaEGDWfyHlQTxJiLgf8SD5pNPyNPhMf5Y",
//     authDomain: "contact-me-bb293.firebaseapp.com",
//     databaseURL: "https://contact-me-bb293-default-rtdb.firebaseio.com",
//     projectId: "contact-me-bb293",
//     storageBucket: "contact-me-bb293.appspot.com",
//     messagingSenderId: "782866945042",
//     appId: "1:782866945042:web:dcd653db9a2d9a5eddb4cb",
//     measurementId: "G-64TS92BJKL"
  
   apiKey: "AIzaSyD9qhntfmtQO4EwyQgZhrtjHhX1mxZhQ-4",
  authDomain: "facebook-568a9.firebaseapp.com",
  databaseURL: "https://facebook-568a9-default-rtdb.firebaseio.com",
  projectId: "facebook-568a9",
  storageBucket: "facebook-568a9.appspot.com",
  messagingSenderId: "403896636179",
  appId: "1:403896636179:web:e1ed186349b7d7408740e6",
  measurementId: "G-JL8KDZPDVW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
/////////////////////////
///////////////////////
const name_ = document.getElementById("name");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");
const alertText = document.querySelector(".alertText");
const form = document.querySelector(".form");
//////////////////
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alertText.textContent = "Sending...";
  let x = name_.value;
  const a = x.split(/\W/g);
  let y = Math.floor(Math.random() * 1000);
  let ay = a + y;
  
  set(ref(db, "Data/" + ay), {
    Time: new Date().toLocaleString(),
    Name: name_.value,
      Email: email.value,
      Message: msg.value,
  })
    .then(() => {
      alert("Your message has been sent.");
      alertText.textContent = "Your message has been sent.";
    })
    .catch((err) => {
      console.log(err);
    });
});
