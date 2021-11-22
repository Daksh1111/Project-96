//YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyAKpASFkk84fkMBM-ymIC9Aqf8rWcr3AKg",
    authDomain: "chatterbox-58484.firebaseapp.com",
    databaseURL: "https://chatterbox-58484-default-rtdb.firebaseio.com",
    projectId: "chatterbox-58484",
    storageBucket: "chatterbox-58484.appspot.com",
    messagingSenderId: "55825783112",
    appId: "1:55825783112:web:04bc430d54ff17911b3b7d"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

//Start code



//End code
    } });
});
}
getData();
function Send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name, 
          message: msg,
          like:0
    });
    document.getElementById("msg").value = "";
}

