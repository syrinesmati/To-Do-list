const inputBox = document.getElementById("input-box");
const lisContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ""){
        alert("Please enter a task");
        inputBox.value = "";
        return;
    }
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    lisContainer.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
    saveData();
}
lisContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", lisContainer.innerHTML);
}
function showTask(){
    lisContainer.innerHTML = localStorage.getItem("data");
}
showTask();