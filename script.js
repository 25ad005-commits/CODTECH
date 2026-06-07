let users = [];

function registerUser(){

let username =
document.getElementById("username").value;

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

users.push({
username,
email,
password
});

document.getElementById("message").innerHTML =
"Registration Successful";
}

function loginUser(){

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let found = users.find(
user =>
user.email === email &&
user.password === password
);

if(found){

document.getElementById("message").innerHTML =
"Login Successful";

document.getElementById("blogSection")
.style.display = "block";

}else{

document.getElementById("message").innerHTML =
"Invalid Login";

}
}

function addPost(){

let title =
document.getElementById("title").value;

let content =
document.getElementById("content").value;

let posts =
document.getElementById("posts");

posts.innerHTML += `
<div class="post">
<h3>${title}</h3>
<p>${content}</p>
</div>
`;

document.getElementById("title").value="";
document.getElementById("content").value="";
}