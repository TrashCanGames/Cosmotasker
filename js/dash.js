function gotoHome(){
    $(".content-window").remove();
    removeMainBtnsEventL();
    var mainBtns = document.getElementsByClassName("Dash-btn");
    mainBtns[3].innerHTML = "<span>My Files</span>";
    mainBtns[5].innerHTML = "<span>Calendar</span>";
    mainBtns[7].innerHTML = "<span>Settings</span>";

    //enable home btn even listeners
}
