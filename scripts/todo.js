"use strict";
const todoInputBox = document.getElementById("todoInputBox");
const submitBtn = document.getElementById("submitBtn");
const todoIdOutput = document.getElementById("todoIdOutput");

window.onload = function(){
    submitBtn.onclick = submitBtnClicked;
}

function submitBtnClicked(){
    let userId = todoInputBox.value;
    fetch('https://jsonplaceholder.typicode.com/todos/' + userId)
    .then(response => response.json())
    .then (user =>{
        console.log(user)
        let result = `id: ${user.id} <br>` +
                    `Title: ${user.title} <br>` +
                    `completed: ${user.completed} <br>`;

        todoIdOutput.innerHTML = result;
    })
    
}

