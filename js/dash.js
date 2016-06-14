<<<<<<< HEAD
function gotoHome(){
    $(".content-window").remove();
    removeMainBtnsEventL();
    var mainBtns = document.getElementsByClassName("Dash-btn");
    mainBtns[3].innerHTML = "<span>My Files</span>";
    mainBtns[5].innerHTML = "<span>Calendar</span>";
    mainBtns[7].innerHTML = "<span>Settings</span>";

    //enable home btn even listeners
}
=======
//Background Changer
var bgID = 1;
var bgChangeInterval = setInterval(function(){ bgTracker() }, 300000);
function bgTracker(){
	if(bgID == 10){
		bgID = 0;
	}
	document.body.setAttribute("Style", "background-image: url('bg/" + bgID + ".jpg');");
	bgID++;
}
>>>>>>> origin/master
