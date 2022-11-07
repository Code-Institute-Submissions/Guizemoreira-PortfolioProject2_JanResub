//Enabling the game
function play(){
    if(document.getElementById("rock").checked == false &&
    document.getElementById("scissors").checked == false &&
    document.getElementById("paper").checked == false){
        alert("Select an option!");
    } else {
        //Main block
        var pickacard = Math.floor(Math.random()*3);
        switch(pickacard){
            case 0:
                document.getElementById("iaplayer").innerHTML="IA selected Rock!";
                break;
            case 1:
                document.getElementById("iaplayer").innerHTML="IA selected Scissorss!";
                break;
            case 2:
                document.getElementById("iaplayer").innerHTML="IA selected Paper!";
                break;
        }
    }
}


//Cleaning options
function reset(){
    document.getElementById("iaplayer").innerHTML="IA Player";
    document.getElementById("iawin").innerHTML="";
    document.getElementById("score").innerHTML="";
}