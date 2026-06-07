let totalExpense = 0;
let totalRecords = 0;

function addExpense(){

let expenseName =
document.getElementById("expenseName").value;

let amount =
document.getElementById("amount").value;

let category =
document.getElementById("category").value;

let date =
document.getElementById("date").value;

if(
expenseName === "" ||
amount === "" ||
category === "" ||
date === ""
){
alert("Please fill all fields");
return;
}

totalExpense += Number(amount);
totalRecords++;

document.getElementById("totalExpense")
.innerText = "₹" + totalExpense;

document.getElementById("totalRecords")
.innerText = totalRecords;

let card =
document.createElement("div");

card.className = "expense";

card.innerHTML = `
<h3>${expenseName}</h3>

<p>
<span class="label">Amount :</span>
₹${amount}
</p>

<p>
<span class="label">Category :</span>
${category}
</p>

<p>
<span class="label">Date :</span>
${date}
</p>

<button
class="edit-btn"
onclick="editExpense(this)">
Edit
</button>

<button
class="delete-btn"
onclick="deleteExpense(this,${amount})">
Delete
</button>
`;

document
.getElementById("expenseContainer")
.appendChild(card);

document.getElementById("expenseName").value="";
document.getElementById("amount").value="";
document.getElementById("category").value="";
document.getElementById("date").value="";
}

function deleteExpense(button,amount){

button.parentElement.remove();

totalExpense -= Number(amount);
totalRecords--;

document.getElementById("totalExpense")
.innerText = "₹" + totalExpense;

document.getElementById("totalRecords")
.innerText = totalRecords;
}

function editExpense(button){

let card =
button.parentElement;

let title =
card.querySelector("h3");

let newName =
prompt(
"Edit Expense Name",
title.innerText
);

if(newName){
title.innerText = newName;
}
}