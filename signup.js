
function signUp(){

var username = document.getElementById("name").value;
var useremail = document.getElementById("email").value;
var userpassword = document.getElementById("password").value;

localStorage.setItem("username1",username);
localStorage.setItem("useremail1",useremail);
localStorage.setItem("userpassword1",userpassword);


}