var selectedTasks = [];
var selectCount = 0;
var taskListItems;
var selectLoc = 0;
var offX;
var offY;
var response = {
	"Unassigned":[
		{
			"id":"1",
			"task":"Run with the wind until you become something other that what you are.",
			"status":"unassigned"
		},
		{
			"id":"2",
			"task":"Play with your dad's gun and make sure he isn't home to catch you.",
			"status":"unassigned"
		},
		{
			"id":"3",
			"task":"Catch a cold and let it go into the wild.",
			"status":"unassigned"
		}
	],
	"Abinadi Cordova":[
		{
			"id":"4",
			"task":"Let the dogs out so you can inspire someone to make a song about you.",
			"status":"complete"
		},
		{
			"id":"5",
			"task":"Recall the use of manequin heads for transport to Mars.",
			"status":"pending"
		},
		{
			"id":"6",
			"task":"Silence the Lambs found out in the corn fields of the children.",
			"status":"pending"
		}
	],
	"Yasman Romani":[
		{
			"id":"7",
			"task":"Turn out the lights and compact the little robot inside.",
			"status":"pending"
		},
		{
			"id":"8",
			"task":"Feed the cows take them to a new level of enlightenment.",
			"status":"complete"
		},
		{
			"id":"9",
			"task":"Try A, B, A, AB, A, CC",
			"status":"pending"
		}
	],
	"Kit Gardner":[
		{
			"id":"10",
			"task":"Grow potatoes to feed the need to speed on the speed way.",
			"status":"pending"
		},
		{
			"id":"11",
			"task":"Ride the carousel on a pony too small that goes in circles.",
			"status":"pending"
		},
		{
			"id":"12",
			"task":"Think about the way fish swim and catch a clown fish that is stuggling at life.",
			"status":"complete"
		}
	]
}
var employees = ["Unassigned", "Abinadi Cordova", "Yasman Romani", "Kit Gardner"];

