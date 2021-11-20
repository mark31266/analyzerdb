var firebaseConfig = {
  apiKey: "AIzaSyBJspFr6QSvhEAmONVu3Tl7lZrRFQSA-8I",
  authDomain: "analyzerdb.firebaseapp.com",
  databaseURL: "https://analyzerdb-default-rtdb.firebaseio.com",
  projectId: "analyzerdb",
  storageBucket: "analyzerdb.appspot.com",
  messagingSenderId: "326480477399",
  appId: "1:326480477399:web:2b7cf4d69a4895daeb8492",
  measurementId: "G-NHM4EMZ8HS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore(); 
let engineers = [];
var username;
var date = document.getElementById("date1");  
var machinename = document.getElementById("machinename").innerHTML;  
var name1 = document.getElementById("name-input"); 
var email = document.getElementById("email-input"); 
var message = document.getElementById("message-textarea"); 
firebase.auth().onAuthStateChanged(function(user) {
  var user = firebase.auth().currentUser;
  username = user.email;
})

document.getElementById("sendMsgbtn").addEventListener("click", function(event) {
  function firebasedata() {
  db.collection("comments").doc(username).set(
    {

      Latest_Created : firebase.firestore.Timestamp.now()
    })
  db.collection("comments").doc(username).collection(date.innerText).add(
    {
      NAME : name1.value,
      EMAIL : email.value,
      MESSAGE : message.value,
      MACHINE : String(machinename),
      Created : firebase.firestore.Timestamp.now()
    }).then(function (){
    window.location.reload(); 
  }).catch(function(error)
  {
    alert("Error!");
  }); 
}
if(message.value === "" || message.value === null || name1.value === "" || name1.value === null || email.value === "" || email.value === null)
      {
      document.getElementById("messageconfirm").innerText = "Error: Missing Data Fields"
      }
     else {
      firebasedata(); 
      document.getElementById("messageconfirm").innerText = "Message Successfully Sent!"
     
     }
}); 

