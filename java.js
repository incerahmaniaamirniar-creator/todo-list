function addTask(){

let input = document.getElementById("taskInput");
let taskText = input.value.trim();

if(taskText === ""){
alert("Tugas tidak boleh kosong!");
return;
}

let li = document.createElement("li");

let checkbox = document.createElement("input");
checkbox.type = "checkbox";

checkbox.onclick = function(){
li.classList.toggle("completed");
};

let span = document.createElement("span");
span.textContent = taskText;

let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Hapus";
deleteBtn.className = "delete-btn";

deleteBtn.onclick = function(){
li.remove();
};

li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(deleteBtn);

document.getElementById("taskList").appendChild(li);

input.value="";
}
