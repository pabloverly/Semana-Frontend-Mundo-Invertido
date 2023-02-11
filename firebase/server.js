import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCM4X7vxn1gixGZnljSoYQAetjcd44gSuU",
    authDomain: "simbiosecode01.firebaseapp.com",
    databaseURL: "https://simbiosecode01-default-rtdb.firebaseio.com",
    projectId: "simbiosecode01",
    storageBucket: "simbiosecode01.appspot.com",
    messagingSenderId: "718362126945",
    appId: "1:718362126945:web:537f32c5957590ca111820",
    measurementId: "G-4DYDB66TLQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);