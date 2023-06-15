"use strict";
const todoInputBox = document.getElementById("todoInputBox");
const submitBtn = document.getElementById("submitBtn");
const usersListingTable = document.getElementById("usersListingTable");

window.onload = function(){
    submitBtn.onclick = submitBtnClicked;
}

function submitBtnClicked(){
    let Id = todoInputBox.value;
    fetch('https://jsonplaceholder.typicode.com/users/' + Id)
    .then(response => response.json())
    .then (users =>{
        console.log(users)
    
            let companyName = users.company.name;
            let newRow = usersListingTable.insertRow(-1);
    
            let cell1 = newRow.insertCell(0);
            cell1.innerHTML = users.name;
    
            let cell2 = newRow.insertCell(1);
            cell2.innerHTML = users.username;
    
            let cell3 = newRow.insertCell(2);
            cell3.innerHTML = users.email;

            let cell4 = newRow.insertCell(3);
            cell4.innerHTML = users.phone;

            let cell5 = newRow.insertCell(4);
            cell5.innerHTML = users.website;

            let cell6 = newRow.insertCell(5);
            cell6.innerHTML = companyName;


          
        
    })
    
}

