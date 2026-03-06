let form = document.getElementById('student-form');
let nameInput = document.getElementById('student-name');
let rollInput = document.getElementById('student-roll');
let list = document.getElementById('student-list');
let totalText = document.getElementById('total');
let attendanceText = document.getElementById('attendance');
let addBtn = document.getElementById('add-btn');
let searchBox = document.getElementById('search');

let presentCount = 0;

nameInput.addEventListener('input', function(){
if(nameInput.value.trim() === "")
addBtn.disabled = true;
else
addBtn.disabled = false;
});

form.addEventListener('submit', addStudent);

function addStudent(e){

e.preventDefault();

let name = nameInput.value;
let roll = rollInput.value;

if(name === "" || roll === ""){
alert("Enter name and roll");
return;
}

let li = document.createElement('li');
li.classList.add('student-item');

let span = document.createElement('span');
span.textContent = roll + " - " + name;

let checkbox = document.createElement('input');
checkbox.type = "checkbox";

checkbox.addEventListener('change', function(){

if(checkbox.checked){
li.classList.add('present');
presentCount++;
}
else{
li.classList.remove('present');
presentCount--;
}

updateAttendance();

});

let editBtn = document.createElement('button');
editBtn.textContent = "Edit";
editBtn.classList.add('btn-edit');

editBtn.onclick = function(){

let newName = prompt("Enter new name", name);
let newRoll = prompt("Enter new roll", roll);

if(newName && newRoll){
span.textContent = newRoll + " - " + newName;
name = newName;
roll = newRoll;
}

};

let deleteBtn = document.createElement('button');
deleteBtn.textContent = "Delete";
deleteBtn.classList.add('btn-delete');

deleteBtn.onclick = function(){

let confirmDelete = confirm("Are you sure you want to delete this student?");

if(confirmDelete){

if(checkbox.checked)
presentCount--;

li.remove();

updateCount();
updateAttendance();

}

};

li.appendChild(span);
li.appendChild(checkbox);
li.appendChild(editBtn);
li.appendChild(deleteBtn);

list.appendChild(li);

nameInput.value="";
rollInput.value="";
addBtn.disabled=true;

updateCount();
updateAttendance();

}

function updateCount(){

let total = document.querySelectorAll('.student-item').length;

totalText.textContent = "Total students: " + total;

}

function updateAttendance(){

let total = document.querySelectorAll('.student-item').length;

let absent = total - presentCount;

attendanceText.textContent = "Present: " + presentCount + " , Absent: " + absent;

}

searchBox.addEventListener('input', function(){

let text = searchBox.value.toLowerCase();

let students = document.querySelectorAll('.student-item');

students.forEach(function(student){

let name = student.querySelector('span').textContent.toLowerCase();

if(name.includes(text))
student.style.display = "flex";
else
student.style.display = "none";

});

});

document.getElementById('sort-btn').onclick = function(){

let students = document.querySelectorAll('.student-item');

let studentsArray = Array.from(students);

studentsArray.sort(function(a,b){

let textA = a.querySelector('span').textContent;
let textB = b.querySelector('span').textContent;

let nameA = textA.split(" - ")[1].toLowerCase();
let nameB = textB.split(" - ")[1].toLowerCase();

return nameA.localeCompare(nameB);

});

studentsArray.forEach(function(student){
list.appendChild(student);
});

};

document.getElementById('highlight-btn').onclick = function(){

let students = document.querySelectorAll('.student-item');

students.forEach(function(s){
s.classList.remove('highlight');
});

if(students.length > 0){
students[0].classList.add('highlight');
}

};