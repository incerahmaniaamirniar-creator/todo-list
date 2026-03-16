function addTask(){

let input = document.getElementById("taskInput");
let taskText = input.value;

if(taskText === ""){
alert("Masukkan tugas dulu!");
return;
}

let li = document.createElement("li");

let span = document.createElement("span");
span.textContent = taskText;

span.onclick = function(){
span.classList.toggle("completed");
}

let del = document.createElement("button");
del.textContent = "🗑";
del.className="delete";

del.onclick=function(){
li.remove();
}

li.appendChild(span);
li.appendChild(del);

document.getElementById("taskList").appendChild(li);

input.value="";

}
