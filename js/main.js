
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAl4Tvjrdm5cXozGOS7k4treZqkAYv5gE8",
    authDomain: "sujitcodes-1323a.firebaseapp.com",
    databaseURL: "https://sujitcodes-1323a.firebaseio.com",
    projectId: "sujitcodes-1323a",
    storageBucket: "sujitcodes-1323a.appspot.com",
    messagingSenderId: "1025573058461",
    appId: "1:1025573058461:web:bdc48ef09878c138dee174",
    measurementId: "G-GCJE4QDQ09"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true }); 

// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}
var typed = new Typed('#typed' , {
  strings: [
      'Web Developer',
      'ML Enthusiast',
      'Highly Pythonic',
      ''
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});
