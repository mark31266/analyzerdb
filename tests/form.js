
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

      //invokes firebase authentication.
      const auth = firebase.auth();
      const login = () => {
        const email = document.querySelector("#login-email").value;
        const password = document.querySelector("#login-password").value;

        if (email.trim() == "") {
          alert("Enter Email");
        } else if (password.trim() == "") {
          alert("Enter Password");
        } else {
          authenticate(email, password);
        }
      };
      document.querySelector("#login").addEventListener("click", () => {
        login();
      });
      //sign in when you hit enter
      document
        .querySelector("#login-password")
        .addEventListener("keyup", (e) => {
          if (event.keyCode === 13) {
            e.preventDefault();  
            login(window.location = "./home.html");
          }
        });

      const authenticate = (email, password) => {
        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, password);
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
          });
      };

      const showHomepage = () => {
     
        document.querySelector("#login-page").classList.add("hide");
        document.querySelector("#homepage").classList.remove("hide");
       
      };

      const signOut = () => {
        firebase
          .auth()
          .signOut()
          .then(function () {
            location.reload();
          })
          .catch(function (error) {
            alert("error signing out, check network connection");
          });
      };

      auth.onAuthStateChanged((firebaseUser) => {
        if (firebaseUser) {
          showHomepage();
        }
      });

      document
        .querySelector("#forgot-password")
        .addEventListener("click", () => {
          const email = document.querySelector("#login-email").value;
          if (email.trim() == "") {
            alert("Enter Email");
          } else {
            forgotPassword(email);
          }
        });

      const forgotPassword = (email) => {
        auth
          .sendPasswordResetEmail(email)
          .then(function () {
            alert("email sent");
          })
          .catch(function (error) {
            alert("invalid email or bad network connection");
          });
      };