const inputTask = document.getElementById("input-task");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputTask.value === ''){
        alert("Please enter a task...");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "Delete";
        li.appendChild(span);
    }    
    inputTask.value = "";
    saveData();
}

listContainer.addEventListener("click", event => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function displayData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
displayData();