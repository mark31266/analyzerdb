window.addEventListener("DOMContentLoaded", () => {
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
    firebase.initializeApp(firebaseConfig);
          document.getElementById("login")
            .addEventListener("submit", (event) => {
              event.preventDefault  ();
              const login = event.target.login.value;
              const password = event.target.password.value;
              firebase
                .auth()
                .signInWithEmailAndPassword(login, password)
                .then(({ user }) => {
                  return user.getIdToken().then((idToken) => {
                    return fetch("/sessionLogin", {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "CSRF-Token": Cookies.get("XSRF-TOKEN"),
                      },
                      body: JSON.stringify({ idToken }),
                    });
                  });
                }).then(() => {
                  firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                      alert("User " + login + " has logged in")
                      window.location.assign("myth22/home");
                    } else {
                      return firebase.auth().signOut();
                    }
                }); 
                }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);    

});
              return false;
          
            });
        });
    
//-------------------------------------dangerous code-----------------------------------------//
          document
          .getElementById("forgot-password")
        .addEventListener("submit", (event) => {
          event.preventDefault  ();
         var email = document.getElementById("email_field").value 
          forgotPassword(email)
        });
//-------------------------------------dangerous code-----------------------------------------//
      
        const forgotPassword = (email) => {
        firebase.auth()
          .sendPasswordResetEmail(email)
           .then(function () { 
            alert("Email Sent to " + email);
          }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);     
    console.log(error);
});
        }
  