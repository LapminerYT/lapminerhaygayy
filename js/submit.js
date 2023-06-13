const firebaseConfig = {

  apiKey: "AIzaSyCWcU_bVMANtbRKZ80sxiSWkkok-v1whVc",

  authDomain: "lapminerspeedru.firebaseapp.com",

  databaseURL: "https://lapminerspeedru-default-rtdb.firebaseio.com",

  projectId: "lapminerspeedru",

  storageBucket: "lapminerspeedru.appspot.com",

  messagingSenderId: "474504258853",

  appId: "1:474504258853:web:5eafa06a14e0b9922d26cc",

  measurementId: "G-KRE0LQKRDQ"

};

// initialize firebase

firebase.initializeApp(firebaseConfig);

// reference your database

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {

  e.preventDefault();

  var name = getElementVal("name");

  var emailid = getElementVal("emailid");

  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert

  document.querySelector(".alert").style.display = "block";

  //   remove the alert

  setTimeout(() => {

    document.querySelector(".alert").style.display = "none";

  }, 3000);

  //   reset the form

  document.getElementById("contactForm").reset();

}

const saveMessages = (name, emailid, msgContent) => {

  var newContactForm = contactFormDB.push();

  newContactForm.set({

    name: name,

    emailid: emailid,

    msgContent: msgContent,

  });

};

const getElementVal = (id) => {

  return document.getElementById(id).value;

};
