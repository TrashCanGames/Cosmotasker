var selectedFile = [];
var response1 = {
    "Abinadi Cordova": [
        {
            "id": "1",
            "type": "image",
			"size": "40k",
            "location": "/files/test1.jpg"
        },
        {
            "id": "2",
            "type": "video/mp4",
			"size": "720Mb",
            "location": "/files/test2.mp4"
        },
        {
            "id": "3",
            "type": "pdf",
			"size": "3Mb",
            "location": "/files/test3.pdf"
        },
        {
            "id": "4",
            "type": "txt",
			"size": "5k",
            "location": "/files/test3.txt"
        }
    ]
};

function addMainFilesEventListeners(){
	var buttons = document.getElementsByClassName("fileMainBtns");
	for(i = 0; i < buttons.length; i++){
		buttons[i].addEventListener("mousedown", mainFileBtnPress, false);
}
}

function loadFilesManager(){
	if(document.getElementById("MyFiles")){
		$("#MyFiles").remove();
	}
	
	var mainBtns = document.getElementsByClassName("Dash-btn");
	
	mainBtns[1].innerHTML = "<i class='fa fa-upload fileMainBtns'></i>";
	mainBtns[5].innerHTML = "<i class='fa fa-download fileMainBtns'></i>";
	mainBtns[7].innerHTML = "<i class='fa fa-trash fileMainBtns'></i>";
	
	addMainFilesEventListeners();
	
	var parent = document.getElementsByClassName("Dash-Buttons");
	var fileContainer = document.createElement("ul");
	fileContainer.className = "content-window";
	fileContainer.id = "MyFiles";
	
	for(i = 0; i < response1["Abinadi Cordova"].length; i++){
		var fileLI = document.createElement("li");
		fileLI.className = "file-LI";
		fileLI.id = response1["Abinadi Cordova"][i].id;
		
		var type = response1["Abinadi Cordova"][i].type;
		
		switch(type){
			case "image", "pdf", "txt":
			var image = document.createElement("img");
			image.href = window.location.protocol + "//" + window.location.hostname + "/" + Object.keys(response1)[0] + "/" + response1["Abinadi Cordova"][i].location;
			fileLI.appendChild(image);
			break;
			case "video/mp4":
			var video = document.createElement("video");
			video.className = "videoThumb";
			video.controls = true;
			var source = document.createElement("source");
			source.src = window.location.protocol + "//" + window.location.hostname + "/" + Object.keys(response1)[0] + "/" + response1["Abinadi Cordova"][i].location;
			source.type = type;
			video.appendChild(source);
			fileLI.appendChild(video);
			break;
		}
		fileContainer.appendChild(fileLI);
	}
	parent[0].appendChild(fileContainer);
}

function mainFileBtnPress(e){
		if($(e.target).hasClass("fa-upload")){
		fileUploadWindow();
	} else if ($(e.target).hasClass("fa-download")){
		if(selectedFile.length == 0 || checkForSelectedFiles() == false){
			alert("No file(s) selected!");
		} else {
			alert("Download started.");
		}
	} else if ($(e.target).hasClass("fa-trash")){
		if(selectedFile.length == 0 || checkForSelectedFiles() == false){
			alert("No files selected!");
		} else {
			alert("Deleted file(s).");
		}
	}
}

function checkForSelectedFiles(){
	for(i = 0; i < selectedFile.length; i++){
		if(selectedFile[i] != ""){
			return true;
		}
	}
	return false;
}

function removeMainBtnsEventL(){
	if($(".fileMainBtns")){
		var buttons = document.getElementsByClassName("fileMainBtns");
		for(i = 0; i < buttons.length; i++){
			buttons[i].removeEventListener("mousedown", mainFileBtnPress, false);
		}
	}
} 