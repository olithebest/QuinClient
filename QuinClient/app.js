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
    let dictionary = {};

    dictionary["Denver"] = document.getElementById("DEN").value;
    dictionary["Cleveland"] = document.getElementById("CLE").value;
    dictionary["Carolina"] = document.getElementById("CAR").value;
    dictionary["NewYorkGiants"] = document.getElementById("NYG").value;
    dictionary["NewYorkJets"] = document.getElementById("NYJ").value;
    dictionary["NewEngland"] = document.getElementById("NE").value;
    dictionary["KansasCity"] = document.getElementById("KC").value;
    dictionary["Tennessee"] = document.getElementById("TEN").value;
    dictionary["Washington"] = document.getElementById("WAS").value;
    dictionary["GreenBay"] = document.getElementById("GB").value;
    dictionary["Atlanta"] = document.getElementById("ATL").value;
    dictionary["Miami"] = document.getElementById("MIA").value;
    dictionary["Cincinnati"] = document.getElementById("CIN").value;
    dictionary["Baltimore"] = document.getElementById("BAL").value;
    dictionary["Detroit"] = document.getElementById("DET").value;
    dictionary["LosAngelesRams"] = document.getElementById("LA").value;
    dictionary["Philadelphia"] = document.getElementById("PHI").value;
    dictionary["LasVegas"] = document.getElementById("LV").value;
    dictionary["Houston"] = document.getElementById("HOU").value;
    dictionary["Arizona"] = document.getElementById("ARI").value;
    dictionary["Chicago"] = document.getElementById("CHI").value;
    dictionary["TampaBay"] = document.getElementById("TB").value;
    dictionary["Indianapolis"] = document.getElementById("IND").value;
    dictionary["SanFrancisco"] = document.getElementById("SF").value;
    dictionary["NewOrleans"] = document.getElementById("NO").value;
    dictionary["Seattle"] = document.getElementById("SEA").value;

    // let DEN = document.getElementById("DEN").value;
    // let CLE = document.getElementById("CLE").value;
    // let CAR = document.getElementById("CAR").value;
    // let NYG = document.getElementById("NYG").value;
    // let NYJ = document.getElementById("NYJ").value;
    // let NE = document.getElementById("NE").value;
    // let KC = document.getElementById("KC").value;
    // let TEN = document.getElementById("TEN").value;
    // let WAS = document.getElementById("WAS").value;
    // let GB = document.getElementById("GB").value;
    // let ATL = document.getElementById("ATL").value;
    // let MIA = document.getElementById("MIA").value;
    // let CIN = document.getElementById("CIN").value;
    // let BAL = document.getElementById("BAL").value;
    // let DET = document.getElementById("DET").value;
    // let LAR = document.getElementById("LA").value;
    // let PHI = document.getElementById("PHI").value;
    // let LV = document.getElementById("LV").value;
    // let HOU = document.getElementById("HOU").value;
    // let ARI = document.getElementById("ARI").value;
    // let CHI = document.getElementById("CHI").value;
    // let TB = document.getElementById("TB").value;
    // let IND = document.getElementById("IND").value;
    // let SF = document.getElementById("SF").value;
    // let NO = document.getElementById("NO").value;
    // let SEA = document.getElementById("SEA").value;

    // console.log(messageInTextBox);

    firebase.database().ref("Teams").set(dictionary);
    firebase.database().ref("MessageTest/myMessage").set(messageInTextBox);
    // firebase.database().ref("Teams/Denver").set(DEN)
    // firebase.database().ref("Teams/Cleveland").set(CLE)
    // firebase.database().ref("Teams/Carolina").set(CAR)
    // firebase.database().ref("Teams/NewYorkGiants").set(NYG)
    // firebase.database().ref("Teams/NewYorkJets").set(NYJ)
    // firebase.database().ref("Teams/NewEngland").set(NE)
    // firebase.database().ref("Teams/KansasCity").set(KC)
    // firebase.database().ref("Teams/Tennessee").set(TEN)
    // firebase.database().ref("Teams/Washington").set(WAS)
    // firebase.database().ref("Teams/GreenBay").set(GB)
    // firebase.database().ref("Teams/Atlanta").set(ATL)
    // firebase.database().ref("Teams/Miami").set(MIA)
    // firebase.database().ref("Teams/Cincinnati").set(CIN)
    // firebase.database().ref("Teams/Baltimore").set(BAL)
    // firebase.database().ref("Teams/Detroit").set(DET)
    // firebase.database().ref("Teams/LosAngelesRams").set(LA)
    // firebase.database().ref("Teams/Philadelphia").set(PHI)
    // firebase.database().ref("Teams/LasVegas").set(LV)
    // firebase.database().ref("Teams/Houston").set(HOU)
    // firebase.database().ref("Teams/Arizona").set(ARI)
    // firebase.database().ref("Teams/Chicago").set(CHI)
    // firebase.database().ref("Teams/TampaBay").set(TB)
    // firebase.database().ref("Teams/Indianapolis").set(IND)
    // firebase.database().ref("Teams/SanFrancisco").set(SF)
    // firebase.database().ref("Teams/NewOrleans").set(NO)
    // firebase.database().ref("Teams/Seattle").set(SEA)
}


firebase.database().ref("FirebaseMessage").on("value", function(snapshot) {
    let messageFromFirebase = snapshot.val();
    document.getElementById("firebaseMessage").innerText = messageFromFirebase;
})
