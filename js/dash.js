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