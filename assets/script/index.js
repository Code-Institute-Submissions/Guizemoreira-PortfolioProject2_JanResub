//Enabling the game
function play(){
    if(document.getElementById("rock").checked == false &&
    document.getElementById("scissors").checked == false &&
    document.getElementById("paper").checked == false){
        alert("Select an option!");
    }
}


//Cleaning options
function reset(){
    document.getElementById("iaplayer").innerHTML="IA Player";
    document.getElementById("iawin").innerHTML="";
    document.getElementById("score").innerHTML="";
}