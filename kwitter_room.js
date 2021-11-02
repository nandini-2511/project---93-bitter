
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBmRYRxGOPTUDk8p0AWkycy99IodDhKC-k",
      authDomain: "kwitter-f7ce2.firebaseapp.com",
      projectId: "kwitter-f7ce2",
      storageBucket: "kwitter-f7ce2.appspot.com",
      messagingSenderId: "272050883356",
      appId: "1:272050883356:web:dfbf37c16465b38358c8d9"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
