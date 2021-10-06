// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCShQyNoaKHVXnt7W09Ob781CsrI5YSgs8",
    authDomain: "kwitter-f1a40.firebaseapp.com",
    databaseURL: "https://kwitter-f1a40-default-rtdb.firebaseio.com",
    projectId: "kwitter-f1a40",
    storageBucket: "kwitter-f1a40.appspot.com",
    messagingSenderId: "108516170241",
    appId: "1:108516170241:web:36e2ddb29e5e85d48a7e00"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 function addroom(){
    roomname=document.getElementById("roomnameid").value;
    firebase.database().ref("/").child(roomname).update({
      purpose:"adding a room"
    })
    localStorage.setItem("roomname",roomname)
    window.location="kwittermainroom.html"
  }
  function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html"
}
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
    console.log(Room_names);
    row="<div class='text-primary btn-danger'  id="+Room_names+"onclick='redirect(this.id)'>"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML+=row
   //End code
   });});}
getData();
function redirect(name){
  console.log(name);
  localStorage.setItem("roomname",name);
  window.location="kwittermainroom.html"
}