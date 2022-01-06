const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const submitBtn = document.querySelector("#submitBtn");
const doneBtn = document.querySelector(".doneBtn")
function addTask() {
    let task = document.createElement("li");
    task.innerHTML = taskInput.value;
    if (taskInput.value === ""){
        null
    }
    else{
        task.style.background = "rgba(255, 0, 0, .5)";
        taskList.appendChild(task);
        let doneBtn = document.createElement("button")
        doneBtn.type =  "button";
        doneBtn.className = "btn btn-primary ml-5 my-1 p-1";
        doneBtn.innerHTML = "Done?";
        doneBtn.onclick = taskDone; 
        task.appendChild(doneBtn)
        let deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.className = "btn btn-dark ml-1 my-1 p-1 ";
        deleteBtn.innerHTML = "X";
        deleteBtn.onclick = removeTask;
        task.appendChild(deleteBtn)
        function removeTask() { 
            this.parentNode.remove();
        }
        function taskDone(){
            this.parentNode.style.background = "rgba(0, 255, 0, .5)";
            this.innerHTML = " Not Done?";
            this.onclick = taskNotDone;
        }
        function taskNotDone() {
            this.parentNode.style.background = "rgba(255, 0, 0, .5)";
            this.innerHTML = "Done?";
            this.onclick = taskDone;
        }
        deleteBtn.onclick = removeTask;
        taskInput.value = ""
    }
}

submitBtn.addEventListener("click", addTask);

