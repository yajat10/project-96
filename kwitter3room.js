var firebaseConfig = {
    apiKey: "AIzaSyCShQyNoaKHVXnt7W09Ob781CsrI5YSgs8",
    authDomain: "kwitter-f1a40.firebaseapp.com",
    databaseURL: "https://kwitter-f1a40-default-rtdb.firebaseio.com",
    projectId: "kwitter-f1a40",
    storageBucket: "kwitter-f1a40.appspot.com",
    messagingSenderId: "108516170241",
    appId: "1:108516170241:web:36e2ddb29e5e85d48a7e00"
  };
    firebase.initializeApp(firebaseConfig);
    function sendmessage(){
        msg=document.getElementById("message").value;
firebase.database().ref(room_name).push({
    name:username,
    message:msg,
    like:0
})
document.getElementById("message").value=""
  }