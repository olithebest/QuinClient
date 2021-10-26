// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxErOr70ei2R2MKz0KEqGLBtH9HQI3fNk",
    authDomain: "quinilaamericano.firebaseapp.com",
    databaseURL: "https://quinilaamericano-default-rtdb.firebaseio.com",
    projectId: "quinilaamericano",
    storageBucket: "quinilaamericano.appspot.com",
    messagingSenderId: "825899708623",
    appId: "1:825899708623:web:2003ad89f1a504330147ba"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



document.getElementById("submit").onclick = writeMessageToFirebase

function writeMessageToFirebase()
{
    let messageInTextBox = document.getElementById("messageForFirebase").value;
    console.log(messageInTextBox)
    firebase.database().ref("MessageTest/myMessage").set(messageInTextBox);
}


firebase.database().ref("FirebaseMessage").on("value", function(snapshot) {
    let messageFromFirebase = snapshot.val();
    document.getElementById("firebaseMessage").innerText = messageFromFirebase;
})