function addTask(){

let taskName =
document.getElementById("taskName").value;

let assignedTo =
document.getElementById("assignedTo").value;

let description =
document.getElementById("description").value;

let status =
document.getElementById("status").value;

if(
taskName==="" ||
assignedTo==="" ||
description===""){
alert("Please fill all fields");
return;
}

let task =
document.createElement("div");

task.className="task";

task.innerHTML=`
<h3>${taskName}</h3>

<p><strong>Assigned To:</strong>
${assignedTo}</p>

<p><strong>Status:</strong>
${status}</p>

<p><strong>Description:</strong>
${description}</p>

<button class="edit-btn"
onclick="editTask(this)">
Edit
</button>

<button class="delete-btn"
onclick="deleteTask(this)">
Delete
</button>
`;

document
.getElementById("taskContainer")
.appendChild(task);

document.getElementById("taskName").value="";
document.getElementById("assignedTo").value="";
document.getElementById("description").value="";
}

function deleteTask(button){
button.parentElement.remove();
}

function editTask(button){

let task=
button.parentElement;

let title=
task.querySelector("h3");

let newTitle=
prompt(
"Edit Task Name",
title.innerText
);

if(newTitle){
title.innerText=newTitle;
}
}