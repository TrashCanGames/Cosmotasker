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
	console.log("offset x: " + offX + " " + offXX + ", offset y: " + offY);
	console.log("offset x: " + e.clientX + ", offset y: " + e.clientY);
	console.log("offset x: " + e.pageX + ", offset y: " + e.pageY);
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
	editBtn.innerHTML = "Edit Task";
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
	console.log("opening task");
}
window.onload = function(){ addTaskEventListeners(); };