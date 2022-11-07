//Enabling the game
function play(){
    if(document.getElementById("rock").checked == false &&
    document.getElementById("scissors").checked == false &&
    document.getElementById("paper").checked == false){
        alert("Select an option!");
    }
}