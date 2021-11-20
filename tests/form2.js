const inputEmail = document.getElementById('login-email');
const inputPassword = document.getElementById('login-password');
const btnIniciarSesion = document.getElementById('login');

btnIniciarSesion.addEventListener('click', e => {
    const email =  inputEmail.value;
    const password = inputPassword.value;
    const auth = firebase.auth();
    auth().onAuthStateChanged(user => {
        if(user) {
          window.location = 'home.html';
        }
      }); 
});