function addTaskEventListeners(){
	taskListItems = document.getElementsByClassName("task-list-item");
	for (i = 0; i < taskListItems.length; i++){
		taskListItems[i].addEventListener("click", setTaskSelect, true);
		taskListItems[i].addEventListener("contextmenu", setTaskEdit, true);
	}
	window.addEventListener("click", removeThings, false);
}
function setTaskSelect(e){
	var selected = false;
	if(selectedTasks[0] != null){
		if(containsObject(e.target, selectedTasks)){
			selected = true;
	}
	}
	if(selected){
		$(e.target).removeAttr("style");
		selectedTasks[selectLoc] = '';
	} else {
		selectedTasks[selectCount] = e.target;
	e.target.setAttribute("style", "background-color: rgba(255,255,255,0.6);");
	selectCount++;
	}
}
function containsObject(obj, array){
	var i;
	for (i = 0; i < array.length; i++){
		if (array[i] === obj){
			selectLoc = i;
			return true;
		}
	}
	return false;
}
function setTaskEdit(e){
	e.preventDefault();
	offX = $(this).offset().left;
	offY = $(this).offset().top;
	offXX = $(this).position().left;
	offYY = $(this).position().top;
	createContext(((e.pageX - offX) + offXX) - 35, ((e.pageY - offY) + offYY) - 5, e.target);
}
function createContext(x, y, parent){
	if(document.getElementsByClassName("taskEditContext")){
		$(".taskEditContext").remove();
	}
	var list = document.createElement("ul");
	list.setAttribute("class", "taskEditContext");
	list.style.left = x + 'px';
	list.style.top = y + 'px';
	var editBtn = document.createElement("li");
	editBtn.setAttribute("class", "taskEditBtn");
	editBtn.innerHTML = "<i class='fa fa-edit'></i> Edit";
	list.appendChild(editBtn);
	parent.appendChild(list);
	
	document.getElementsByClassName("taskEditBtn")[0].addEventListener("mousedown", openTask, false);
}
function removeThings(e){
	if(document.getElementsByClassName("taskEditContext")){
		$(".taskEditContext").remove();
	}
}
function openTask(e){
	editTaskWindow();
}
function editTaskWindow(){
	var parent = document.getElementById("container");
	var window1 = document.createElement("div");
	window1.className = "edit-task-window";
	var title = document.createElement("div");
	title.className = "window-title";
	title.innerHTML = "Create/Edit Task"
	var body = document.createElement("div");
	body.className = "task-body";
	var select = document.createElement("select");
	select.className = "task-assignee";
	var text = document.createElement("textarea");
	text.className = "task-text";
	var save = document.createElement("div");
	save.className = "task-edit-btns";
	save.innerHTML = "Save";
	var del = document.createElement("div");
	del.className = "task-edit-btns";
	del.innerHTML = "Delete";
	var close = document.createElement("div");
	close.className = "task-edit-btns";
	close.innerHTML = "Close";
	
	for(i = 0; i < employees.length; i++){
		var option = document.createElement("option");
		option.className = "task-assignee-option";
		option.innerHTML = employees[i];
		select.appendChild(option);
	}
	
	body.appendChild(select);
	body.appendChild(text);
	body.appendChild(save);
	body.appendChild(del);
	body.appendChild(close);
	window1.appendChild(title);
	window1.appendChild(body);
	parent.appendChild(window1);
	
	enableTaskBtns();
}
function enableTaskBtns(){
	var taskbtns = document.getElementsByClassName("task-edit-btns");
	for(i = 0; i < taskbtns.length; i++){
		taskbtns[i].addEventListener("click", processTask, true);
	}
}
function processTask(e){
	var type = e.target.innerHTML;
	if(type == "Save"){
		
	} else if (type == "Delete"){
		
	} else if (type == "Close"){
		$(".edit-task-window").remove();
	}
}
function loadTaskManager(){
	if(document.getElementById("Project-Tasker")){
		$("#Project-Tasker").remove();
	}
	var mainBtns = document.getElementsByClassName("Dash-btn");
	
	mainBtns[3].innerHTML = "<i class='fa fa-plus taskMainBtns tmbplus'></i>";
	mainBtns[5].innerHTML = "<i class='fa fa-check taskMainBtns tmbcheck'></i>";
	mainBtns[7].innerHTML = "<i class='fa fa-trash taskMainBtns' tmbtrash></i>";
	
	var parent = document.getElementsByClassName("Dash-Buttons");
	var taskMgrUL = document.createElement("div");
	taskMgrUL.className = "content-window";
	taskMgrUL.id = "Project-Tasker";
	var empList = document.createElement("div");
	empList.className = "employee-list-div";
	var empListUL = document.createElement("ul");
	empListUL.className = "employee-list";
	var taskListDiv = document.createElement("div");
	taskListDiv.className = "task-list-div";
	var taskListUL = document.createElement("ul");
	taskListUL.className = "task-list";
	
	for(i = 0; i < employees.length; i++){
		var empListItem = document.createElement("li");
		empListItem.className = "employee-list-item";
		empListItem.innerHTML = employees[i];
		if(i == 0){
			empListItem.setAttribute("style", "background-color:rgba(255,255,255,0.6);");
		}
		empListUL.appendChild(empListItem);
	}
	
	for(j = 0; j < response["Unassigned"].length; j++){
		var taskListItem = document.createElement("li");
		taskListItem.className = "task-list-item";
		var taskListISpan = document.createElement("span");
		taskListISpan.innerHTML = response["Unassigned"][j].task;
		
		taskListItem.appendChild(taskListISpan);
		if(response["Unassigned"][j].status != "unassigned"){
			var stats = "";
			if(response["Unassigned"][j].status == "complete"){
				stats = "check";
			} else {
				stats = "clock-o";
			}
			var statusIcon = document.createElement("i");
			statusIcon.className = "fa fa-" + stats + " task-status-icon " + response["Unassigned"][j].status;
			
			taskListItem.appendChild(statusIcon);
		}
		taskListUL.appendChild(taskListItem);
	}
	
	empList.appendChild(empListUL);
	taskListDiv.appendChild(taskListUL);
	taskMgrUL.appendChild(empList);
	taskMgrUL.appendChild(taskListDiv);
	parent[0].appendChild(taskMgrUL);
	
	var names = document.getElementsByClassName("employee-list-item");
	
	for (k = 0; k < names.length; k++){
		names[k].addEventListener("click", changeTasksList, true);
	}
	addTaskEventListeners();
}
function changeTasksList(e){
	var parent = document.getElementsByClassName("task-list")[0];
	parent.innerHTML = "";
	var names = $(".employee-list-item");
	var name = e.target.innerHTML;
	
	for(i = 0; i < names.length; i++){
		names[i].removeAttribute("style");
	}
	
	e.target.setAttribute("style", "background-color: rgba(255,255,255,0.6);");
	
	for(j = 0; j < response[name].length; j++){
		var taskListItem = document.createElement("li");
		taskListItem.className = "task-list-item";
		var taskListISpan = document.createElement("span");
		taskListISpan.innerHTML = response[name][j].task;
		
		taskListItem.appendChild(taskListISpan);
		if(response[name][j].status != "unassigned"){
			var stats = "";
			if(response[name][j].status == "complete"){
				stats = "check";
			} else {
				stats = "clock-o";
			}
			var statusIcon = document.createElement("i");
			statusIcon.className = "fa fa-" + stats + " task-status-icon " + response[name][j].status;
			
			taskListItem.appendChild(statusIcon);
		}
		parent.appendChild(taskListItem);
	}
	addTaskEventListeners();
}
//window.onload = function(){ loadTaskManager(); };