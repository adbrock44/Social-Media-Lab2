const loginButton = document.querySelector('#login');
const registerButton = document.querySelector('#register');
const authButtons = document.querySelector('#auth-buttons');

loginButton.addEventListener('click', () => {
  authButtons.classList.toggle('show-login');
});

registerButton.addEventListener('click', () => {
  authButtons.classList.toggle('show-register');
  
});

const homelogin = document.getElementById('login-button');

homelogin.onclick = function() {
  window.location.href = "http://localhost:1337/login";
}